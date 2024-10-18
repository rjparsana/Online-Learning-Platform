const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, admin, createCourse)  // Admin only
  .get(protect, getCourses);  

module.exports = router;
