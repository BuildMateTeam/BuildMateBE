// =====================================
// BuildMate BE File Module
// Version 0.6 Alpha
// =====================================

function initializeFileModule() {

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");

    openBtn.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", () => {

        if (!fileInput.files || fileInput.files.length === 0) {

            setStatus("🟡 No file selected", "loading");
            resetFileInfo();
            return;

        }

        const file = fileInput.files[0];

        if (!file.name.toLowerCase().endsWith(".mcstructure")) {

            setStatus("❌ Invalid file", "error");
            resetFileInfo();

            fileInput.value = "";

            return;

        }

        setStatus("🟡 Reading structure...", "loading");

        updateFileInfo(file);

        // Gọi parser
        const structure = parseStructure(file);

        console.log("Structure Data:");
        console.log(structure);

        setTimeout(() => {

            setStatus("🟢 Ready", "success");

            fileInput.value = "";

        }, 200);

    });

}
