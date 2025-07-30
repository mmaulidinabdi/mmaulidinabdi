import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Contact = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true // Hanya trigger sekali
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        }
    }, [inView]);


    return (
        <div className='mb-20' ref={ref}>
            <div className="mb-20 max-w-2xl mx-auto">
                <h2 className="scroll-m-20 text-3xl text-center font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                    {startAnimation && (
                        <TypeAnimation
                            sequence={[
                                500,
                                "Any Questions?",
                            ]}
                            speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
                            style={{ fontSize: '1em' }}
                            repeat={Infinity}
                        />
                    )}
                </h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="email" placeholder="Email" className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <textarea placeholder="Message" rows="4" className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                    <div className="flex justify-center">
                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;