'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, BarChart3, Moon, Sun, ArrowDown, Database,
  TrendingUp, Code, PieChart, LineChart, ChevronRight,
  Mail, Phone, MapPin, Linkedin, Github, Download,
  Calendar, Briefcase, Award, Users, Filter, Check,
  ExternalLink
} from 'lucide-react';

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Nav items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Skills data
  const skills = [
    { name: 'Python', level: 95, icon: '🐍', category: 'programming' },
    { name: 'SQL', level: 90, icon: '🗃️', category: 'database' },
    { name: 'R', level: 85, icon: '📊', category: 'programming' },
    { name: 'Tableau', level: 88, icon: '📈', category: 'visualization' },
    { name: 'Power BI', level: 92, icon: '💡', category: 'visualization' },
    { name: 'Excel', level: 96, icon: '📑', category: 'tools' },
    { name: 'Pandas', level: 93, icon: '🐼', category: 'programming' },
    { name: 'Statistics', level: 89, icon: '📐', category: 'analytics' },
    { name: 'Machine Learning', level: 82, icon: '🤖', category: 'analytics' },
    { name: 'Git', level: 87, icon: '🔧', category: 'tools' },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard analyzing sales trends and forecasting future performance',
      category: 'visualization',
      tech: ['Tableau', 'Python', 'SQL'],
      metrics: { revenue: '+15%', accuracy: '94%' },
      imageColor: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning model for customer segmentation using clustering algorithms',
      category: 'analytics',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      metrics: { clusters: '5', accuracy: '89%' },
      imageColor: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Real-time Stock Analysis',
      description: 'Real-time stock market analysis and prediction system',
      category: 'analytics',
      tech: ['Python', 'TensorFlow', 'API'],
      metrics: { roi: '+22%', latency: '<1s' },
      imageColor: 'from-green-500 to-emerald-400',
    },
    {
      id: 4,
      title: 'Healthcare Data Warehouse',
      description: 'Data warehouse design and implementation for healthcare analytics',
      category: 'database',
      tech: ['SQL', 'ETL', 'AWS'],
      metrics: { queries: '10k/day', size: '2TB' },
      imageColor: 'from-orange-500 to-red-500',
    },
  ];

  // Experience data
  const experiences = [
    {
      company: 'Tech Analytics Inc.',
      position: 'Senior Data Analyst',
      period: '2022 - Present',
      description: 'Led a team of 5 analysts to deliver insights for enterprise clients',
      achievements: ['Improved reporting efficiency by 40%', 'Reduced data processing time by 60%'],
    },
    {
      company: 'DataCorp Solutions',
      position: 'Data Analyst',
      period: '2020 - 2022',
      description: 'Developed predictive models for customer behavior analysis',
      achievements: ['Built 15+ dashboards for stakeholders', 'Increased forecast accuracy by 25%'],
    },
    {
      company: 'Business Intel Ltd.',
      position: 'Junior Analyst',
      period: '2019 - 2020',
      description: 'Supported data analysis and reporting for marketing department',
      achievements: ['Automated 10+ manual reports', 'Reduced data errors by 90%'],
    },
  ];

  // Filtered projects
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                DataPro
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="flex flex-col space-y-4 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Data Analyst</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforming Data Into{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Actionable Insights
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I help businesses make data-driven decisions through advanced analytics,
                visualization, and predictive modeling. Turning complex data into clear,
                compelling stories.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-blue-600 transition-colors flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '50+', label: 'Projects', icon: Database },
                  { value: '98%', label: 'Accuracy', icon: TrendingUp },
                  { value: '5+', label: 'Years Exp', icon: BarChart3 },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Animated Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                {/* Chart Simulation */}
                <div className="space-y-6">
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" />
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse w-4/5" />
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse w-3/4" />
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse w-5/6" />
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse w-2/3" />
                </div>

                {/* Chart Legend */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
                    <div key={quarter} className="text-center">
                      <div className="font-bold">{quarter}</div>
                      <div className="text-sm text-gray-500">+{Math.floor(Math.random() * 30) + 10}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about">
              <ArrowDown className="w-8 h-8 animate-bounce text-gray-400" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate data analyst with 5+ years of experience in transforming raw data
              into meaningful insights that drive business decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      JD
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">John Doe</h3>
                      <p className="text-gray-600 dark:text-gray-300">Senior Data Analyst</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: 'john.doe@email.com' },
                      { icon: Phone, text: '+1 (555) 123-4567' },
                      { icon: MapPin, text: 'San Francisco, CA' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Users, title: 'Collaborative', desc: 'Work effectively in cross-functional teams' },
                { icon: Filter, title: 'Detail-Oriented', desc: 'Meticulous attention to data accuracy' },
                { icon: LineChart, title: 'Strategic Thinker', desc: 'Align data insights with business goals' },
                { icon: Code, title: 'Problem Solver', desc: 'Creative solutions for complex data challenges' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expertise in data analysis tools, programming languages, and visualization platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-bold">{skill.name}</span>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>

                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  />
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.category.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Real-world data analysis projects demonstrating technical expertise and business impact
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', 'visualization', 'analytics', 'database'].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-r ${project.imageColor} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="w-24 h-24 text-white/20" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="space-y-2">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">
                            {key}: <span className="font-bold">{value}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              5+ years of professional experience in data analysis and business intelligence
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full border-4 border-white dark:border-gray-800" />

                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/30 to-cyan-400/30" />
                )}

                {/* Content */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a data challenge? Let's discuss how we can turn your data into insights
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell me about your data challenges..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <BarChart3 className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DataPro
              </span>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with Next.js, Framer Motion & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl z-40"
      >
        <ArrowDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
}
