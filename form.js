function clearErrors(){
    errors = document.getElementsByClassName('nameerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('nameerror')[0].innerHTML = error;

}
function validateForm(){
    var returnval = true;
    clearErrors();

    //Perform validation and if validation fails, set the value of returnval to false
    var name=document.forms['myForm']["studentName"].value;
    if(name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    var email=document.forms['myForm']["studentEmail"].value;
    if(email.length>20){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    return returnval;
}

function ageCalculator(){
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput==''){
        document.getElementsByClassName("nameerror").innerHTML = "*Choose a date!";
        return false;
    }
    else{
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        return document.getElementById("Age").value=age + " years";
    }
}
