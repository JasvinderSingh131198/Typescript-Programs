
//Without Async programming
// console.log("Fetching Data...");
// // Blocking code (waits for 5 seconds)
// const start = Date.now();
// while (Date.now() - start < 5000) {
// }
// console.log("Data Received");

//Async programming
//In asynchronous programming, a task can start and continue in the background while other code executes.
//promises
//A Promise represents a value that may be available now, later, or never.
//Promise States
//Pending 
//Fulfilled (Resolved)
//Rejected

//const myPromise = new Promise((resolve, reject) => {
//Asynchronous operation or task 
// If successful, call resolve with the result 
//  If there's an error, call reject with the reason});

// function fetchData(): Promise<string> {
// return new Promise((Pending) => {
//         setTimeout(() => {
//             Pending("User Data");
//         }, 3000);
// });

// fetchData()
//     .then(data => console.log(data));


//Async and await
// async and await are keywords in TypeScript (and JavaScript) that make asynchronous code look 
// and behave like synchronous code.


async function fetchData() : Promise<string> {
    console.log("Fetching Data...");

    // Blocking code (waits for 5 seconds)
    await new Promise(resolve => setTimeout(resolve, 5000));

    return "Data Receieved...."
}

async function demeTest() {
    console.log("Test is Started...");
    
    const data = await fetchData();

    console.log("Test Completed..");
}

demeTest();