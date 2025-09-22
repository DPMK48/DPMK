import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Globe, 
  Smartphone,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'React', icon: Code, level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind CSS', icon: Palette, level: 90, color: 'from-purple-400 to-pink-500' },     
    { name: 'TypeScript', icon: Code, level: 90, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', icon: Server, level: 70, color: 'from-green-400 to-emerald-500' },
    // { name: 'Next.js', icon: Globe, level: 60, color: 'from-gray-400 to-gray-600' },
    { name: 'Python', icon: Code, level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'SQL/Postgres/MongoDB', icon: Database, level: 75, color: 'from-orange-400 to-red-500' },
    // { name: 'UI/UX Design', icon: Palette, level: 85, color: 'from-purple-400 to-pink-500' },
  ];

  const projects = [
    {
      title: 'Attendance management system',
      description: 'A comprehensive dashboard with real-time data visualization, machine learning insights, and interactive charts.',
      image: '/Attendance-screenshot.png',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      live: 'https://ams-frontend-iota.vercel.app/',
      github: 'https://github.com/DPMK48/ByteRaiders-AMS.git'
    },
    {
      title: 'URL Phishing Detection',
      description: 'This project is a full-stack web application that detects phishing URLs using rule-based heuristics, stores logs in a database, and allows users to download logs as a CSV.',
      image: '/purl-screenshot.png',
      tech: ['React', 'Tailwind CSS', 'SQLite', 'Flask'],
      live: 'https://url-phishing-detection-frontend.onrender.com/',
      github: 'https://github.com/DPMK48/URL_PHISHING_DETECTION.git'
    },
    {
      title: 'Oculo',
      description: 'Oculo is a progressive web app built for mitigating media literacy and misinformation, and an embedded chat bot (Izita) for verifying news/information.',
      image: '/oculo-screenshot.png',
      tech: ['React', 'Tailwind CSS', 'Django', 'Postgres'],
      live: 'https://oculo-tawny.vercel.app/',
      github: 'https://github.com/DPMK48/Oculo.git'
    },
    {
      title: 'DPmart',
      description: 'DPmart is an e-commerce platform that specializes in selling fashionable bags.',
      image: '/dpmart-screenshot.png',
      tech: ['HTML', 'SCSS', 'JavaScript'],
      live: 'https://dpmart.onrender.com/',
      github: 'https://github.com/DPMK48/DPmart.git'
    }
  ];

  const experience = [
    {
      company: 'Nascomsoft Embedded Hub',
      role: 'Full-Stack Developer',
      period: '2022 - Present',
      achievements: [
        'Developed a functional attendance management system for the hub which is currently in use',
        'Assisted in taking web development training sessions for interns',
      ]
    },
    {
      company: 'PPTLinks',
      role: 'Media and publicity',
      period: '2023 - 2024',
      achievements: [
        'Supported in promoting the solution through social media and other channels',
        'Contributed in the development of the project',
      ]
    },
    {
      company: 'DPmart',
      role: 'Web Developer',
      period: '2023 - present',
      achievements: [
        'Developed an e-commerce website for my personal business',
        'Managed the website till date',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              DPMK
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {['hero', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen md:p-[3rem] flex items-center justify-center relative">
        <div className="container mx-auto p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                {/* Main photo container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl shadow-cyan-500/25">
                  <ImageWithFallback
                    src="/me.jpeg"
                    alt="Dorathy Paul"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Rotating border effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-transparent to-purple-600 bg-clip-border"
                  style={{ 
                    mask: 'conic-gradient(from 0deg, transparent 0deg, black 90deg, transparent 180deg, black 270deg, transparent 360deg)',
                    WebkitMask: 'conic-gradient(from 0deg, transparent 0deg, black 90deg, transparent 180deg, black 270deg, transparent 360deg)'
                  }}
                />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Dorathy Paul
              </span>
            </h1>
            <h2 className="text-lg md:text-3xl text-gray-300 mb-4">
              Web Developer / Software Engineer
            </h2>
            <p className="text-xm md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Building modern, user-friendly web experiences with the latest technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-1/2 left-10 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute top-1/3 right-10 w-6 h-6 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
            className="absolute top-[20%] left-1/3 w-5 h-5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for building scalable websites.
            </p>
          </motion.div>

          <div className="flex justify-center flex-wrap w-[100%] gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group w-[100%] sm:w-[25%]"
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}>
                        <skill.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-400">{skill.name}</h3>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full shadow-sm`}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center w-[100%] gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group sm:w-[30%] "
              >
                <Card className="bg-gray-800/50 h-[450px] backdrop-blur-sm border-gray-700 overflow-hidden hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/10">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink size={16} />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl text-white font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                          <p className="text-orange-400 font-medium mb-1">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.period}</p>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-4 md:left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-orange-400 to-transparent transform md:-translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's collaborate on your next project or discuss opportunities
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="bg-gray-700/50 border-gray-600 focus:border-pink-400 focus:ring-pink-400/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-gray-700/50 border-gray-600 focus:border-pink-400 focus:ring-pink-400/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="bg-gray-700/50 border-gray-600 focus:border-pink-400 focus:ring-pink-400/20 resize-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <Mail size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">kadaladorathy@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <Phone size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400">+234 7031052778</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <MapPin size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">Bauchi, Bauchi State NG</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/DPMK48', color: 'hover:text-gray-300' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/dorathy-paul-396400245/', color: 'hover:text-blue-400' },
                    { icon: Twitter, href: 'https://x.com/dorathy_pmk?t=JFTP-60HCEKnz4VX2prz9Q&s=09', color: 'hover:text-sky-400' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-700/50 rounded-lg text-gray-400 transition-colors ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Dorathy Paul, All rights reserved.
            </p>
            <p className="text-gray-400">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-40"
        >
          <ChevronUp size={24} className="text-white" />
        </motion.button>
      )}
    </div>
  );
}