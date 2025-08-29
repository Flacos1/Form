document.getElementById("f").addEventListener("submit",function (event){
    let e="";
    let a=true;
    if(document.getElementById("firstname").value==="")
    {
        a=false;
        e+="Please enter your first name\n";
    }
    if(document.getElementById("lastname").value==="")
    {
        a=false;
        e+="Please enter your last name\n";
    }
    if (document.getElementById("birthday").value === "") {
        a = false;
        e += "Please enter your birthday\n";
    }
    if(document.querySelector('input[name="a"]:checked')===null){
        a = false;
        e += "Please select your gender\n";
    }
    if (document.getElementById("address").value === "") {
        a = false;
        e += "Please enter your address\n";
    }
    if (document.getElementById("email").value === "") {
        a = false;
        e += "Please enter your E-mail\n";
    }
    if (document.getElementById("mobile").value === "") {
        a = false;
        e += "Please enter your mobile number\n";
    }
    if (document.getElementById("course").value === "") {
        a = false;
        e += "Please select at least one course\n";
    }
    if (a == false) {
        event.preventDefault();
        alert(e);
    }
})