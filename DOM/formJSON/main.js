const button = document.querySelector(".form-btn");
const inputs = document.querySelectorAll(".form-input");
const output = {};

inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
        output[event.target.name] = event.target.value;
    });
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    let json = JSON.stringify(output);
    alert(json);
});
