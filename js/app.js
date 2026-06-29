// =====================================
// BuildMate BE
// app.js
// Version 0.5 Foundation
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🧱 BuildMate BE Started");

    // Khởi tạo giao diện
    resetFileInfo();

    setStatus("🟢 Waiting for structure...", "success");

    // Khởi tạo hệ thống đọc file
    initializeFileModule();

    // Nút About
    document
        .getElementById("aboutBtn")
        .addEventListener("click", () => {

            alert(
`🧱 BuildMate BE

Version: v0.5 Foundation

Developer:
GiaHuy + ChatGPT ❤️

Next:
NBT Reader`
            );

        });

});
