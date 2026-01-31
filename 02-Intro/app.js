// Import and Export in JavaScript :

function User(name, age, city, isMarried, pin) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.isMarried = isMarried;
  this.pin = pin;
}

// Define multiple users
const user1 = new User("Pramod", 27, "Bhubaneswar", true, 101213);
const user2 = new User("Pablo", 57, "Bhubaneswar", true, 101213);


// export default user1;

// For multiple
export { user1, user2 };
