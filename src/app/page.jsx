"use client";
import { Linkedin, Instagram, Github } from 'lucide-react';
import Projects from '@/component/Projects';
import Contact from "@/component/Contact";
import TechStack from '@/component/TechStack';
import TechRainBackground from '@/component/bg';



export default function Portfolio() {


    return (
        <>
            <TechRainBackground
                speed={2}
                color="#11D432"
                fontSize={10}
                opacity={1}
                trail={1}
                density={4}
            />
            <div className="min-h-screen text-gray-200 z-10 ">
                {/* Navigation */}
                pp
                <div className="sticky top-0 z-20 backdrop-blur-sm border-b border-gray-800">
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
                <div className="mx-auto px-6 py-20">
                    {/* About */}
                    <div className="flex flex-col items-center max-w-3xl mx-auto max-h-screen mb-30">
                        <div className="mb-8">
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                                mAuld__<span className="text-white animate-blink group-hover:bg-transparent transition-colors duration-300">+</span>
                            </h1>
                            <div className="gap-3 flex flex-col items-center mt-10">
                                <p className=" font-ubuntu text-xl text-center text-gray-400 underline underline-offset-8 decoration-green-500/50">
                                    Muhammad Maulidin Abdi
                                </p>
                                <p className=" font-ubuntu text-sm  text-center text-gray-400 underline underline-offset-8 decoration-green-500/50">
                                    Fullstack Web Developer | DevOps Engineer
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col items-center gap-3">
                            {/* Social Links */}
                            <div className="flex gap-20 mt-10">
                                <a href="https://www.linkedin.com/in/muhammad-maulidin-abdi/" target='_blank' className="text-gray-400 hover:text-green-500 transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/m.maulidin_abdi/" target='_blank' className="text-gray-400 hover:text-green-500 transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://github.com/mmaulidinabdi" target='_blank' className="text-gray-400 hover:text-green-500 transition-colors">
                                    <Github size={24} />
                                </a>
                            </div>

                            {/* About Section */}
                            <div className="mt-15 md:mt-25">
                                <h2 className="scroll-m-20 text-3xl text-center font-source-code tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                                    About Me
                                </h2>
                                <p className="leading-relaxed text-gray-300">
                                    A passionate IT student specializing in web development with a keen interest in exploring
                                    technological advancements. Experienced in Cloud Computing and DevOps, I enjoy experimenting
                                    with new technologies and building innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mx-auto min-h-screen mb-20 md:px-30">
                        <h2 className="scroll-m-20 text-3xl font-fira tracking-tight mb-10 text-center font-source-code text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
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
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink2"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">August 2022 - October 2025</time>
                                <h3 className="text-xl font-semibold text-white">Banjarmasin State Polytechnic</h3>
                                <p className="mb-4 text-base font-normal text-gray-400">
                                    Informatic Engineering, focusing on Web Development.
                                </p>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-colors">
                                View Project
                                <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a> */}
                            </li>

                            {/* Timeline Item 2 */}
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink3"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">February 2024 - June 2024</time>
                                <h3 className="text-xl font-semibold text-white">Bangkit Academy Cloud Computing Learning Path</h3>
                                <p className="text-base font-normal text-gray-400">
                                    Learn Backend Development, DevOps and Cloud Computing Using Google Cloud Platform.
                                    Building System API, Design Application Database, Cloud Architecture and Deploy Application.
                                </p>
                            </li>

                            {/* Timeline Item 3 */}
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink4"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">September 2024 - January 2025</time>
                                <h3 className="text-xl font-semibold text-white">Intership at Dinas Perpustakaan dan Kearsipan Kota Banjarmasin</h3>
                                <p className="text-base font-normal text-gray-400">
                                    Design and build a website for building permit management
                                </p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900 animate-blink5"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">September 2024 - Mei 2025</time>
                                <h3 className="text-xl font-semibold text-white">Dicoding DevOps Learning Path</h3>
                                <p className="text-base font-normal text-gray-400">
                                    Learn about DevOps, networking, building CI/CD pipelines, and building microservice architectures.
                                </p>
                            </li>
                        </ol>
                    </div>

                    <div className="mb-20 md:px-30">
                        <h2 className="scroll-m-20 text-3xl text-center font-source-code tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                            Projects
                        </h2>
                        <Projects />
                    </div>
                    <div className="mb-20 md:px-30">

                        <TechStack />
                        <Contact />
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} mAuld__. All rights reserved.</p>
                </footer>
            </div >
        </>
    );
}