var user = {
  firstName: "Aditya",
  lastName: "Jindal",
  Role: "Admin",
  loginCount: 32,
  googleSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in ${this.courseList.length} courses!`;
  },
};

user.buyCourse("MERN Stack Course");
console.log(user.getCourseCount());
user.buyCourse("DevOps Bootcamp");
console.log(user.getCourseCount());
