fetch("https://panjs.com/ywc.json")
.then(response => response.json())
.then(data => {
    for(property in data) {
        const li = document.createElement("li");
        li.innerText = data[property];
        document.querySelector("#result").appendChild(li);
    }
})
.catch(err => console.log(err));

// TODO: Change syntax to support older browser