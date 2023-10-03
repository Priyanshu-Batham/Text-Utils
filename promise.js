//basic promise
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //nothing
//         resolve()
//     },3000); 
// });

// p.then(()=>{
//     console.log("async funtion fullfilled with resolve");
// });

//little complicating
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // doing some time taking async work
        let obj = {name: "priyanshu"};
        let error = false;

        if(error){
            reject("something went wrong");
        }
        else{
            resolve(obj);
        }
    },1000);
});

//consuming above promise using .then() and .catch()
// promise.then((value)=>{
//     console.log(value);
//     return value.name; 
// }).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

//consuming above promise using async await
// async function consume(){
//     try {
//         let value = await promise;
//         let name = await value.name;
//         console.log(name);
//     } catch (error) {
//         console.log(error);        
//     }
// }
// consume();
// console.log("I'll execute faster");

// using some real example
// // using .then().catch()
// url = "https://jsonplaceholder.typicode.com/users";
// p = fetch(url);
// p.then((response)=>{
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log("something wrong occured: ",error);
// });

// using async await
// url = "https://jsonplaceholder.typicode.com/users";
// async function getData(url){
//     try{
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("Something wrong happened: ", error);
//     }
// }
// getData(url);
async function willwait(){
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello");
        },1000);
    })

    console.log(await p);
    console.log("I am supposed to wait");
}
willwait();