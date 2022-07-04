function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

document.getElementById("logout").addEventListener( "click" , function (){

    var requestBody = {
        "sessionkey" : getCookie("ncs_api_key") ,
        "username" : getCookie("username")
    }

    $.ajax({
        url : "http://localhost:9999/user/logout",
        data : JSON.stringify( requestBody ),
        type : 'post',
        dataType : 'json',
        contentType: "application/json",
        cache : false,
        success: function(response){
            console.log(response);

            if(response.status === "success"){

                eraseCookie("ncs_api_key");
                eraseCookie("username");
                location.href = "/ekart/login.html";

            } else {
                alert( response.message  );
            }
        }
    });



});