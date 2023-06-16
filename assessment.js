// Explain JavaScript Callback functions and provide a simple example?

// Answer: A callback function is a function that is passed as a parameter/argument to another function so it can be called/invoked within the function when needed.
function greeting(name) {
  console.log("Hello, " + name);
}

greeting("John");

// Write an example definition of a JavaScript object for a person. The object should have a first name, Last
// Name, An ID number, and a function to retrieve the full name of the person.

const person = {
  firstName: "Billy",
  lastName: "BananaBoPhilly",
  id: 1234556,
};

console.log(`My name is ${person.firstName} ${person.lastName}`);

// Write some example JavaScript code that creates a new HTML p element with some text and appends it
// to the document body. Use jQuery syntax if needed.

const paragraph = document.createElement("p");
paragraph.textContent = "Here is a new paragraph element in HTML.";
document.body.appendChild(paragraph);

console.log(paragraph);

//Fix the bug for below syntax.

function average(a, b) {
  return (a + b) / 2;
}

console.log(average(2, 1));
