'use client'

import Link from 'next/link'

interface Project {
  title: string
  description: string
  iconColor: string
  technologies: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "SolveraLabHQ's Website",
    description: 'High-performance interactive website with seamless animations and optimized load times.',
    iconColor: 'blue',
    technologies: ['Next.js', 'Tailwind', 'Stripe', 'Framer Motion'],
    link: 'https://solveralabhq.org',
  },
  {
    title: 'Brand Identity',
    description: 'Complete visual identity system including logo, color palette, typography, and brand guidelines.',
    iconColor: 'purple',
    technologies: ['Photoshop', 'Illustrator', 'Branding', 'Typography'],
    link: 'https://pin.it/26FYxvNcY',
  },
  {
    title: 'UI Animations',
    description: 'Engaging micro-interactions and loading animations to enhance user experience.',
    iconColor: 'green',
    technologies: ['Rive', 'Lottie', 'UI/UX', 'Framer'],
    link: 'https://pin.it/26FYxvNcY',
  },
]

const ProjectsGrid: React.FC = () => {
  // Color mapping for Tailwind to properly interpret dynamic classes
  const colorMap = {
    blue: {
      bgFrom: 'from-blue-100',
      bgTo: 'to-blue-200',
      iconBg: 'bg-blue-200',
      iconText: 'text-blue-600',
      iconTextDark: 'text-blue-300',
      techBg: 'bg-blue-100',
      techText: 'text-blue-800',
      techTextDark: 'text-blue-300',
    },
    purple: {
      bgFrom: 'from-purple-100',
      bgTo: 'to-purple-200',
      iconBg: 'bg-purple-200',
      iconText: 'text-purple-600',
      iconTextDark: 'text-purple-300',
      techBg: 'bg-purple-100',
      techText: 'text-purple-800',
      techTextDark: 'text-purple-300',
    },
    green: {
      bgFrom: 'from-green-100',
      bgTo: 'to-green-200',
      iconBg: 'bg-green-200',
      iconText: 'text-green-600',
      iconTextDark: 'text-green-300',
      techBg: 'bg-green-100',
      techText: 'text-green-800',
      techTextDark: 'text-green-300',
    },
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const colors = colorMap[project.iconColor as keyof typeof colorMap]
          
          return (
            <div
              key={index}
              className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
            >
              <div
                className={`relative h-48 ${colors.bgFrom} ${colors.bgTo} dark:from-gray-800 dark:to-gray-700 flex items-center justify-center transition-all duration-500 group-hover:opacity-90`}
              >
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5" />
                <div
                  className={`relative z-10 w-16 h-16 ${colors.iconBg} dark:bg-gray-700 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <svg
                    className={`w-8 h-8 ${colors.iconText} dark:${colors.iconTextDark}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 sm:p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium ${colors.techBg} dark:bg-gray-700 ${colors.techText} dark:${colors.techTextDark} rounded-full whitespace-nowrap`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-lime-400 hover:underline font-medium transition-colors duration-300 hover:text-blue-800 dark:hover:text-lime-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      
    </section>
  )
}

export default ProjectsGrid