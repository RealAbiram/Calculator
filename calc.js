const display= document.getElementById("display");
function DisplayIt(input){
    display.value += input;
}

function cleardisplay(input){
    display.value="";
}

function calc(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}