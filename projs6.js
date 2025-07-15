const inputBox = document.getElementById("varsh");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnText = button.textContent;

        if (btnText === "DEL") {
            inputBox.value = inputBox.value.slice(0, -1); // last char delete
        } else if (btnText === "AC") {
            inputBox.value = ""; // clear input
        } else if (btnText === "=") {
            try {
                inputBox.value = eval(inputBox.value); // calculate result
            } catch {
                inputBox.value = "Error";
            }
        } else {
            inputBox.value += btnText; // append button text
        }
    });
});
