const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  admissionDate: {
    type: Date,
    required: true
  },
  currentGrade: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    required: true
  },
  parentIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  classes: [{
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
    },
    subject: String,
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  academicHistory: [{
    year: String,
    grade: String,
    gpa: Number,
    subjects: [{
      name: String,
      grade: String,
      marks: Number,
      totalMarks: Number
    }]
  }],
  attendance: {
    totalDays: {
      type: Number,
      default: 0
    },
    presentDays: {
      type: Number,
      default: 0
    },
    attendancePercentage: {
      type: Number,
      default: 0
    }
  },
  aiPrediction: {
    riskLevel: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH'],
      default: 'LOW'
    },
    predictedGPA: Number,
    factors: [{
      factor: String,
      impact: String,
      weight: Number
    }],
    lastUpdated: Date,
    recommendations: [String]
  },
  notes: [{
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    note: String,
    date: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['ACADEMIC', 'BEHAVIORAL', 'GENERAL'],
      default: 'GENERAL'
    }
  }],
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String,
    email: String
  }
}, {
  timestamps: true
});

// Indexes
studentSchema.index({ userId: 1 });
studentSchema.index({ studentId: 1 });
studentSchema.index({ currentGrade: 1, section: 1 });
studentSchema.index({ 'aiPrediction.riskLevel': 1 });

// Calculate attendance percentage
studentSchema.methods.updateAttendancePercentage = function() {
  if (this.attendance.totalDays > 0) {
    this.attendance.attendancePercentage = 
      (this.attendance.presentDays / this.attendance.totalDays) * 100;
  }
};

// Get current academic performance
studentSchema.methods.getCurrentPerformance = function() {
  const currentYear = new Date().getFullYear().toString();
  return this.academicHistory.find(history => history.year === currentYear);
};

module.exports = mongoose.model('Student', studentSchema);
