const form=document.querySelector("form");
const success=document.querySelector("#success");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
const firstName=document.querySelector("#first-name").value.trim();
const lastName=document.querySelector("#last-name").value.trim();
const email=document.querySelector("#email").value.trim();
const radio=document.querySelector('input[name="query-type"]:checked')
const message=document.querySelector("#message").value.trim();
const checkbox=document.querySelector("#checkbox").checked;
const errorText=document.querySelectorAll(".error-text")
const queryType=document.querySelector(".query-type")
    let inValid=true;
    if(firstName===""){
        inValid=false;
        document.querySelector('#first-name+.error-text').style.display="block";
        document.querySelector('#first-name').style.border='2px solid red';
    }
    else{
        document.querySelector('#first-name+.error-text').style.display="none";
        document.querySelector('#first-name').style.border='2px solid green';
    }

    if(lastName===""){
        inValid=false;
        document.querySelector('#last-name+.error-text').style.display="block";
        document.querySelector('#last-name').style.border='2px solid red';
    }
    else{
        document.querySelector('#last-name+.error-text').style.display="none";
        document.querySelector('#last-name').style.border='2px solid green';
    }

    if(email==="" && isValidEmail(email)){
        inValid=false;
        document.querySelector('#email+.error-text').style.display="block";
        document.querySelector('#email').style.border='2px solid red';
    }
    else{
        document.querySelector('#email+.error-text').style.display="none";
        document.querySelector('#email').style.border='2px solid green';
    }
    if(!radio){
        inValid=false;
        document.querySelector('.radio-container+.error-text').style.display="block";
    }else{
        document.querySelector('.radio-container+.error-text').style.display="none";
    }

    if(message===""){
        inValid=false
        document.querySelector('#message+.error-text').style.display='block';
        document.querySelector('#message').style.border='2px solid red';
    }else{
        document.querySelector('#message+.error-text').style.display="none";
        document.querySelector('#message').style.border='2px solid green';
    }
    if(!checkbox){
        inValid=false;
        errorText[5].classList.add("error")
    }else{
        errorText[5].classList.remove("error")
        
    }
    if(inValid){
        success.classList.add("active");
        form.reset()
    }
})
function isValidEmail(email){
    const emailregex=`/^[^\s@]+@[^\@]+\.[^\s@+$]` ;
  return emailregex.test(email)
};




