var user = {
  firstName: "Aditya",
  lastName: "Jindal",
  Role: "Admin",
  loginCount: 32,
  googleSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);
