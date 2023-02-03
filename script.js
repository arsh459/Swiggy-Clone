const link = document.getElementById("link");
const sidebar = document.querySelector(".sidebar");
const close = document.getElementById("close");

let timeoutId;

link.addEventListener("click", function() {
  clearTimeout(timeoutId);
  sidebar.style.display = "block";
  sidebar.style.animation = "slide-in 0.5s forwards";
});

close.addEventListener("click", function() {
  sidebar.style.animation = "slide-out 0.5s forwards";
  timeoutId = setTimeout(function() {
    sidebar.style.display = "none";
  }, 500);
});
document.getElementById("link2").addEventListener("click",signup3);
function signup3(){
  {
    event.preventDefault();
    var name = document.createElement("INPUT");
    name.setAttribute("type", "text");
    name.setAttribute("id", "name");
    name.setAttribute("placeholder", "Enter Your Name");
    var email = document.createElement("INPUT");
    email.setAttribute("type", "text");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Enter Your Email");
    var newbtn1 = document.createElement("button");
    newbtn1.setAttribute("id", "continue");
    newbtn1.innerHTML="continue";
    document.querySelector("#otpbox").append(name,email,newbtn1);
    document.getElementById("login-name").textContent="Sign Up";
   document.getElementById("create").remove();
   
    var btn = document.getElementById("loginbtn");
    btn.remove();
    
    document.querySelector("#continue").addEventListener("click", signup4);
   
   
  }
}

document.querySelector("#loginbtn").addEventListener("click", getOtp);
var users=JSON.parse(localStorage.getItem("users"))|| [] ;
function getOtp(){
    event.preventDefault();
    var phone = document.getElementById("phone").value;
        if(phone.length == 10){
            if (users.includes(phone + "") == true) {
            var otpmsg = document.createElement("P");
            otpmsg.textContent="Enter 6 Digit OTP";
            otpmsg.style.color="red"
            var otp = document.createElement("INPUT");
            otp.setAttribute("type", "text");
            otp.setAttribute("id", "otplogin");
            var newbtn = document.createElement("button");
            newbtn.setAttribute("id", "verify");
            newbtn.innerHTML="Verify OTP";
           document.querySelector("#otpbox").append(otpmsg,otp,newbtn);
            var btn = document.getElementById("loginbtn");
            btn.remove();
            document.getElementById("create").textContent="We've sent an OTP to your phone number.";
            document.querySelector("#verify").addEventListener("click", visitHome);
        
            } else {     
                        users.push(phone);
                        localStorage.setItem("users", JSON.stringify(users));
                        var name = document.createElement("INPUT");
                        name.setAttribute("type", "text");
                        name.setAttribute("id", "name");
                        name.setAttribute("placeholder", "Enter Your Name");
                        var email = document.createElement("INPUT");
                        email.setAttribute("type", "text");
                        email.setAttribute("id", "email");
                        email.setAttribute("placeholder", "Enter Your Email");
                        var newbtn1 = document.createElement("button");
                        newbtn1.setAttribute("id", "continue");
                        newbtn1.innerHTML="continue";
                        document.querySelector("#otpbox").append(name,email,newbtn1);
                        document.getElementById("login-name").textContent="Sign Up";
                       document.getElementById("create").remove();
                       
                        var btn = document.getElementById("loginbtn");
                        btn.remove();
                        document.querySelector("#continue").addEventListener("click", signup2);
            }
        }
            else {
                    alert("Please enter 10 Digit phone number")
                    }


}


function signup2(){
    event.preventDefault();
    
    var name1 = document.getElementById("name");
    name1.remove();
    var email1 = document.getElementById("email");
   email1.remove();
   document.querySelector("#continue").remove();
  
   var otpf = document.createElement("INPUT");
                        otpf.setAttribute("type", "text");
                        otpf.setAttribute("id", "otptext");
                        otpf.setAttribute("placeholder", "Enter 6 Digit OTP");
                        var newbtn2 = document.createElement("button");
                        newbtn2.setAttribute("id", "otpbtn");
                        newbtn2.innerHTML="Verify OTP";
                        document.querySelector("#otpbox").append(otpf,newbtn2);
                        document.querySelector("#otpbtn").addEventListener("click", visitHome2);
} 

function signup4(){

  event.preventDefault();
  var phone =document.getElementById("phone").value;
  console.log(phone);
  users.push(phone);
  localStorage.setItem("users", JSON.stringify(users));
  var name1 = document.getElementById("name");
  name1.remove();
  var email1 = document.getElementById("email");
 email1.remove();
 document.querySelector("#continue").remove();

 var otpf = document.createElement("INPUT");
                      otpf.setAttribute("type", "text");
                      otpf.setAttribute("id", "otptext");
                      otpf.setAttribute("placeholder", "Enter 6 Digit OTP");
                      var newbtn2 = document.createElement("button");
                      newbtn2.setAttribute("id", "otpbtn");
                      newbtn2.innerHTML="Verify OTP";
                      document.querySelector("#otpbox").append(otpf,newbtn2);
                      document.querySelector("#otpbtn").addEventListener("click", visitHome2);
} 

function visitHome(){
  event.preventDefault();
  if(document.querySelector("#otplogin").value==123456){
      window.location.href="index.html";
      
  } else{
      alert("You have Entered Wrong OTP");
  }
  
} 

function visitHome2(){
  event.preventDefault();
  var otpverify1 = document.getElementById("otptext").value;
  if(otpverify1==123456){
    window.location.href="index.html";
} else{
    alert("You have Entered Wrong OTP");
}
};



document.getElementById("phone").addEventListener("focus", function() {
  this.classList.add("focused");
});

document.getElementById("phone").addEventListener("blur", function() {
  this.classList.remove("focused");
});
