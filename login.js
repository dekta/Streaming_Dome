


//console.log(input_box);

const inputprocess=()=>{
    input_box=document.getElementById("enter");
    input_box.style.border="none";
    let num=input_box.value;
    localStorage.setItem("otp_number",num);

    let code=document.getElementById("code-select").value;
    console.log(code);
    localStorage.setItem("code",code);
    
    
    if(num.length==10){
        window.location.href="otp.html";
        login.style.backgroundColor="#8230c6";
        login.style.color="white";
          
    }else{
        alert("Enter a Valid Number");
    }
    console.log(num);
}
//inputprocess();


 const countnum=()=>{
    let num=document.getElementById("enter").value;
    let login=document.getElementById("login");
    if(num.length==10){
        login.style.backgroundColor="#8230c6";
        login.style.color="white";
    }else{
        login.style.backgroundColor="#0f0617";
        login.style.color="grey";

    }

    

}
//countnum();