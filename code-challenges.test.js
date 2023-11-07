// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//pseudo code: 
// Using the describe method we can create a function that takes in both a string and function.
// it, declares what your test should do
// expect, calls on our function in which we expect our outcome to contain an array in any order
describe ("removeOrAddColor", () => {
    it("takes in an array and removes the first item from the array and shuffles the remaining items", () => {
        expect(removeOrAddColor(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeOrAddColor(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
     })
 })

// b) Create the function that makes the test pass.

//pseudo code
//Created a function that takes in any array
//Created a new variable to hold my array missing the first index
//Created a loop that runs through the length of my newly created variable
//Created a variable to hold my rng that outputs number through the length of the new array
//Created an algorithm that sets the elements of the newArray to equal the newArray with a random index
//The array with the new index is then going to be set equal to a new index
//output the newly created array

const removeOrAddColor = (array) => {
    let newArray = array.slice(1)
    for (let i=0; i < newArray.length; i++){
        randomIndex = Math.floor(Math.random() * newArray.length)
        let finalArray = newArray[i]
        newArray[i] = newArray[randomIndex]
        newArray[randomIndex] = finalArray
        }
    return newArray
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// Pseudo code:
// Using the describe method we can create a function that takes in both a string and function.
// it, declares what your test should do
// expect, calls on our function in which we expect our outcome to equal to a given number

describe("totalTally", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        expect(totalTally(votes1)).toEqual(11)
        expect(totalTally(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.
// Pseudo code:
// created a function that takes in an object
// access each key:value of the obtained object and minus them and return the value

const totalTally = (object) => {
    return object.upVotes - object.downVotes
}
