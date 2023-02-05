// Recupera acionamento do botão
const btnCadastrar = document.querySelector("button");

btnCadastrar.onclick = () => {
    const fields = document.querySelectorAll("input");
    const data = {};

    fields.forEach((field) => {
        data[field.id] = field.value;
    });

    fetch("http://localhost:8080/cars", { method: "POST",
                                        body: JSON.stringify(data),
                                        headers: new Headers({
                                            "content-type": "application/json"
                                        })
                                     })
    .then((res) =>{
        if (res.ok) {
            location.href = "/cars";
        }
    }).catch(() => console.log("Register error"))
}