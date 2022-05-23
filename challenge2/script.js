const mainContainer = document.querySelector("main");
const equationField = document.querySelector("input");
const solveButton = document.querySelector("button");
const solutionDisplay = document.querySelector("h3");

solveButton.addEventListener("click", function(e) {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``;
    
    // Write your code here 👇

    let equationComponent = document.createElement('p');
    equationComponent.classList.add('equation-component');
    
    let sepVal = equationField.value.split(" ");
    
    
    let filterNum = sepVal.filter( (item,index)=>{
        if(index % 2 == 0){
            return item;
        }
    })
    
    let convertNum = filterNum.map(item => {
        return parseInt(item)
    })
    

    // for(let i = 0; i < filterNum.length; i++){
        if(sepVal.includes('+')){
            convertNum.reduce( (a , b) => {
                console.log(a + b)
                equationComponent.textContent = a + b;
            })
        }
        // console.log(convertNum)
        
        if(sepVal.includes('-')){
            convertNum.reduce((a, b)=> {
                console.log(a - b);
                equationComponent.textContent = a - b;
            })    
        }

        if(sepVal.includes('*')){
            convertNum.reduce( (a , b)=> {
                console.log(a * b);
                equationComponent.textContent += a * b;

            });
        }

        if(sepVal.includes("/")){
            convertNum.reduce((a,b)=> {
                console.log( a / b);
                equationComponent.textContent = a / b;
            })
        }

        solutionDisplay.appendChild(equationComponent);

})
// let myArr = [50, 30 , 2];

// for(let i = 0;i < myArr.length; i++ ){
//     // let moo -= myArr[i];
//     // let moon = myArr[i]--
//     // console.log(moon)
//     let me = 6;
//     let you = me; 
// }

//  totalPrice = [60,40];

// var total = 0;

//    for (var i  = 0; i < totalPrice.length; i++){

//       total  -= totalPrice[i];

//       console.log(total)
//    }



