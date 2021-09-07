function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="pass123")
    {
        alert("login successful");
        return false;
    }
    else
    {
        alert("login fail");
    }
}
