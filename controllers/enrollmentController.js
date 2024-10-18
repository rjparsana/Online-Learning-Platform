const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.enrollCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const existingEnrollment = await Enrollment.findOne({ user: req.user._id, course: courseId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    const enrollment = new Enrollment({
      user: req.user._id,
      course: courseId,
    });
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Track Lesson Completion
exports.completeLesson = async (req, res) => {
    const { courseId, lessonId } = req.params;
  
    try {
      const enrollment = await Enrollment.findOne({ user: req.user._id, course: courseId });
      if (!enrollment) {
        return res.status(400).json({ message: 'Not enrolled in this course' });
      }
  
      if (!enrollment.completedLessons.includes(lessonId)) {
        enrollment.completedLessons.push(lessonId);
        await enrollment.save();
      }
  
      res.json({ message: 'Lesson marked as complete' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  