document.addEventListener("DOMContentLoaded", checkLoginState);
function checkLoginState()
{  
    if(getCookie("login_state") !='true')
    {
        location.replace('index.html');
    }
}

function getCookie(name) 
{
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}