console.log("js file has been added to the html file");

let btn = document.getElementById('btn');
let btn_text = document.getElementById('btn-text');

console.log(btn);
console.log(btn_text);

// btn.onclick = function() {
//     btn_text.innerHTML = "Button has been click";
// }

// btn.addEventListener('click', function(){

//     if (btn_text.innerHTML == "Button has been click"){
//         btn_text.innerHTML = "Text to change after clicking the Button";
//     }

//     else{
//         btn_text.innerHTML = "Button has been click";
//     }
    
// });

// btn.onclick = function(){
//     alert('Button has been clicked');
// }




function myNamePrint(){
     if (btn_text.innerHTML == "Button has been click"){
        btn_text.innerHTML = "Text to change after clicking the Button";
    }

    else{
        btn_text.innerHTML = "Button has been click";
    }
}

btn.addEventListener('click', myNamePrint);
