let plan699 = document.getElementById("buy-box2-1");
let plan399 = document.getElementById("plan2");
let BtnContinue = document.getElementById("con-btn");
plan699.addEventListener("click",Plan699)
plan399.addEventListener("click",Plan399)



function Plan699() {
  plan699.style.backgroundColor = "hsl(318deg 62% 94%)";
  plan399.style.backgroundColor = "white";
  plan699.style.border = "1px dashed hsl(318deg 62% 94%)";
  plan399.style.border = "1px dashed gray";
  BtnContinue.style.cursor = "pointer";
  BtnContinue.style.color = "white";
  BtnContinue.style.backgroundColor = "blue";
  BtnContinue.innerText = "Continue With ₹699";
}
function Plan399() {
  plan399.style.backgroundColor = "hsl(318deg 62% 94%)";
  plan699.style.backgroundColor = "white";
  plan399.style.border = "1px dashed hsl(318deg 62% 94%)";
  plan699.style.border = "1px dashed gray";
  BtnContinue.style.cursor = "pointer";
  BtnContinue.style.backgroundColor = "blue";
  BtnContinue.style.color = "white";
  BtnContinue.innerText = "Continue With ₹399";
}




BtnContinue.addEventListener("click", buypremium);
function buypremium() {
  location.href=("payment.html");
}