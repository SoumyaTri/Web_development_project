
const celsiusField =document.querySelector("#celsius");
const degree =document.querySelector("#degree");
const convertBtn =document.querySelector("#convert-btn");
const tempType =document.querySelector("#temp-type");

window.addEventListener("load",() =>{
    degree.value ="";
    celsiusField.innerHTML="";

})
convertBtn.addEventListener("click",(e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML="<span><i class='fa-solid fa-spinner fa-spin'></i>converting...</span>";
    setTimeout(() =>{
        convertBtn.innerHTML="<span>convert</span>"
    },1000)
})

function convertToCelsius(){
    let inputValue = degree.value;
    setTimeout(() => {
        if(tempType.value == "farenheit"){
            const farenheitToCelsius =(inputValue -32)*(5/9);
            celsiusField.innerHTML =`${farenheitToCelsius.toFixed(3)} &deg;c`; 
            
        }
        else if(tempType.value == "kelvin"){
            const kelvinToCelsicus =inputValue -273.15;
            celsiusField.innerHTML =`${kelvinToCelsicus.toFixed(3)} &deg;c`; 
            
    
        }
    },1100)

}