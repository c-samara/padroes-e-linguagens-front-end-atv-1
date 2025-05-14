function getUserEmailAndShowMsg () {

    let user_email = document.getElementById("email_input").value 
    alert(`Obrigada! Em breve você recebrá informaçoes no endereço ${user_email}`)
}

function getCredentialsAndValidateLogin (){
    var valid_credentials = [
        {user: "Samara", password: "123"},
        {user: "Maria", password: "456"},
        {user: "Joao", password:"789"}

    ]

    let user_login = document.getElementById("user_login").value
    let user_password = document.getElementById("user_password").value

    
    let isValid=valid_credentials.some(cred =>
        cred.user === user_login && cred.password === user_password
    )


    if (isValid){
        console.log("credenciais validas");
        document.getElementById("get_more_information").innerHTML=
            `<h2> Login realizado com sucesso! </h2> Bem vindo(a) ${user_login}`;
            
    }
    else{
        console.log("credenciais invalidas");
        document.getElementById("get_more_information").innerHTML=
            `<h2> Credenciais inválidas </h2>`;

    }

}