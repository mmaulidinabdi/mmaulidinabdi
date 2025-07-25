import Header from "@/component/Header";
import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Hahaha() {
    return (
        <>
            <div className="sticky top-0 z-20 bg-[#0a0a0a]">
                <nav className="">
                    <div className=" flex flex-wrap items-center justify-between mx-auto p-3">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="self-center text-sm font-source-code whitespace-nowrap dark:text-white">dev/root@127.0.0.1<span>|</span></div>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="flex flex-col items-center mt-15 min-h-screen p-5">
                <div className="p-2">
                    <h2 className="text-6xl mb-5 text-center">mAuld__<span>+</span></h2>
                    <p className="text-center text-xs underline underline-offset-8">Fullstuck webdev | DevOps</p>
                </div>
                <div className="flex gap-10 p-4">
                    <Linkedin size={25} />
                    <Instagram size={25} />
                    <Github size={25} />
                </div>
                <div>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                        The People of the Kingdom
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king, seeing how much happier his subjects were, realized the error of
                        his ways and repealed the joke tax.
                    </p>

                    <ol class="relative border-s border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>
                </div>

            </div>


        </>

    );
}