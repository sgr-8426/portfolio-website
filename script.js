document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Click Me!";

    button.addEventListener("click", () => {
        alert("Thanks for visiting my portfolio!");
    });

    document.body.appendChild(button);
});
