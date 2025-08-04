import { FaReact, FaNodeJs, FaDocker, FaLaravel,  } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

const skills = [
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38BDF8]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#68A063]" },
    { name: "Express.js", icon: SiExpress, color: "text-[#68A063]" },
    { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
    {name:"Laravel", icon:FaLaravel, color:"text-[#FF2D20]"},
    // { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
    // { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4169E1]" },
];

const TechStack = () => {
    return (
        <>
            <div className="mb-20">
                <h2 className="scroll-m-20 text-3xl text-center font-source-code tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                    Tech Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {skills.map((skill) => (
                        <div key={skill.name} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-emerald-500 flex flex-col items-center transition-all hover:scale-105">
                            <skill.icon className="text-green-500" size={20} />
                            <span className="text-gray-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {skills.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-green-500/50 transition-colors">
                        <tech.icon className={`text-2xl ${tech.color}`} />
                        <span className="text-gray-300">{tech.name}</span>
                    </div>
                ))}
            </div> */}
        </>

    )
};

export default TechStack;