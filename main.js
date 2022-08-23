let maName = document.querySelector("#name");
let feName = document.querySelector("#girlName");
let percentNumber = document.querySelector("#percentNumber");
let username = document.querySelector("#username");
let userLoveName = document.querySelector("#userLoveName");
let check = document.querySelector("#check");
let reset = document.querySelector("#reset");


//// Love Calculator ////
check.addEventListener("click", function(){

    let boyName = maName.value;
    let femailName = feName.value;
    let numGenaret = Math.floor(Math.random() * 100);

    if(boyName == ""){
        alert("please enter your name")
    }else if(femailName == ""){
        alert("please inter your love's name")
    }else if(!isNaN(boyName)){
        alert("name not to be number")
    }else if(!isNaN(femailName)){
        alert("love name not to be number")
    }
    else{
      percentNumber.innerHTML = `${numGenaret}%`;
      username.innerHTML = `${boyName}`;
      userLoveName.innerHTML = `${femailName}`;
    }
    maName.value = "";
    feName.value = "";
});

///// Reseat Button ///////
reset.addEventListener("click",function(){
    location.reload();
});