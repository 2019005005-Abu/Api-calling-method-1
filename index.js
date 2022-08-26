//Api calling in Javascript
//=>Api Calling in Js XMLHttpRequest
//events are
/**
 onload,onerror
 property=>response,responseText,responseType,responseURL,
 status,statusText
 //function=>open(),send(),setRequestHeader()
 */

const makeDataRequest=(method,URL,dataRecieve,up)=>{
    return new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,URL);
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload=()=>{
      let data=xhr.response;
      console.log(xhr.status);
      console.log(JSON.parse(data));  
    }
    xhr.onerror=()=>{
      console.log("Error is here");  
    }
    xhr.send(JSON.stringify(dataRecieve));
     })
   
}
//get data
const getData=()=>{
    makeDataRequest('GET','https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response);
    });
}
getData();

//send data
const sendData=()=>{
    makeDataRequest('POST','https://jsonplaceholder.typicode.com/posts',{
         title:"foo",
         body:"bar",
         userId:1,
    })
}
sendData();


// UpdateData
const updateData=()=>{
    makeDataRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
       title:"This is changed",
    })
}
updateData()

// delete method
const deleteData=()=>{
    makeDataRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}
deleteData();
