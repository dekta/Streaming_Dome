


//console.log(input_box);

const inputprocess=()=>{
    input_box=document.getElementById("enter");
    input_box.style.border="none";
    let num=input_box.value;
    if(num.length==10){
        window.location.href="otp.html";
    }else{
        alert("Enter a Valid Number");
    }
    console.log(num);
}
//inputprocess();