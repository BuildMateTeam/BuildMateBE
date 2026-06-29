// =====================================
// BuildMate BE File Module
// Version 0.5.1 Hotfix
// =====================================

function initializeFileModule() {

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");

    // Mở trình chọn file
    openBtn.addEventListener("click", () => {
        fileInput.click();
    });

    // Khi chọn file
    fileInput.addEventListener("change", () => {

        if (!fileInput.files || fileInput.files.length === 0) {
            setStatus("🟡 No file selected", "loading");
            resetFileInfo();
            return;
        }

        const file = fileInput.files[0];

        // Kiểm tra đúng định dạng
        if (!file.name.toLowerCase().endsWith(".mcstructure")) {

            setStatus("❌ Invalid file", "error");
            resetFileInfo();

            // Cho phép chọn lại cùng file
            fileInput.value = "";

            return;
        }

        setStatus("🟡 Reading structure...", "loading");

        updateFileInfo(file);

        setTimeout(() => {

            setStatus("🟢 Ready", "success");

            // Reset để lần sau chọn lại cùng file vẫn nhận
            fileInput.value = "";

        }, 200);

    });

}
