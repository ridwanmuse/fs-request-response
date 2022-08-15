////////////////////////////////////////////////
//THE TEST SERVER IS RUNNING ON LOCALHOST:3000//
////////////////////////////////////////////////

// PROBLEM 1
/*
    In the index.html file in this folder there is a button with an id of 'say-hello-button'!

    Use querySelector to select that button and save it to a variable called sayHelloButton
*/

let sayHelloButton = document.querySelector('#say-hello-button');


// PROBLEM 2
/*
    Create a function that changes sayHelloButton's background color to black and its text color to white (you can use the .style object or create a CSS class and use classList.add)
    
    Attach a mouseover event to sayHelloButton that calls the function you wrote
*/

sayHelloButton.addEventListener('mouseover', () => {
    sayHelloButton.style.backgroundColor = 'black';
    sayHelloButton.style.color = 'white';
})



// PROBLEM 3
/*
    Now you can see that the button colors change, but they do not change back when we take the mouse off of the button.

    Write another function that changes the button back to its original colors. #EFEFEF for the background and black for the text.

    Attach another listener that fires your second function when the mouseout event occurs on the button
*/

sayHelloButton.addEventListener('mouseout', () => {
    sayHelloButton.style.backgroundColor = '#EFEFEF';
    sayHelloButton.style.color = 'black';
})



// PROBLEM 4
/*
    Now lets see if we can make a request to our server when we click the button

    Add a 3rd event listener to sayHelloButton and trigger the sayHello function when the button is clicked
*/

// DO NOT EDIT FUNCTION
const sayHello = () => {
    axios.get('http://localhost:3000/say-hello').then((res) => {
        let helloText = document.getElementById('hello-text');
        helloText.style.display = 'block';
        helloText.style.backgroundColor = 'green';
        helloText.textContent = res.data;
    })
}
// DO NOT EDIT FUNCTION

sayHelloButton.addEventListener('click', sayHello);


// PROBLEM 5 
/*
    Now that we have attached a few event listeners why dont we try adding a request? 
    
    Below you will find an event listener on a button. 
    
    Use axios inside the ohMy function to make a GET request to 'http://localhost:3000/animals' 
    
    Handle the promise that's returned with a .then, which you should pass a callback function to. Inside the callback function, console.log the response's data (in the intermediate instructions we'll come back to this function and add HTML).
*/ 

const ohMy = () => {
    return axios.get('http://localhost:3000/animals')
.then(res => {
    return res.data
})

}

document.getElementById('animals-button').addEventListener('click', ohMy)


// PROBLEM 6 
/*
    Now lets see if you can send a request param! inside repeatMyParam function below  make get request to 'http://localhost:3000/repeat/{SOMEPARAM}', but with a string instead of {SOMEPARAM}.  

    The function that runs when this request is made will return whatever parameter you sent 

    Handle the promise returned from the request with a .then, which will take in a callback -- the callback function should print the response.data.
    
    Outside of the function, select the button with the id "repeat-button" and add a click event listener that calls the repeatMyParam function.
    
    We'll be updating this function in the next problem.
*/

const repeatMyParam = () => {
    return axios.get('http://localhost:3000/repeat/I-Love-Coding')
.then(res => res.data)
}

// PROBLEM 7
/*
    Now that we have the response data, let's add it to our web page! 
    
    Inside the repeatMyParam function above, grab the element with the id of 'repeat-text' and set its textContent property equal to the response data.
*/

let repeatEl = document.getElementById('repeat-text');
repeatEl.textContent = res.data;
repeatEl.style.display = 'block';



// PROBLEM 8
/*
    Time to attach a query to our request!

    Write a function that makes a get request to 'http://localhost:3000/query-test', with a query of your choice on the end!

    Outside of your new function, select the button with the id "query-button" and add a click event listener that calls your function.
*/

axios.get('http://localhost:3000/repeat?myquery=a-really-awesome-query&anotherOne=DJ-Khalid')
.then(({ data }) => console.log(data))



