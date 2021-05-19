//select element
let allspans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theinput = document.getElementById("the-input");

allspans.forEach(span =>{

  span.addEventListener("click" ,(e)=>{
    
    if (e.target.classList.contains("check")){

       checkItem(); 

    }
    if (e.target.classList.contains("add")){

        addItem();
 
     }
     if(e.target.classList.contains("delete")){

        deleteItem(); 
 
     }
     if(e.target.classList.contains("show")){

        showItem(); 
 
     }

  })
    
});

//function check input (theinput)
function ShowMessage(){
if (theinput.value ===""){
    results.innerHTML="input cant be empty"

}
}

//function check item
function checkItem(){

  if(theinput.value!==""){
    
    if(localStorage.getItem(theinput.value)){

        results.innerHTML =`Found Local Item Called <span>${theinput.value}</span>`;
    }else{
        results.innerHTML =`No Local Storge Item Called <span>${theinput.value}</span>`

    }

  }else{
     ShowMessage(); 
  }  

}
//function add item
function addItem(){
   
   if(theinput.value!==""){
    
      localStorage.setItem(theinput.value ,"Test");

           results.innerHTML =`Local Storge Item <span>${theinput.value}</span> Added`;

           theinput.value="";
    
    }else{
      ShowMessage();     
    }
}
//function delete item
function deleteItem(){
    
  if(theinput.value!==""){

    if(localStorage.getItem(theinput.value)){
        
       localStorage.removeItem(theinput.value);
    
       results.innerHTML =`Local Item <span>${theinput.value}</span> Deleted`;

       theinput.value="";
    }else{
       results.innerHTML =`No Local Storge Item Called <span>${theinput.value}</span>`
    
    }
    
      }else{
         ShowMessage(); 
      }  
    
}
//function show item
function showItem(){

   results.innerHTML =""; 

  if(localStorage.length){

    for(let [key , value] of Object.entries(localStorage)){

      results.innerHTML+= `<span class ="key">${key}</span>`;  

    }

  }else{
    results.innerHTML = `Local Storge Is Empty`;  
  }  
}