const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5176',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Basic routes for demo
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Smart Academic Portal API is running',
    timestamp: new Date().toISOString()
  });
});

// Demo auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Demo authentication
  const demoUsers = {
    'admin@school.com': { id: 1, name: 'Admin User', role: 'ADMIN', email: 'admin@school.com' },
    'teacher@school.com': { id: 2, name: 'Teacher User', role: 'TEACHER', email: 'teacher@school.com' },
    'student@school.com': { id: 3, name: 'Student User', role: 'STUDENT', email: 'student@school.com' },
    'parent@school.com': { id: 4, name: 'Parent User', role: 'PARENT', email: 'parent@school.com' }
  };

  const user = demoUsers[email];
  if (user && password === 'password') {
    res.json({
      message: 'Login successful',
      token: 'demo-jwt-token-' + user.role.toLowerCase(),
      user
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/auth/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (token && token.startsWith('demo-jwt-token-')) {
    const role = token.replace('demo-jwt-token-', '').toUpperCase();
    const user = {
      id: 1,
      name: `${role} User`,
      role,
      email: `${role.toLowerCase()}@school.com`
    };
    res.json({ user });
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📱 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5176'}`);
});

module.exports = { app };
