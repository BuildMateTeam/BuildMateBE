document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");
    const fileCard = document.getElementById("fileCard");

    openBtn.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", () => {

        if(fileInput.files.length === 0) return;

        const file = fileInput.files[0];

        const sizeKB = (file.size / 1024).toFixed(2);

        fileCard.innerHTML = `
            <h2>📄 ${file.name}</h2>
            <p>📦 ${sizeKB} KB</p>
            <p>🟢 Ready to parse</p>
        `;

    });

    document.getElementById("aboutBtn").addEventListener("click", () => {

        alert(
`🧱 BuildMate BE

Version : v0.3 Alpha

Made with ❤️`
        );

    });

});
