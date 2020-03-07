const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const sendHttpRequest = (method, url, data) => {
   const promise = new Promise((resolve,reject) =>{ 
    const xhr = new XMLHttpRequest();        //istantiating new XMLHTTPRequest
    xhr.open(method, url);
    
    xhr.responseType = 'json';


     if(data){
        xhr.setRequestHeader('Content-Type','application/json')
     }
   


        xhr.onload =  () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            } else{
                resolve(xhr.response)
            }
            
        };

        xhr.onerror = () => {
            reject('Something went wrong!')
        }


    xhr.send(JSON.stringify(data));
   }) 
   
   return promise;
};


const getData = () => {
    sendHttpRequest('GET','http://localhost:3000/streetwear').then(responseData =>{
        console.log(responseData)
    });
}

const sendData = () => {
    sendHttpRequest('POST','http://localhost:3000/streetwear',{
        name: "Bogo Hoodie",
        garment:"clothing",
        designer:"Supreme"
    }).then(responseData =>{
        console.log(responseData);
    }).catch(err => {
        console.log(err)
    })
};


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click',sendData);



function createNewHype() {
    var yeezy = {
      firstName: document.getElementById("name").value,
      garment: document.getElementById("garment").value,
      designer: document.getElementById("designer").value
    };
    var xhr = new window.XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/streetwear');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(yeezy));
  }