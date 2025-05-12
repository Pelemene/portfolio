import Image from "next/image";
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram, FaXTwitter, FaHouse, FaUser, FaPinterest } from "react-icons/fa6";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Progress } from "@/components/ui/progress";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ContactForm from "@/components/ContactForm";
import  Link  from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectGrid from "@/components/ProjectGrid";




 


export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo/Branding */}
          <div className="flex items-center space-x-3">
            <Image
              src="/anonymous,computer hacker,digital,mysterious,character,code,computer vector,code vector,digital vector.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
            <span className="text-2xl font-bold">PeleDev</span>
          </div>
          
          {/* Social Links - Center on desktop, hidden on mobile */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/Pelemene" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/qr/GZW6KSZPQXYKJ1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={30} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://pin.it/26FYxvNcY" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaPinterest size={30} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/pele_mene8?igsh=YTNlcXRsc3Ntcjdx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/BeastEnergy_7?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter size={30} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Mobile Menu Button (would need state) */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
          </div>
          
          {/* Desktop Mode Toggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        
<section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-24 overflow-hidden">
  {/* Animated background elements */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:50px_50px]",
              "[background-image:linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#ffee58_1px,transparent_1px),linear-gradient(to_bottom,#ffee58_1px,transparent_1px)]",
              "opacity-30",
            )}
          />
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-lime-500/5 rounded-full filter blur-3xl animate-float"></div>
    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/5 dark:bg-lime-600/5 rounded-full filter blur-3xl animate-float-delay"></div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-lime-400 dark:to-lime-300">
        Welcome to my <span className="text-black dark:text-white">portfolio!</span>
        </h1>

      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-[36rem] leading-relaxed">
        I bring ideas to life through <span className="font-semibold text-blue-600 dark:text-lime-400">code and creativity</span>. 
        From smooth animations to sharp UIs, I build interactive web experiences that tell stories, spark emotions, and stand out in a digital world.
      </p>

    
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      <Link href="/files/Akoto Samson's CV.docx" download={"Akoto Samson's CV.docx"} target="_blank" rel="noopener noreferrer" >
      <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-lime-600 dark:to-lime-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-lime-500/20 transition-all duration-300 transform hover:-translate-y-1">
        <span className="flex items-center gap-2">
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
      </Link>
      
      <Link href="#contact" >
      <button className="px-5 py-3 border-2 border-blue-600 dark:border-lime-500 text-blue-600 dark:text-lime-400 font-medium rounded-xl hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1">
        <span className="flex items-center gap-2">
          Let's discuss Business
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
      </button>
      </Link>
    </div>
    
    {/* Tech stack badges */}
    <div className="flex flex-wrap gap-3 mt-6">
      {['Next.js', 'React', 'Tailwind', 'Rive', 'Photoshop', 'Python'].map((tech) => (
        <span key={tech} className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Image with techy frame */}
  <div className="relative z-10 w-full lg:w-[50%] xl:w-[55%] flex justify-center">
    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
      <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 dark:border-lime-500/30 animate-spin-slow [animation-delay:-7s]"></div>
      <div className="absolute inset-0 rounded-full border-4 border-blue-600/20 dark:border-lime-600/20 animate-spin-slow [animation-delay:-5s]"></div>
      
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 dark:border-lime-500 shadow-2xl shadow-blue-500/20 dark:shadow-lime-500/20">
        <Image
          src="/ghibli.jpg"
          alt="Profile Picture"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
        <svg className="w-8 h-8 text-blue-600 dark:text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
        <svg className="w-8 h-8 text-blue-600 dark:text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
    </div>
  </div>
  {/* Enhanced Sidebar Navigation */}
  <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
    <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
      <ul className="flex flex-col gap-6">
        {[
          { name: 'Home', icon: <FaHouse className="text-2xl" /> },
          { name: 'About', icon: <FaUser className="text-2xl"/> },
          { name: 'Projects', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
          { name: 'Skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
          { name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
        ].map((item) => (
          <li key={item.name}>
            <a 
              href={`#${item.name.toLowerCase()}`} 
              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="p-2 bg-blue-100/50 dark:bg-gray-700 rounded-lg group-hover:bg-blue-200/50 dark:group-hover:bg-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {typeof item.icon === "string" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  ) : (
                    item.icon
                  )}
                </svg>
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>



         {/* Mobile Social Links - Only visible on mobile */}
        <div className="mt-12 flex justify-center space-x-6 md:hidden mb-[5rem]">
          <a href="https://github.com/Pelemene" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://wa.me/qr/GZW6KSZPQXYKJ1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://pin.it/26FYxvNcY" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaPinterest size={24} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/pele_mene8?igsh=YTNlcXRsc3Ntcjdx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://x.com/BeastEnergy_7?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter size={24} className="text-blue-600 dark:text-lime-600 hover:scale-110 transition-transform" />
          </a>
        </div>

<section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
      {/* Image on left - switches to top on mobile */}
      <div className="w-full lg:w-1/3 flex justify-center order-2 lg:order-1">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500 dark:border-lime-500">
          <Image
            src="/edit-26.jpg"
            alt="PeleDev Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content on right - switches to bottom on mobile */}
      <div className="w-full lg:w-2/3 order-1 lg:order-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-lime-500">
          About <span className="text-black dark:text-white">Me</span>
        </h2>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        <p className="text-lg sm:text-xl mb-6">
          Hey there! I’m <span className="font-semibold text-blue-700 dark:text-lime-400">PeleDev</span> 
          — real name Samson Akoto, but most folks know me as Pele. I'm a frontend developer with 
          a love for clean design, smooth animations, and code that just works. I blend creativity 
          and tech to craft sleek, user-friendly experiences that look great and feel even better.
          <br /><br />
          From crafting logos in Photoshop to bringing ideas to life with Rive animations 
          and even sprinkling in some Python when needed, I don’t just build interfaces — 
          I create digital stories. Whether it's designing pixel-perfect UIs, building brand 
          identities, or adding that perfect motion to your app, I’m all about making projects 
          shine at the crossroads of design and development.
        </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-lime-900 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-600 dark:text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">3 years of graphic designing and animatios and 2+ years developing web applications,programming. </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-lime-900 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-600 dark:text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
                <p className="text-gray-600 dark:text-gray-400">React, Next.js, Node.js, Tailwind CSS, Python, Rive Animation, Graphic Design.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-lime-900 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-600 dark:text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">Offered HnD ICT in Ho Technical University.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-lime-900 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-600 dark:text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Based in Ho, Ghana.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/files/Akoto Samson's CV.docx" download={"Akoto Samson's CV.docx"} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-blue-600 dark:bg-lime-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-lime-700 transition-colors">
              Download CV
            </button>
            </Link>
           <Link href="#project" >
            <button className="px-6 py-3 border-2 border-blue-600 dark:border-lime-600 text-blue-600 dark:text-lime-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
              View Projects
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>



<section id="projects" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden mt-10">
  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lime-100 dark:bg-lime-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16 lg:mb-20">
      
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-lime-400 dark:to-lime-300">
          My Projects
        </span>
      </h2>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed -mb-30">
        Where <span className="font-medium text-blue-500 dark:text-lime-400">code</span> meets <span className="font-medium text-blue-500 dark:text-lime-400">creativity</span> — explore my technical craftsmanship through these featured works
      </p>
    </div>

    <div className=" w-full  mx-auto">
      <ProjectGrid />
    </div>


  </div>
</section>

{/* Skills Level Section */}
<section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Web Development */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
      <Image
              src="/Coding icons for free download _ Freepik.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Web Development</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">85%</span>
        </div>
        <Progress value={85} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Next.js, React, Tailwind CSS</p>
      </div>
    </div>

    {/* Graphic Design */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
      <Image
              src="/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Graphic Design</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">90%</span>
        </div>
        <Progress value={90} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Photoshop, Illustrator</p>
      </div>
    </div>

    {/* Rive Animation */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
      <Image
              src="/Rive-1.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Rive Animation</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">50%</span>
        </div>
        <Progress value={50} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Interactive animations</p>
      </div>
    </div>

    {/* Logo Design */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
      <Image
              src="/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Logo Design</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">90%</span>
        </div>
        <Progress value={90} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Brand identity</p>
      </div>
    </div>

    {/* Python Development */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
      <Image
              src="/python logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Python Development</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">70%</span>
        </div>
        <Progress value={70} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Automation, Scripting</p>
      </div>
    </div>

    {/* Video Editing */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
      <Image
              src="/Premium Vector _ Adobe premiere pro software icon.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Video Editing</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">50%</span>
        </div>
        <Progress value={50} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Premiere Pro</p>
      </div>
    </div>
  


  {/* Logo Design */}
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
      <Image
              src="/Git.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Git</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">88%</span>
        </div>
        <Progress value={88} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Git</p>
      </div>
    </div>

    {/* Python Development */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
      <Image
              src="/android.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Building Apps</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">50%</span>
        </div>
        <Progress value={50} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Flutter and React Native</p>
      </div>
    </div>

    {/* Video Editing */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
      <Image
              src="/download (2).jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600 dark:border-lime-600"
            />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Web Design</h3>
          <span className="text-sm text-blue-600 dark:text-lime-500">60%</span>
        </div>
        <Progress value={60} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Figma</p>
      </div>
    </div>
    </div>
</section>

<section id="testimonial" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 my-10">
<div className="w-[80%] mx-auto">
<AnimatedTestimonials
  testimonials={[
    {
      quote:"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Zormelo Alex",
      designation: "Product Manager at TEXEL",
      src: "myPhoto-CzAsOS0H.jpeg",
    },
    {
      quote:"Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Abdulai Kassim",
      designation: "Co-founder at SolveraLabHQ",
      src: "edit-25.jpg",
    },
    {
      quote:"This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple and mind blowing.",
      name: "Mr. Cole",
      designation: "Project manager of AetherNest",
      src: "Cole.jpg",
    },
    
  ]}
/>
</div>
</section>


{/* Contact Section */}
<section>
  <ContactForm />
</section>


{ /* sm footer */}
<div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 sm:hidden z-50">
  <div className="flex justify-around items-center py-3">
    {/* Home */}
    <a href="#" className="flex flex-col items-center text-blue-600 dark:text-lime-500">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span className="text-xs mt-1">Home</span>
    </a>

    {/* Projects */}
    <a href="#projects" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-lime-500">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <span className="text-xs mt-1">Projects</span>
    </a>

    {/* Skills */}
    <a href="#skills" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-lime-500">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <span className="text-xs mt-1">Skills</span>
    </a>

    {/* Contact */}
    <a href="#contact" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-lime-500">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="text-xs mt-1">Contact</span>
    </a>
  </div>
</div>
</main>
{/* Footer */}
<footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} PeleDev. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Crafted with passion and Next.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-lime-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-lime-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com/yourhandle" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-lime-500 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
            <Link 
              href="https://instagram.com/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-lime-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Optional Navigation Links */}
          <div className="hidden md:flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-lime-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-lime-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-lime-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
</div>
  );
}