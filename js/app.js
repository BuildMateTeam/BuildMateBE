// =====================================
// BuildMate BE
// app.js
// Version 0.6 Stable
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🧱 BuildMate BE v0.6 Stable");

    // Reset giao diện
    resetFileInfo();

    updateStructureInfo({
        width: "?",
        height: "?",
        length: "?",
        blocks: "?",
        palette: "?"
    });

    setStatus("🟢 Waiting for structure...", "success");

    // Khởi động module chọn file
    initializeFileModule();

    // Nút About
    document
        .getElementById("aboutBtn")
        .addEventListener("click", () => {

            alert(
`🧱 BuildMate BE

Version : v0.6 Stable

Developer
HoangHuy 🤝
ChatGPT 🤖

Status
Foundation Complete

Next Target
Read .mcstructure
Viewer 3D`
            );

        });

});
