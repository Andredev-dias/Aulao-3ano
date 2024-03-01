function checkMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(wasBorn)){
        res.textContent = "Digite apenas números"
        res.style.color = "red"
        return;
    }

    const thisYear = new Date().getFullYear();
    const age = thisYear - wasBorn;

    if(age >= 18){
        res.textContent = "Over 18, ENTRY 🏃‍♀️"
        res.style.color = "green"
    }else{
        res.textContent = "Under 18, NOT ALLOWED 👮‍♂️"
        res.style.color = "red"
    }
    //template string
    document.getElementById("clientAge").innerHTML = `${age} anos de idade`
    // document.getElementById("clientAge").innerHTML = age + "anos de idade"

}