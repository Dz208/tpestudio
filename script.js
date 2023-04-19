const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/users" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (users) {

        //Mostrar por consola la respuesta de la API
        console.log(users)

        //Mostrar respuesta de API en un componente HTML
        //document.getElementById("app").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        users.forEach((user) => {

            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`Nombre: ${user.name}, Ciudad: ${user.address.city}, Email: ${user.email}`)
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);

    }
    )
