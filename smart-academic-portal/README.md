# 🎓 Smart Academic Portal with AI Progress Tracker

> A comprehensive full-stack school management system with AI-powered student progress prediction.

## 🌟 Project Overview

The Smart Academic Portal is a modern, full-featured educational management system designed to streamline school operations and provide valuable insights through AI-powered analytics. The system serves multiple user roles and provides comprehensive tools for academic management.

## 🎯 Key Features

### 👥 Multi-Role Support
- **Admin**: Complete system management and oversight
- **Teacher**: Class management, assignments, and grading
- **Student**: Academic tracking and assignment submission
- **Parent**: Child progress monitoring and communication

### 🤖 AI-Powered Features
- **Progress Prediction**: Machine learning algorithms predict student performance
- **Risk Assessment**: Early identification of at-risk students
- **Personalized Recommendations**: AI-generated suggestions for improvement
- **Performance Analytics**: Advanced data analysis and visualization

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern UI framework
- **Vite 7.1.0** - Fast build tool
- **Tailwind CSS 4.1.11** - Utility-first styling
- **React Router DOM 7.8.0** - Client-side routing
- **Zustand 5.0.7** - State management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (ready for setup)
- **JWT** - Authentication
- **Socket.io** - Real-time communication

## 🚀 Getting Started

### Current Status: ✅ WORKING DEMO

Both frontend and backend are running successfully:
- **Frontend**: http://localhost:5177
- **Backend**: http://localhost:5000

### Demo Accounts Available

| Role | Login Method |
|------|-------------|
| Admin | Click "👑 Admin" demo button |
| Teacher | Click "👨‍🏫 Teacher" demo button |
| Student | Click "👨‍🎓 Student" demo button |
| Parent | Click "👨‍👩‍👧‍👦 Parent" demo button |

Or use email/password:
- Email: `admin@school.com`, `teacher@school.com`, etc.
- Password: `password`

## 📊 Current Features

### ✅ Completed
- ✅ Multi-role authentication system
- ✅ Role-specific dashboards
- ✅ Modern UI with Tailwind CSS
- ✅ Backend API structure
- ✅ Demo data and functionality
- ✅ AI prediction mockups
- ✅ Responsive design

### 🔄 In Progress
- Database integration (MongoDB models ready)
- Real assignment submission
- File upload system
- Real-time notifications

### 📱 Dashboard Features

#### Admin Dashboard
- System statistics overview
- User management tools
- Recent activities tracking
- Quick action buttons

#### Teacher Dashboard
- Class management interface
- Assignment tracking table
- Student roster access
- Upcoming events calendar

#### Student Dashboard
- AI progress prediction display
- Current grades overview
- Assignment submission status
- Today's class schedule

#### Parent Dashboard
- Child performance monitoring
- AI insights and recommendations
- Recent activity feed
- Parent-teacher communication

## 🎮 How to Test

1. **Access the application**: http://localhost:5177
2. **Try demo login**: Click any role button on login page
3. **Explore dashboards**: Each role has unique features
4. **Test navigation**: Use logout and role switching
5. **Check responsiveness**: Resize browser window

## 🚀 Next Development Steps

1. **Complete Database Integration**
   - Connect MongoDB
   - Implement real CRUD operations
   - Add data persistence

2. **Enhance AI Features**
   - Implement actual ML algorithms
   - Add prediction accuracy
   - Create recommendation engine

3. **Add Real-time Features**
   - Socket.io integration
   - Live notifications
   - Real-time chat

4. **File Management**
   - Assignment uploads
   - Document sharing
   - Media handling

## 📞 Support

This is a demonstration project showcasing modern web development practices and educational technology concepts.

---

**🎓 Built for the future of education** ✨+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
