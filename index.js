//Api calling in Javascript
//=>Api Calling in  Fetch method
//4 ways to call api-XMLHttpRequest,fetch,axios,jquery

//fetch() has replaced XMLhttpRequest
//fetch()-global method for asking Http Request
//2 ways to call -then,async,await

//+ fetch() is easy to use compare to XMLHttpRequest
//+fetch () returns a promise
//- returned promise can only network error
//-does not support all the older browser
console.clear();
console.log(window);
fetch('https://jsonplaceholder.typicode.com/posts',{
 method:'POST',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
    title:"foo",
    body:"bar",
    userId:1,
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})


//Update Data
fetch('https://jsonplaceholder.typicode.com/posts/1',{
 method:'PUT',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
    title:"Software",
    body:"Rifat",
    userId:2,
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})

//patch
fetch('https://jsonplaceholder.typicode.com/posts/1',{
 method:'PATCH',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
   title:"I am a Full stack web appliaction Developer",
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})

//delete

fetch('https://jsonplaceholder.typicode.com/posts/2',{
 method:'DELETE',
//  headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//  body:JSON.stringify({
//    title:"I am a Full stack web appliaction Developer",
//  })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})