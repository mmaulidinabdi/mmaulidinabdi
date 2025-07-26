import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
            {/* Navigation */}
            <div className="sticky top-0 z-20 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
                <nav className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between p-4">
                        <a href="#" className="flex items-center space-x-3 group">
                            <div className="font-source-code text-sm text-green-500">
                                <span className="text-gray-300">~$</span> dev/root@127.0.0.1
                                <span className="ml-1 h-5 w-0.5 bg-green-500 inline-block align-middle animate-blink group-hover:bg-transparent transition-colors duration-300"></span>
                            </div>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col items-center  max-w-3xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                            mAuld__<span className="text-white animate-blink group-hover:bg-transparent transition-colors duration-300">+</span>
                        </h1>
                        <p className=" font-ubuntu text-sm  text-center text-gray-400 underline underline-offset-8 decoration-green-500/50">
                            Fullstack Web Developer | DevOps Engineer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 mb-16">
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                            <Github size={24} />
                        </a>
                    </div>

                    {/* About Section */}
                    <div className="mb-20">
                        <h2 className="scroll-m-20 text-3xl text-center font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                            About Me
                        </h2>
                        <p className="leading-relaxed text-gray-300">
                            A passionate IT student specializing in web development with a keen interest in exploring
                            technological advancements. Experienced in Cloud Computing and DevOps, I enjoy experimenting
                            with new technologies and building innovative solutions.
                        </p>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="l mx-auto">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                        Sacred Timeline
                    </h2>

                    <ol className="relative border-s border-gray-700">
                        {/* Timeline Item 1 */}
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink1"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">June 2019 - August 2022</time>
                            <h3 className="text-xl font-semibold text-white">Madrasah Aliyah Negeri 1 Banjarmasin</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">
                                Science Major, where I developed a strong foundation in mathematics and science.
                            </p>
                        </li>

                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink1"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">August 2022 - October 2025</time>
                            <h3 className="text-xl font-semibold text-white">Banjarmasin State Polytechnic</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">
                                Informatic Engineering, focusing on Web Development and DevOps practices.
                            </p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-colors">
                                View Project
                                <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </li>

                        {/* Timeline Item 2 */}
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink2"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                            <h3 className="text-xl font-semibold text-white">Fullstack Web Application</h3>
                            <p className="text-base font-normal text-gray-400">
                                Developed a responsive MERN stack application with user authentication and real-time features.
                                Optimized frontend performance using React hooks and context API, achieving 95% Lighthouse score.
                            </p>
                        </li>

                        {/* Timeline Item 3 */}
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink3"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
                            <h3 className="text-xl font-semibold text-white">DevOps Automation</h3>
                            <p className="text-base font-normal text-gray-400">
                                Created infrastructure-as-code templates using Terraform and automated deployment workflows.
                                Reduced deployment times by 70% through containerization and Kubernetes orchestration.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} mAuld__. All rights reserved.</p>
            </footer>
        </div>
    );
}