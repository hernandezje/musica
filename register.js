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

const addNewUserToLocalStorge  = () =>{
    let name = document.querySelector("#formUserName").value;
    let pass = document.querySelector("#formPass").value;
    let user1 = createAnotherUser(name, pass);
    if (!localStorage.getItem("users")) {
        let users1 = [user1];
        localStorage.setItem("users",JSON.stringify(users1));
    }else{
        let users = JSON.parse(localStorage.getItem("users"));
        let verificarUser = false;
        users.find((user) => {
            if (user.username === user1.username) {
                verificarUser = true;
            }
        })
        if(verificarUser == true){
            console.log("usuario ya existente");
        }else{
            users.push(user1);
            localStorage.setItem("users", JSON.stringify(users));
            console.log("usuario fue cargado");
        }
    }
}

document.querySelector("#btnRegister").addEventListener('click',(event)=>{
    event.preventDefault();
    addNewUserToLocalStorge();
})
