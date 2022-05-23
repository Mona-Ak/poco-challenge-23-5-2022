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
    
    // seperating the numbers from operation
    let filterNum = sepVal.filter( (item,index)=>{
        if(index % 2 == 0){
            return item;
        }
    })
    
    // convert the type of string to the number
    let convertNum = filterNum.map(item => {
        return parseInt(item)
    })
    
    let total = 0;
    
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




