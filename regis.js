

const registeruser=()=>{

    let num=document.getElementById("mobile").value;
    if(num.length==10){
        window.location.href="otp.html";
    }else{
        alert("Invalid Number");
    }
}

const countnum=()=>{
    let num=document.getElementById("mobile").value;
    if(num.length==10){
        send.style.background="#8230c6";
        send.style.color="white";
    }else{
        send.style.backgroundColor="#0f0617";
        send.style.color="grey";
    }
}