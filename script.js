


function change() {
    let fah = document.getElementById("fah")
    let cel = document.getElementById("cel")
    let divGeneral = document.getElementById("divGeneral")
    let h1 = document.querySelector("h1")
    let pcel = document.getElementById("pTagCel")
    let h2c = document.getElementById("resultCelsius")
    let pfah = document.getElementById("pTagFah")
    let h2f = document.getElementById("resultFahrenheit")
    let span = document.querySelector("span")
    //let changeButton = document.getElementById("changeButton");
  
    if (cel.classList.contains("hideDisplay")) {
      cel.classList.remove("hideDisplay")
      cel.classList.add("showDispay") 
      fah.classList.add("hideDisplay")
      fah.classList.remove("showDisplay")
      divGeneral.style.backgroundColor = "white"
      h1.style.color = "black"
      h1.innerHTML ="Temperature"
      pfah.style.color = "black"
      h2f.style.color = "black"
      pcel.style.color = "black"
      h2c.style.color = "black"
      span.style.color = "black"
    } else {
      cel.classList.add("hideDisplay")
      cel.classList.remove("showDisplay")
      fah.classList.remove("hideDisplay")
      fah.classList.add("showDisplay")
      divGeneral.style.backgroundColor = "black"
      h1.style.color = "white"
      h1.innerHTML = "Temperature"
      pcel.style.color = "white"
      h2c.style.color = "white"
      pfah.style.color = "white"
      h2f.style.color = "white"
      span.style.color = "white"

    }
  }


  //Para transformar a temperatura de Celsius para Fahrenheit

function calculateToFahrenheit() {
    let celsius = document.getElementById("c")
    let cValue = celsius.value

    if(cValue.length < 1) {
        alert("You have to type a number!");
        return
    }

    let myFahrenheit = cTOf(cValue).toFixed(2)
    let resultDiv = document.getElementById("resultFahrenheit")
    resultDiv.innerHTML = `<div> Fahrenheit: ${myFahrenheit}  ° </div>`

    celsius.value = ""
       
}

function cTOf(c) {
    let fahrenheit = (c * 9/5) + 32;
   
    return fahrenheit
}

  
//Para transformar a temperatura de Fahrenheit para Celsius

function calculateToCelsius() {
    let fahrenheit = document.getElementById("f")
    let fValue = fahrenheit.value


    if(fValue.length < 1) {
        alert("You have to type a number!");
        return
    }

    let myCelsius = fTOc(fValue).toFixed(2)
    

    let resultDiv = document.getElementById("resultCelsius")
    resultDiv.innerHTML = `<div> Celsius: ${myCelsius}  ° </div>`
    fahrenheit.value = ""
    
}


function fTOc(f) {
    let celsius = (f - 32) * 5/9
   
    return celsius
}


//---------------------------------------------------------------------------------------//

// // BRAD'S CODE

// // FUNCTION - FIGURES OUT WHICH EQUATION TO RUN AND CONSOLE LOG'S THE STRING
// function calc(num) {
    
//     // FIND CHANGE BUTTON AND SAVE TO VARIABLE
//     const changeButton = document.getElementById("changeButton")

//     // FIND LIST OF CLASS NAMES AND SEE WHETHER WE DO FTOC OR CTOF - TRUE OR FALSE
//     const isFtoC = changeButton.classList.contains("fTOC")

//     // CHECK THE TRUE OR FALSE TO SEE WHICH EQUATION TO RUN
//     if(isFtoC) {
//         let finalTemp = (num * 9/5) + 32;
//         console.log("It's F to C: " + finalTemp)

//     // IF IT'S NOT FTOC, THEN WE DO THIS: CTOF
//     } else {
//         let finalTemp  = (num - 32) * 5/9;
//         console.log("It's C to F: " + finalTemp)
//     }
// }


// // FUNCTION - CHANGES THE CLASS ON THE BUTTON SO THE USER CAN DECIDE WHICH EQUATION TO RUN
// function changeBtn() {    
//     const changeButton = document.getElementById("changeButton")

//     // CHANGE CLASS NAMES TO GUIDE WHICH EQUATION WE'LL DO IN THE ABOVE FUNCTION
//     if(changeButton.classList.contains("fTOC")){
//         changeButton.classList.remove("fTOC")
//         changeButton.classList.add("cTOF")
//     } else {
//         changeButton.classList.remove("cTOF")
//         changeButton.classList.add("fTOC")
//     }
// }