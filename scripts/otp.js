//import navbar from "./components/navbar.js";


function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

const load=()=>{

    let otp_num=localStorage.getItem("otp_number");
    console.log(otp_num);

    let code=localStorage.getItem("code");
    //console.log(code);

    document.getElementById("span_no").innerText=code+" "+otp_num;
}
load();



const verify=()=>{
    let dig1=document.getElementById("first").value;
    let dig2=document.getElementById("sec").value;
    let dig3=document.getElementById("third").value;
    let dig4=document.getElementById("fourth").value;
    if(dig1==1 && dig2==2 && dig3==3 && dig4==4){
        window.location.href="index.html";
        
    }else{
        alert("Wrong OTP");
    }

}
const otpverify=()=>{
    let dig1=document.getElementById("first").value;
    let dig2=document.getElementById("sec").value;
    let dig3=document.getElementById("third").value;
    let dig4=document.getElementById("fourth").value;
    if(dig1!=null && dig2!=null && dig3!=null && dig4!=null){
        verify_btn.style.background="#8230c6";
        verify_btn.style.color="white";
    }
}

const enterpass=()=>{
    document.getElementById("popup").style.display="block";
    document.querySelector("body").style.background="black";
    document.getElementById("check").style.color="#333333";
   document.getElementById("ent-pass").style.color="#333333";
   document.getElementById("ent-pass").style.border="1px solid #333333";
   //document.getElementById("otp_div").style.color="#333333";


    
}

const closetab=()=>{
    document.getElementById("popup").style.display="none";
    document.querySelector("body").style.background="#0f0617";
    document.getElementById("check").style.color="white";
   document.getElementById("ent-pass").style.color="gray";
   document.getElementById("ent-pass").style.border="1.2px solid rgb(163, 162, 162)";

}

const process=()=>{
    let password=localStorage.getItem("sd_pass")
    let pass=document.getElementById("pass").value;
    if(pass.length>=6 && pass==password){
        window.open("index.html");
    }else{
        alert("Wrong Password");
    }
}

const passwordcount=()=>{
    let count=document.getElementById("pass").value;
    if(count.length>=6){
        proceed.style.background="#8230c6";
        proceed.style.color="white";
        proceed.style.border="none";
    }else{
        proceed.style.background="#0f0617";
        proceed.style.color="gray";
        proceed.style.border="1.2px solid rgb(163, 162, 162)";
    }
}