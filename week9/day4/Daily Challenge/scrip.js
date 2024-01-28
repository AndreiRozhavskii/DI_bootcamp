
function handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("myForm");
    var data = new FormData(form);
    var object = Object.fromEntries(data.entries());
    var json = JSON.stringify(object);
    var paragraph = document.createElement("p");

    paragraph.textContent = json;
    document.body.appendChild(paragraph);
    }
    document.getElementById("myForm").addEventListener("submit", handleSubmit);