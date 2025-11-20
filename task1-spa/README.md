# Single Page Application (SPA) with React

## 📋 Project Overview

This is a modern Single Page Application built with React as part of the Codveda Technology Level 2 Internship program. The application demonstrates component-based architecture, state management, and smooth client-side navigation without page reloads.

## ✨ Features

- **Smooth Navigation**: Seamless transitions between pages without full page reloads
- **State Management**: Global state managed using React Context API
- **Three Pages**: Home, About, and Contact pages with distinct content
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI**: Clean and professional design with gradient backgrounds and smooth animations
- **Mobile Menu**: Collapsible navigation menu for mobile devices
- **Contact Form**: Interactive contact form with state management

## 🛠️ Technologies Used

- **React 18**: Modern React with Hooks
- **React Context API**: For global state management
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful icon library
- **Custom Router**: Simple client-side routing implementation

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd spa-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install lucide-react
```

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🚀 Deployment on Vercel

### Method 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts and your app will be deployed!

### Method 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Vercel will automatically deploy on every push to main branch
4. Get your live URL instantly

## 📁 Project Structure

```
src/
├── App.js              # Main application component
├── components/
│   ├── Router.js       # Custom routing logic
│   ├── Navigation.js   # Navigation bar component
│   ├── HomePage.js     # Home page component
│   ├── AboutPage.js    # About page component
│   └── ContactPage.js  # Contact page component
└── index.js           # Application entry point
```

## 🎯 Key Learning Objectives

1. **Component Architecture**: Building reusable React components
2. **State Management**: Using Context API for global state
3. **Client-Side Routing**: Implementing navigation without page reloads
4. **Responsive Design**: Creating layouts that work on all screen sizes
5. **Modern React Patterns**: Using Hooks (useState, useContext)

## 🌐 Live Demo

After deployment, your live application will be available at:
```
https://your-project-name.vercel.app
```

## 📸 Screenshots

### Home Page
Features a hero section with call-to-action buttons and feature cards.

### About Page
Displays project information and technologies used.

### Contact Page
Interactive contact form with state management.

## 👨‍💻 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url_here
```

## 📝 License

This project is created for educational purposes as part of the Codveda Technology internship program.

## 🙏 Acknowledgments

- **Codveda Technology** - For providing this learning opportunity
- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework

## 📧 Contact

For questions or feedback about this project:
- **LinkedIn:** [My LinkedIn Profile](https://linkedin.com/in/theodore-abbey)
- **GitHub:** [My GitHub Profile](https://github.com/theodoreabbey173)
- **Email:** theodoreabbey174@gmail.com
- **Portfolio:** [My Portfolio Website](https://your-portfolio.com).com

## 🏷️ Tags

#CodvedaJourney #CodvedaExperience #FutureWithCodveda #ReactJS #WebDevelopment #InternshipProject

---

**Note**: This project was completed as part of Level 2, Task 1 of the Codveda Technology Front-End Development Internship Program.