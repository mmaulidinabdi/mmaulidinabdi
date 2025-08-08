

"use client";
import { useRef, useEffect } from 'react';

const TechRainBackground = ({
    speed = 2,
    fontSize = 16,
    characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
    color = "#11D432",
    opacity = 0.8,
    trail = 0.5,
    density = 0.05
}) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const columns = useRef([]);
    const dimensions = useRef({ width: 0, height: 0 });

    // Inisialisasi kolom
    const initColumns = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        dimensions.current = { width, height };
        canvas.width = width;
        canvas.height = height;

        const columnCount = Math.floor(width / fontSize);
        columns.current = Array(columnCount).fill().map((_, i) => ({
            x: i * fontSize,
            y: Math.random() * -height,
            speed: 0.5 + Math.random() * speed,
            length: 5 + Math.floor(Math.random() * 15),
            chars: Array(20).fill().map(() =>
                characters[Math.floor(Math.random() * characters.length)]
            )
        }));
    };

    // Animasi frame
    const animate = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { width, height } = dimensions.current;

        // Clear canvas dengan opacity untuk efek trail
        ctx.fillStyle = `rgba(10, 15, 20, ${trail})`;
        ctx.fillRect(0, 0, width, height);

        // Gambar semua kolom
        ctx.font = `${fontSize}px monospace`;
        columns.current.forEach((col, i) => {
            // Update posisi
            col.y += col.speed;

            // Reset kolom jika sudah keluar layar
            if (col.y > height + col.length * fontSize) {
                col.y = Math.random() * -fontSize * col.length;
                col.speed = 0.5 + Math.random() * speed;
                col.length = 5 + Math.floor(Math.random() * 15);
            }

            // Gambar karakter dengan gradien
            const gradient = ctx.createLinearGradient(col.x, col.y, col.x, col.y + col.length * fontSize);
            gradient.addColorStop(0, `${color}FF`);
            gradient.addColorStop(0.5, `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${color}00`);

            ctx.fillStyle = gradient;

            // Gambar setiap karakter dalam kolom
            for (let j = 0; j < col.length; j++) {
                const charY = col.y + j * fontSize;
                if (charY > 0 && charY < height) {
                    const charIndex = Math.floor((col.y + j) / fontSize) % col.chars.length;
                    ctx.fillText(col.chars[charIndex], col.x, charY);

                    // Karakter pertama lebih terang
                    if (j === 0) {
                        ctx.fillStyle = `${color}FF`;
                    }
                }
            }
        });

        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        initColumns();
        animationRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Cegah reinit jika dimensi tidak berubah
            if (width !== dimensions.current.width) {
                initColumns();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [speed, fontSize, characters, color, opacity, trail, density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-black"
            style={{ opacity }}
        />
    );
};

export default TechRainBackground;