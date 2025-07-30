"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A fullstack e-commerce app with payment integration.",
        tech: ["React", "Node.js", "MongoDB"],
        demo: "https://demo.com",
        github: "https://github.com/your-repo"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "A fullstack e-commerce app with payment integration.",
        tech: ["React", "Node.js", "MongoDB"],
        demo: "https://demo.com",
        github: "https://github.com/your-repo"
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description: "A fullstack e-commerce app with payment integration.",
        tech: ["React", "Node.js", "MongoDB"],
        demo: "https://demo.com",
        github: "https://github.com/your-repo"
    },
    {
        id: 4,
        title: "E-commerce Platform",
        description: "A fullstack e-commerce app with payment integration.",
        tech: ["React", "Node.js", "MongoDB"],
        demo: "https://demo.com",
        github: "https://github.com/your-repo"
    }
];

const Projects = () => {
    return (
        <div className='mt-10 min-w-full'>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper custom-swiper-pagination"
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-green-500/30 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded-full text-green-400">{tech}</span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a href={project.demo} className="text-green-500 hover:underline text-sm">Live Demo</a>
                                <a href={project.github} className="text-gray-400 hover:text-green-500 text-sm">GitHub</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
};

export default Projects;