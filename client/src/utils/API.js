import axios from 'axios';

export default {
<<<<<<< HEAD
  // Gets all books
  getArticles: function() {
    return fetch("/api/books");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
  checkLoginStatus: function() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/course')
      .then(res => {
        this.setState({ courses: res.data });
        console.log(this.state.courses);
      })
      .catch((error) => {
        if(error) {
          this.props.history.push('/login');
        }
      })
  },
  logout: function() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
};
=======

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
>>>>>>> 172e3e0dbc21f5b92383548774f25cb2581d3f3e
