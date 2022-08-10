function validarCredenciales(u,p,jsonData)
{
    for (let el of jsonData) {
        if(el.username ===u && el.id === p) return true;
    }
    return false;
}


function verify(jsonData)
{
    username = document.getElementById("user").value;
    password = parseInt(document.getElementById("pass").value);

    if (validarCredenciales(username, password, jsonData))
    {
        document.cookie = "login_state=true";
        if(location.href != 'home.html')
        {
            location.replace('home.html');
        }
    
    }
    else
    {
        alert("Usuario/contraseña invalido")
    }

}
  
function fetchInfo()
{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => verify(json))
        .catch(error => alert(error));
}

