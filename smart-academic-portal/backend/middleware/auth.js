const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authentication middleware
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    req.user = user;
    next();
    
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

// Role-based authorization middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Access denied. No user found.' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Access denied. Insufficient permissions.' 
      });
    }

    next();
  };
};

// Admin only middleware
const adminOnly = authorize('ADMIN');

// Teacher or Admin middleware
const teacherOrAdmin = authorize('TEACHER', 'ADMIN');

// Student access middleware (can access own data)
const studentAccess = async (req, res, next) => {
  if (req.user.role === 'ADMIN' || req.user.role === 'TEACHER') {
    return next();
  }
  
  if (req.user.role === 'STUDENT') {
    const Student = require('../models/Student');
    const student = await Student.findOne({ userId: req.user._id });
    if (student && (req.params.studentId === student._id.toString() || 
                   req.params.userId === req.user._id.toString())) {
      return next();
    }
  }
  
  return res.status(403).json({ 
    message: 'Access denied. You can only access your own data.' 
  });
};

// Parent access middleware (can access their child's data)
const parentAccess = async (req, res, next) => {
  if (req.user.role === 'ADMIN' || req.user.role === 'TEACHER') {
    return next();
  }
  
  if (req.user.role === 'PARENT') {
    const Student = require('../models/Student');
    const student = await Student.findById(req.params.studentId);
    if (student && student.parentIds.includes(req.user._id)) {
      return next();
    }
  }
  
  return res.status(403).json({ 
    message: 'Access denied. You can only access your child\'s data.' 
  });
};

module.exports = {
  auth,
  authorize,
  adminOnly,
  teacherOrAdmin,
  studentAccess,
  parentAccess
};
