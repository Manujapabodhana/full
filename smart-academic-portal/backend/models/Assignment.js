const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['HOMEWORK', 'PROJECT', 'QUIZ', 'EXAM'],
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  maxMarks: {
    type: Number,
    required: true,
    min: 1
  },
  attachments: [{
    filename: String,
    path: String,
    mimetype: String,
    size: Number
  }],
  instructions: {
    type: String,
    default: ''
  },
  submissions: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    content: String,
    attachments: [{
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }],
    grade: {
      marks: Number,
      feedback: String,
      gradedAt: Date,
      gradedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    isLate: {
      type: Boolean,
      default: false
    }
  }],
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date
}, {
  timestamps: true
});

// Indexes
assignmentSchema.index({ classId: 1 });
assignmentSchema.index({ teacherId: 1 });
assignmentSchema.index({ dueDate: 1 });
assignmentSchema.index({ type: 1 });

// Check if assignment is overdue
assignmentSchema.methods.isOverdue = function() {
  return new Date() > this.dueDate;
};

// Get submission rate
assignmentSchema.methods.getSubmissionRate = function() {
  const totalStudents = this.classId.students?.length || 0;
  const submittedCount = this.submissions.length;
  return totalStudents > 0 ? (submittedCount / totalStudents) * 100 : 0;
};

module.exports = mongoose.model('Assignment', assignmentSchema);
