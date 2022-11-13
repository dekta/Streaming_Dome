

        let data=localStorage.getItem("otp_number");
        let code=localStorage.getItem("code");

        let num=document.getElementById("num");
        num.innerText="+"+code+" "+data;
        console.log(data,code);
 
        

        const userform=()=>{
             document.getElementById("popup").style.display="block";
            document.querySelector("body").style.background="black";
            document.getElementById("edit_profile").style.color="#333333";
            document.getElementById("profile").style.color="#333333";
            document.getElementById("homebutton").style.color="#333333";
            
        }

        const closetab=()=>{
            document.getElementById("popup").style.display="none";
            document.querySelector("body").style.background="#0f0617 ";
            document.getElementById("profile").style.color="white";
            document.getElementById("edit_profile").style.color="blueviolet";
            document.getElementById("homebutton").style.color="white";
            window.location.href="details.html";
        
        }
      
        function getdata(){
            
            let  name=document.getElementById("name").value;
             let dob=document.getElementById("dob").value;
             let gender=document.getElementById("gender").value;
            let password=document.getElementById("pass").value;
            

            localStorage.setItem("username",name);
            localStorage.setItem("userdob",dob);
            localStorage.setItem("usergender",gender);
            localStorage.setItem("sd_pass",password);
            
        }

        let Name=localStorage.getItem("username");
        let Dob=localStorage.getItem("userdob");
        let Gender=localStorage.getItem("usergender");

        const getuserdata=()=>{
            let div=document.getElementById("profile");
            if(Name!=null){
                let box=document.createElement("div");
                box.style.borderTop="1px solid gray";
                let name_label=document.createElement("label");
                name_label.innerText="Name";

                let h3=document.createElement("h3");
                h3.innerText=Name;
            
                box.append(name_label,h3);
                div.append(box);
            }
            if(Dob!=null){
                let box=document.createElement("div");
                box.style.borderTop="1px solid gray";
                let dob_label=document.createElement("label");
                dob_label.innerText="DOB";

                let user_dob=document.createElement("h3");
                user_dob.innerText=Dob;
                box.append(dob_label,user_dob);
                div.append(box);
                
                console.log(dob_label,user_dob)
            }
            if(Gender!=null){
                let box=document.createElement("div");
                box.style.borderTop="1px solid gray";
                let label=document.createElement("null");
                label.innerText="Gender";

                let user_gender=document.createElement("h3");
                user_gender.innerText=Gender;
                box.append(label,user_gender);
                div.append(box);
                console.log(label,user_gender);
            }


        }
        getuserdata();


        // const logout=()=>{

        //     localStorage.getItem("otp_number")=null;

        // }
        
