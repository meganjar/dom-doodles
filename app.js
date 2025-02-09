let canvas = document.querySelector('#canvas');
let inpColor = document.querySelector('#inp-c');
let button = document.querySelector('button');
let canvasState = true;
let color = '#FF0000';



// IMPORTANT REMINDER: YOU ALREADY HAVE THESE GLOBAL VARIABLES ABOVE. 
// USE THEM!!! 





// PART 1: Create the canvas!

// a. Make a function called createCanvas
// b. Inside, add a for loop that loops from 0 to 1080
// c. In the for loop, create a new div element
// d. Then append the new div element to the div with id "canvas" (HINT: line 1)
// e. In the global scope, call the createCanvas function

function createCanvas() {
    for (i=0; i<1081; i++) {
       const newDiv = document.createElement("div");
       newDiv.className = "cell"; 
       canvas.append(newDiv);
    }
}

createCanvas()

// CODE HERE


// PART 2: Paint!

// a. Add an event listener to the div with id of canvas
// b. It should respond to the 'mouseover' event
// c. Use a condition to check if the target element is not the canvas div
// d. Also check if the 'canvasState' variable is true (HINT: line 4)
// e. If both checks pass, set the background color of the target element to the value of the 'color' variable (HINT: line 5)

canvas.addEventListener("mouseover", (event) => {
    if (event.target.className !== "canvas" && canvasState === true) {
        console.log("mouse is over non-canvas element")
  event.target.backgroundColor=color;
   
    }
    
})


// PART 3: Stop painting!

// a. Add an event listener to the canvas div that listens for 'click' events
// b. In the callback function it should toggle the boolean value of the variable 'canvasState'

canvas.addEventListener("click", (event) => {
    canvasState = !canvasState; 
console.log(event.target.canvasState);
}
)



// PART 4: Change the color!

// a. Add an event listener to the input with type 'color' (HINT: line 2)
// b. It should respond to the 'change' event
// c. Inside the callback, set the 'color' variable to the current value of the target element



inpColor.addEventListener("input", (event) => {
   
    color = event.target.value;
    console.log(event.target.value);
    }
    )


// PART 5: A clean slate...

// a. Add an event listener to the button element that listens for 'click' events (HINT: line 3)
// b. It should clear the canvas div of any child elements
// c. Then call the createCanvas function you created in Part 1


button.addEventListener("click", (event) => {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild); // Remove all child elements
    }
        console.log(canvas.childElementCount)
        createCanvas();
    
    })
   




// PART 6: Create your Mona Lisa!

// a. Use your skills to paint a memorable picture
// b. Take a screenshot of your work of art
// c. Share it with the class! (Slack)

// *

