let isDark = true; // keep track of current mode

function showMessage() {
    if (isDark) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "#2c3e50"; // dark background
        document.body.style.color = "#ecf0f1"; // light font color
    }
    isDark = !isDark; // flip the state
}
function showMessage() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "secondpage.html";
    }, 2000); // ⬅️ Changed to 2000ms (2 seconds)
}