import React, { useState, createContext, useContext } from 'react';
import { Menu, X, Info, Mail, Github, Linkedin, Twitter } from 'lucide-react';

// Context for global state management
const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Simple Router Implementation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('home');
  
  const navigate = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', `/${path}`);
  };

  return (
    <AppContext.Provider value={{ currentPath, navigate }}>
      {children}
    </AppContext.Provider>
  );
};

// Navigation Component
const Navigation = () => {
  const { currentPath, navigate } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">MyPortfolio</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  currentPath === path
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                  currentPath === path
                    ? 'bg-white text-blue-600'
                    : 'hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern Single Page Application built with React showcasing smooth navigation
            and state management
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg border-2 border-blue-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Fast Navigation', desc: 'Instant page transitions without reloads', icon: '⚡' },
            { title: 'State Management', desc: 'Seamless data flow across components', icon: '🔄' },
            { title: 'Responsive Design', desc: 'Works perfectly on all devices', icon: '📱' }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS',
    'State Management', 'Responsive Design', 'API Integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About This Project</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              This is a Single Page Application (SPA) built as part of the Codveda Technology
              internship program. It demonstrates modern web development practices including
              component-based architecture, state management, and responsive design.
            </p>
            <p className="text-gray-600">
              The application features smooth navigation between pages without full page reloads,
              maintaining state across the entire application using React Context API.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Connect With Me</h2>
            <div className="flex space-x-4">
              <button className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                <Github size={24} className="text-gray-700" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                <Linkedin size={24} className="text-gray-700" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                <Twitter size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <PageRouter />
      </div>
    </Router>
  );
};

const PageRouter = () => {
  const { currentPath } = useAppContext();
  
  switch (currentPath) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
};

export default App;