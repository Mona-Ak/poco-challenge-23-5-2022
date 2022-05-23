
const box = document.querySelector("button");
const text = document.querySelector("span");

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
})


// Write your code here 👇

box.addEventListener('keypress', rate =>{
    let rateNum = parseInt(rate.key);
    console.log(rateNum)
    
    switch(rateNum){
        case 1 :
            text.textContent = '🤬';
            break;
        case 2 :
            text.textContent = '☹️';
            break;
        case 3 :
            text.textContent = '😐';
            break;
        case 4 :
            text.textContent = '🙂';
            break;
        case 5 :
            text.textContent = '😁';
            break;
        default:
            text.textContent = 'please add number between 1 and  5'
            break;
    }
})

