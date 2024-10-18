const Course = require('../models/Course');
const { updateCourse } = require('../controllers/courseController');

// Create a new course (Admin only)
exports.createCourse = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }

  const { title, description, lessons } = req.body;
  try {
    const course = new Course({ title, description, lessons });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a course (Admin only)
exports.updateCourse = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }

  const { id } = req.params;
  const { title, description, lessons } = req.body;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    course.title = title || course.title;
    course.description = description || course.description;
    course.lessons = lessons || course.lessons;
    await course.save();

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a course (Admin only)
exports.deleteCourse = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }

  const { id } = req.params;
  try {
    await Course.findByIdAndDelete(id);
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
