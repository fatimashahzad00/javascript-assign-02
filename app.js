// 1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.
// function add_closure(num) {
//     return function(x) {
//       return x + num;
//     }
//   }

//   const addFive = add_closure(5);
//   console.log(addFive(5)); // Output: 10
//   console.log(addFive(10)); // Output: 15

//   2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
// function searchArray(arr, val) {
//     // array is empty
//     if (arr.length === 0) {
//       return false;
//     }
    
//     // Recursive case: check first element and search rest of array
//     if (arr[0] === val) {
//       return true;
//     } else {
//       return searchArray(arr.slice(1), val);
//     }
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3)); // Output: true
//   console.log(searchArray(arr, 6)); // Output: false

//   3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.
// function addParagraph(text) {
//   // create a new paragraph element
//   const newParagraph = document.createElement("p");

//   // set the text content of the paragraph to the provided text
//   newParagraph.textContent = text;

//   // get a reference to the body element
//   const body = document.querySelector("body");

//   // check if body element was found
//   if (body) {
//     // append the new paragraph element to the body
//     body.appendChild(newParagraph);
//   } else {
//     console.error("Body element not found!");
//   }
// }


//   addParagraph("This is a new paragraph!");

//   4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
// function addListItem(text) {
//     // create a new list item element
//     const newListItem = document.createElement("li");
  
//     // set the text content of the list item to the provided text
//     newListItem.textContent = text;
  
//     // get a reference to the unordered list element
//     const list = document.querySelector("ul");
  
//     // append the new list item element to the unordered list
//     list.appendChild(newListItem);
//   }
//   addListItem("This is a new list item!");
  
// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

// function changeBackgroundColor(element, color) {
//     // set the background color of the element to the provided color
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById("my-element");
// changeBackgroundColor(myElement, "yellow");


// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

// function saveObjectToLocalStorage(key, obj) {
//     // convert the object to a JSON string
//     const json = JSON.stringify(obj);
  
//     // save the JSON string to localStorage using the provided key
//     localStorage.setItem(key, json);

//     console.log(obj);
//   }
//   const myObject = { name: "John", age: 30 };
//   saveObjectToLocalStorage("my-object", myObject);
    

// 7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

// function getObjectFromLocalStorage(key) {
//     // get the JSON string from localStorage using the provided key
//     const json = localStorage.getItem(key);
  
//     // if there is no JSON string, return null
//     if (!json) {
//       return null;
//     }
  
//     // convert the JSON string to an object and return it
//     return JSON.parse(json);
//   }
//   const myObject = getObjectFromLocalStorage("my-object");

//   if (myObject) {
//     console.log(myObject);
//   } else {
//     console.log("Object not found in localStorage");
//   }
    

// 8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorag and return it as a new object.
function saveObjectPropertiesToLocalStorage(obj) {
    // iterate over the properties of the object
    for (const prop in obj) {
      // save each property to localStorage using the property name as the key
      localStorage.setItem(prop, obj[prop]);
    }
  
    // create a new object to hold the retrieved properties
    const retrievedObj = {};
  
    // iterate over the keys of localStorage
    for (let i = 0; i < localStorage.length; i++) {
      // get the key and value from localStorage
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      // add the key-value pair to the retrieved object
      retrievedObj[key] = value;
    }
  
    // return the retrieved object
    return retrievedObj;
  }

  const myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
  
  console.log(retrievedObject);
  