// app/darkmode.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-darkmode-navbar");

    toggleBtn.addEventListener("click", () => {
        // Alternar clase dark-mode en body
        document.body.classList.toggle("dark-mode");

        // Alternar carga del CSS oscuro
        let darkCss = document.getElementById("darkmode-css");
        if (!darkCss) {
            darkCss = document.createElement("link");
            darkCss.rel = "stylesheet";
            darkCss.href = "darkmode.css";
            darkCss.id = "darkmode-css";
            document.head.appendChild(darkCss);
        } else {
            darkCss.remove();
        }
    });
});
