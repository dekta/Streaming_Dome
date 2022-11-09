
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}


const verify=()=>{
    let dig1=document.getElementById("first").value;
    let dig2=document.getElementById("sec").value;
    let dig3=document.getElementById("third").value;
    let dig4=document.getElementById("fourth").value;
    if(dig1==1 && dig2==2 && dig3==3 && dig4==4){
        window.open("login.html");
    }else{
        alert("Wrong OTP");
    }
}

const enterpass=()=>{
    document.getElementById("popup").style.display="block";
    
}

const closetab=()=>{
    document.getElementById("popup").style.display="none";
}