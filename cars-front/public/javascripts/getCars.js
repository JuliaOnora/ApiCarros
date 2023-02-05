function getAllCars() {
    fetch("http://localhost:8080/cars", { method: "GET" })
        .then((res) => {
            return res.json();
        }).then((cars) => {
            document.querySelector("tbody")
                .innerHTML = cars.map((cars) => {
                    return `<tr>
                                <th scope="row">${cars.id}</th>
                                <td>${cars.brand}</td>
                                <td>${cars.category}</td>
                                <td>${cars.color}</td>
                                <td>${cars.value}</td>
                                </tr>`
                }).join(" ")
        }).catch(() => console.log("Show error"))
        .catch(() => console.log("Format to json error"))
}

getAllCars();