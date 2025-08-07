// import { useRef, useEffect } from 'react';
// // import './Squares.css';

// const Squares = ({
//   direction = 'right',
//   speed = 1,
//   borderColor = '#999',
//   squareSize = 40,
//   hoverFillColor = '#222',
//   className = ''
// }) => {
//   const canvasRef = useRef(null);
//   const requestRef = useRef(null);
//   const numSquaresX = useRef();
//   const numSquaresY = useRef();
//   const gridOffset = useRef({ x: 0, y: 0 });
//   const hoveredSquare = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//       numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
//       numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     const drawGrid = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
//       const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

//       for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
//         for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
//           const squareX = x - (gridOffset.current.x % squareSize);
//           const squareY = y - (gridOffset.current.y % squareSize);

//           if (
//             hoveredSquare.current &&
//             Math.floor((x - startX) / squareSize) === hoveredSquare.current.x &&
//             Math.floor((y - startY) / squareSize) === hoveredSquare.current.y
//           ) {
//             ctx.fillStyle = hoverFillColor;
//             ctx.fillRect(squareX, squareY, squareSize, squareSize);
//           }

//           ctx.strokeStyle = borderColor;
//           ctx.strokeRect(squareX, squareY, squareSize, squareSize);
//         }
//       }

//       const gradient = ctx.createRadialGradient(
//         canvas.width / 2,
//         canvas.height / 2,
//         0,
//         canvas.width / 2,
//         canvas.height / 2,
//         Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
//       );
//       gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     const updateAnimation = () => {
//       const effectiveSpeed = Math.max(speed, 0.1);
//       switch (direction) {
//         case 'right':
//           gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
//           break;
//         case 'left':
//           gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
//           break;
//         case 'up':
//           gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
//           break;
//         case 'down':
//           gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
//           break;
//         case 'diagonal':
//           gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
//           gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
//           break;
//         default:
//           break;
//       }

//       drawGrid();
//       requestRef.current = requestAnimationFrame(updateAnimation);
//     };

//     const handleMouseMove = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = event.clientX - rect.left;
//       const mouseY = event.clientY - rect.top;

//       const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
//       const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

//       const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
//       const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

//       if (
//         !hoveredSquare.current ||
//         hoveredSquare.current.x !== hoveredSquareX ||
//         hoveredSquare.current.y !== hoveredSquareY
//       ) {
//         hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
//       }
//     };

//     const handleMouseLeave = () => {
//       hoveredSquare.current = null;
//     };

//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('mouseleave', handleMouseLeave);

//     requestRef.current = requestAnimationFrame(updateAnimation);

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(requestRef.current);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [direction, speed, borderColor, hoverFillColor, squareSize]);

//   return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
// };

// export default Squares;

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

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
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
      initColumns();
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
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default TechRainBackground;