// =====================================
// BuildMate BE
// File Module v0.6.2 Stable
// =====================================

function initializeFileModule() {

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");

    // Chống gắn event nhiều lần
    openBtn.onclick = null;
    fileInput.onchange = null;

    openBtn.onclick = function () {

        // Reset để chọn lại cùng file vẫn hoạt động
        fileInput.value = "";

        fileInput.click();

    };

    fileInput.onchange = function () {

        const file = fileInput.files[0];

        if (!file) {

            setStatus("🟡 No file selected", "loading");
            resetFileInfo();

            return;

        }

        if (!file.name.toLowerCase().endsWith(".mcstructure")) {

            setStatus("❌ Invalid file", "error");
            resetFileInfo();

            return;

        }

        setStatus("🟡 Reading structure...", "loading");

        updateFileInfo(file);

        const structure = parseStructure(file);

        if (typeof updateStructureInfo === "function") {

            updateStructureInfo(structure);

        }

        console.table(structure);

        setTimeout(function () {

            setStatus("🟢 Ready", "success");

        }, 200);

    };

}
