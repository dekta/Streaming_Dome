













document.getElementById("confirm").addEventListener("click", payment);

function payment(event) {
    event.preventDefault()

    let mobilenumber = document.getElementById("mobile-number").value
    let cvv = document.getElementById("cvv").value
    let custname = document.getElementById("custname").value
    let cardnum = document.getElementById("cardnum").value
    let months = document.getElementById("months").value
    let years = document.getElementById("years").value

    if (mobilenumber.length==0 || cvv.length==0 || custname.length==0 || cardnum.length==0) {
        alert("Please fill all the details")


    } else {
       window.location.href = "./paymentotp.html"
    }
    


}