'use client' 
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust if your path is different

interface Project {
    title: string;
    description: string;
    iconColor: string;
    technologies: string[];
    link: string;
}

const ProjectsGrid: React.FC = () => {
    const projects: Project[] = [
        {
            title: "SolveraLabHQ's Website",
            description: 'High-performance interactive website.',
            iconColor: 'blue',
            technologies: ['Next.js', 'Tailwind', 'Stripe'],
            link: 'https://pin.it/26FYxvNcY',
        },
        {
            title: 'Brand Identity',
            description: 'Complete visual identity for a modern tech startup.',
            iconColor: 'purple',
            technologies: ['Photoshop', 'Illustrator', 'Branding'],
            link: 'https://pin.it/26FYxvNcY',
        },
        {
            title: 'UI Animations',
            description: 'Micro-interactions and loading animations for web apps.',
            iconColor: 'green',
            technologies: ['Rive', 'Lottie', 'UI/UX'],
            link: 'https://pin.it/26FYxvNcY',
        },
    ];

    return (
        <section className="px-6 py-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group relative border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-${project.iconColor}-400 transition-all duration-300`}
                    >
                        <div
                            className={`h-48 bg-gradient-to-br from-${project.iconColor}-50 to-${project.iconColor}-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center`}
                        >
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5"></div>
                            <div className="relative z-10 p-4 text-center">
                                <div
                                    className={`w-16 h-16 bg-${project.iconColor}-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${project.iconColor}-200 dark:group-hover:bg-gray-600 transition-colors`}
                                >
                                    {/* Placeholder Icon */}
                                    <svg
                                        className={`w-8 h-8 text-${project.iconColor}-600 dark:text-${project.iconColor}-400`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-3 py-1 text-xs font-medium bg-${project.iconColor}-100 dark:bg-gray-700 text-${project.iconColor}-800 dark:text-${project.iconColor}-300 rounded-full`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Link href={project.link} passHref legacyBehavior>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center text-blue-600 dark:text-lime-400 hover:underline cursor-pointer"
                                >
                                    View Project
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <button className="px-6 py-3 border-2 border-blue-600 dark:border-lime-500 text-blue-600 dark:text-lime-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                    View All Projects
                </button>
            </div>
        </section>
    );
};

export default ProjectsGrid;