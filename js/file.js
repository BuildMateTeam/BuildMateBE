// =====================================
// BuildMate BE File Module
// Version 0.5 Foundation
// =====================================

function initializeFileModule(){

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");

    openBtn.addEventListener("click", () => {

        fileInput.click();

    });

    fileInput.addEventListener("change", () => {

        if(fileInput.files.length === 0){

            setStatus("🟡 No file selected","loading");

            resetFileInfo();

            return;

        }

        const file = fileInput.files[0];

        setStatus("🟡 Loading file...","loading");

        setTimeout(() => {

            updateFileInfo(file);

            setStatus("🟢 Ready","success");

        },300);

    });

}
