export default {
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