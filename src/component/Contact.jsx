import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Alert from '@/component/Alert';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        try {
            const response = await fetch('https://formspree.io/f/mblkkjnk', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: e.target.name.value,
                    email: e.target.email.value,
                    message: e.target.message.value
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset(); // Reset form setelah submit sukses
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitted(false);
        }
    }

    return (
        <div className='mb-20' ref={ref}>
            <div className="mb-20 max-w-2xl mx-auto">
                <h2 className="scroll-m-20 text-3xl text-center font-source-code tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name='name' className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="email" placeholder="Email" name='email' className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <textarea placeholder="Message" name='message' rows="4" className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                    <div className="flex justify-center">
                        <button type="submit" disabled={isSubmitted} className={`px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {isSubmitted ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                {submitStatus === 'success' && (
                    <Alert type="success" message="Your message has been sent successfully!" onClose={() => setSubmitStatus(null)} />
                )}
                {submitStatus === 'error' && (
                    <Alert type="error" message="There was an error sending your message. Please try again." onClose={() => setSubmitStatus(null)} />
                )}
            </div>
        </div>


    )
};

export default Contact;