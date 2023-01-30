let inputValue = document.getElementById("inputValue");
let submit = document.getElementById("submit");


submit.addEventListener("click",()=>{
    let regex = /[^\s ]+[a-zA-Z0-9]+@g+[a-z]{4,5}(.com|.mm)$/;
   let isExisting = regex.test(inputValue.value);
    
   alert(isExisting);
})
