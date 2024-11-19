const container=document.querySelector(".container");
const blind=document.querySelectorAll(".blind");
const password=document.querySelectorAll(".password");
const sigup=document.querySelector(".sigup");
const now=document.querySelector(".now");


blind.forEach((eye)=>{
    eye.addEventListener("click",()=>{
        password.forEach((pass)=>{
            if(pass.type==="password"){
                pass.type="text";
                blind.forEach((icon)=>{
                    icon.classList.replace("uil-eye-slash","uil-eye")
                })
            }else{
                pass.type="password";
                blind.forEach((icon)=>{
                    icon.classList.replace("uil-eye","uil-eye-slash")
                })
            }
        })
    })
})
sigup.addEventListener("click",()=>{
    container.classList.add("active");
})
now.addEventListener("click",()=>{
    container.classList.remove("active")
})
