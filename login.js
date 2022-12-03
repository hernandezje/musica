const createUser = () =>{
    const user = {
        username: "johana",
        password: "1234"
    }
    
    let users = [user];
    return users;
}

function loadUser(){
    let user =  createUser();
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users",JSON.stringify(user));
    }
}


const createAnotherUser = (userParam, passParam)=>{
    const user = {
        username: userParam,
        password: passParam
    }
    return user;
}

const userLogeado = () =>{
    document.getElementById("userSession").style.visibility = 'visible';
}

const logearUser = () =>{
    let name = document.querySelector("#formUserName").value;
    let pass = document.querySelector("#formPass").value;
    let user1 = createAnotherUser(name,pass);
    let users = JSON.parse(localStorage.getItem("users"));
    let verificarUser =  false;
    users.find((user) => {
        if (user.username === user1.username) {
            verificarUser = true;
        }
    })
    if(verificarUser === true){
        console.log("usuario logeado");
        userLogeado();
    }else{
        console.log("no existe usuario")
    }
    return verificarUser;
}

document.querySelector("#btnLogin").addEventListener('click',(event)=>{
    event.preventDefault();
    logearUser();
})
