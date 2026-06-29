document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openBtn");
    const fileInput = document.getElementById("fileInput");

    openBtn.addEventListener("click", function () {

        fileInput.click();

    });

    fileInput.addEventListener("change", function () {

        if(this.files.length==0) return;

        const file=this.files[0];

        alert(
`📄 ${file.name}

📦 ${(file.size/1024).toFixed(2)} KB

✅ Ready to parse`
);

    });

});
