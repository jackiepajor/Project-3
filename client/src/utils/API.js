import axios from 'axios';

export default {

  // Course routes
  getCourses: function() {
    return axios.get("/api/course");
  },
  getCourse: function(courseId) {
    return axios.get(`/api/course/${courseId}`);
  },
  createCourse: function(data) {
    return axios.post(`/api/course/`, data);
  },
  deleteCourse: function(courseId) {
    return axios.delete(`/api/course/${courseId}`);
  },
  updateCourse: function(courseId, data) {
    return axios.put(`/api/course/${courseId}`, data);
  },

  // Unit routes
  getUnits: function(courseId) {
    return axios.get(`/api/course/${courseId}/unit`);
  },
  getUnit: function(courseId, unitId) {
    return axios.get(`/api/course/${courseId}/unit/${unitId}`);
  },
  createUnit: function(courseId, data) {
    return axios.post(`/api/course/${courseId}/unit/`, data);
  },
  deleteUnit: function(courseId, unitId) {
    return axios.delete(`/api/course/${courseId}/unit/${unitId}`);
  },
  updateUnit: function(courseId, unitId, data) {
    return axios.put(`/api/course/${courseId}/unit/${unitId}`, data);
  },

  // Lesson routes
  getLessons: function(courseId, unitId) {
    return axios.get(`/api/course/${courseId}/unit/${unitId}/lesson`);
  },
  getLesson: function(courseId, unitId, lessonId) {
    return axios.get(`/api/course/${courseId}/unit/${unitId}/lesson/${lessonId}`);
  },
  createLesson: function(courseId, unitId, data) {
    return axios.post(`/api/course/${courseId}/unit/${unitId}/lesson/`, data);
  },
  deleteLesson: function(courseId, unitId, lessonId, data) {
    return axios.delete(`/api/course/${courseId}/unit/${unitId}/lesson/${lessonId}`, data);
  },
  updateLesson: function(courseId, unitId, lessonId, data) {
    return axios.put(`/api/course/${courseId}/unit/${unitId}/lesson/${lessonId}`, data);
  }
};