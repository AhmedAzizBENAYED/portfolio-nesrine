import  { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Download, Mail, Code, Wrench, Briefcase, GraduationCap, Heart, MapPin, Calendar} from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { category: 'CAD & Simulation', items: ['SolidWorks', 'Webots', 'RoboDK', 'Mastercam'] },
    { category: 'Programming', items: ['Python', 'C/C++', 'React', 'JavaScript'] },
    { category: 'Tools & Methodologies', items: ['Microsoft Office', 'Agile', 'Scrum', 'DeltaV'] },
    { category: 'Soft Skills', items: ['Analytical Thinking', 'Communication', 'Teamwork', 'Problem Solving'] }
  ];

  const projects = [
    {
      title: 'Semi-Automated Vehicle Seat',
      description: 'Led development of a semi-automated car seat adjustment system with precise positioning through motor integration, sensors, and screwnut mechanism. Performed mechanical design using SolidWorks and electrical system design.',
      tags: ['SolidWorks', 'Mechatronics', 'System Design'],
      icon: '🚗'
    },
    {
      title: 'Robot Simulation - Cyber-Robotics',
      description: 'Simulated and collected data from various robotic platforms using Webots, focusing on performance evaluation and environmental interaction.',
      tags: ['Webots', 'Robotics', 'Data Analysis'],
      icon: '🤖'
    },
    {
      title: 'Autonomous Docking Algorithm',
      description: 'Developed a depth image-based docking algorithm enabling autonomous alignment and precise positioning of mobile robots.',
      tags: ['Python', 'Computer Vision', 'Autonomous Systems'],
      icon: '🎯'
    },
    {
      title: 'IoT ProdMon System - YAZAKI',
      description: 'Designed and implemented an IoT-based production monitoring system to optimize processes and enhance data-driven decision-making. Developed Clip Checker testing system for product compliance.',
      tags: ['IoT', 'React', 'Data Monitoring'],
      icon: '📊'
    }
  ];

  const experiences = [
    {
      company: 'YAZAKI',
      role: 'Engineering Intern',
      period: 'July 2025 - August 2025',
      location: 'Gafsa, Tunisia',
      logo: 'yazakilogo.jpeg',
      achievements: [
        'Designed and implemented an IoT-based ProdMon system to monitor and optimize production processes',
        'Developed a testing system to verify product compliance using the Clip Checker',
        'Enhanced operational efficiency through data-driven decision-making'
      ]
    },
    {
      company: 'Groupe Chimique Tunisien',
      role: 'Process Engineering Intern',
      period: 'July 2024 - August 2024',
      location: 'Gafsa, Tunisia',
      logo: 'Groupe_chimique_tunisien.jpg',
      achievements: [
        'Applied advanced process monitoring techniques using DeltaV software',
        'Troubleshot and optimized automated control systems',
        'Improved system reliability and minimized production downtime'
      ]
    }
  ];

  const education = [
    {
      degree: 'National Engineering Degree in Mechatronics',
      school: 'National School of Engineers of Sousse (ENISo)',
      period: '2023 - Present',
      location: 'Tunisia',
      status: 'In Progress'
    },
    {
      degree: 'Undergraduate University Degree',
      school: 'Preparatory Institute for Engineering Studies of Monastir (IPEIM)',
      period: '2021 - 2023',
      location: 'Tunisia'
    },
    {
      degree: 'Baccalaureate in Experimental Sciences',
      school: 'Cité High School',
      period: '2020 - 2021',
      location: 'Gafsa, Tunisia',
      honors: 'Highest Honors'
    }
  ];

  const volunteer = [
    {
      role: 'HR & Training Manager',
      organization: 'Junior Enterprise ENISo',
      period: '2024 - 2025',
      location: 'Sousse, Tunisia',
      logo: 'jeeniso.png',
      description: 'Managed recruitment, member relations, and performance evaluations. Ensured HR compliance with ISO 9001 standards.'
    },
    {
      role: 'Scrum Master',
      organization: 'Junior Enterprise ENISo',
      period: '2023 - 2024',
      location: 'Sousse, Tunisia',
      logo: 'jeeniso.png',
      description: 'Facilitated agile processes and team collaboration for project delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-purple-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
            >
              NK
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download="ResumeNessrineKADDOUR.pdf" // ✅ triggers download
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <Download size={16} />
                Resume
              </motion.a>

            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-purple-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/ResumeNessrineKADDOUR.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-lg"
                download="cv.pdf"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Nessrine Kaddour
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Mechatronics Engineering Student
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about robotics, IoT, and intelligent systems. Seeking Mitacs research internship starting May 2025.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-lg font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity }} className="mt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-purple-400"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 sm:p-12 border border-purple-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a final-year Mechatronics Engineering student at the National Engineering School of Sousse, passionate about creating innovative solutions at the intersection of mechanical, electrical, and software systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With hands-on experience in robotics, IoT systems, and industrial automation, I thrive on solving complex engineering problems through research, data analysis, and systematic design. My work spans from developing autonomous docking algorithms to implementing IoT-based production monitoring systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently seeking a Mitacs research internship starting May 2025, I'm eager to contribute to cutting-edge research while expanding my expertise in intelligent systems and advanced robotics applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Robotics</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">IoT</span>
                <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">Automation</span>
                <span className="px-4 py-2 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-medium">Research</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-purple-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    {index === 0 && <Wrench className="text-purple-600" size={24} />}
                    {index === 1 && <Code className="text-pink-600" size={24} />}
                    {index === 2 && <Briefcase className="text-rose-600" size={24} />}
                    {index === 3 && <Heart className="text-fuchsia-600" size={24} />}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-700 rounded-lg text-sm font-medium border border-purple-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="text-indigo-600" size={24} />
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                {['French (Advanced)', 'English (Advanced)', 'Arabic (Advanced)'].map((lang) => (
                  <span key={lang} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-purple-100"
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-purple-600 rounded-full text-xs font-medium border border-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-purple-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-white border border-purple-100 p-2 flex-shrink-0">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                      <p className="text-lg text-purple-600 font-medium">{exp.role}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} className="text-purple-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-pink-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Volunteer Experience</h3>
              <div className="space-y-6">
                {volunteer.map((vol, index) => (
                  <motion.div
                    key={vol.role + index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-purple-100"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-white border border-purple-100 p-1 flex-shrink-0">
                        <img src={vol.logo} alt={`${vol.organization} logo`} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800">{vol.role}</h4>
                        <p className="text-pink-600 font-medium">{vol.organization}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-purple-500" />
                            {vol.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-pink-500" />
                            {vol.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{vol.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 sm:p-8 border border-purple-100"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 mb-1">{edu.school}</p>
                      <p className="text-gray-600">{edu.location}</p>
                      {edu.honors && (
                        <p className="mt-2 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          {edu.honors}
                        </p>
                      )}
                      {edu.status && (
                        <p className="mt-2 inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium ml-2">
                          {edu.status}
                        </p>
                      )}
                    </div>
                    <div className="text-gray-600 font-medium mt-2 sm:mt-0 sm:text-right">
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-purple-100 mb-12">
              Interested in collaboration or have questions? Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nesrine.kadour@eniso.u-sousse.tn"
                className="flex items-center gap-3 px-6 py-4 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Mail size={24} className="text-purple-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">nesrine.kadour@eniso.u-sousse.tn</p>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/Nesrine-KADDOUR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
              <SiLinkedin size={24} className="text-purple-600" />
                  <div className="text-left">
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="font-medium">Nesrine KADDOUR</p>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+21693110682"
                className="flex items-center gap-3 px-6 py-4 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">+216 93 110 682</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white py-8 px-4 border-t border-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2025 Nessrine Kaddour. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, Vite, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;