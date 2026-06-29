// =====================================
// BuildMate BE UI Module
// Version 0.5 Foundation
// =====================================

// Cập nhật trạng thái
function setStatus(text, type = "success") {

    const status = document.getElementById("status");

    status.textContent = text;

    status.className = type;
}

// Hiển thị thông tin file
function updateFileInfo(file) {

    document.getElementById("fileName").textContent =
        "📄 " + file.name;

    document.getElementById("fileSize").textContent =
        "📦 " + formatFileSize(file.size);

    document.getElementById("fileType").textContent =
        "📁 " + getExtension(file.name);
}

// Reset giao diện
function resetFileInfo() {

    document.getElementById("fileName").textContent =
        "No file selected";

    document.getElementById("fileSize").textContent =
        "--";

    document.getElementById("fileType").textContent =
        "--";
}

// Chuyển byte sang KB / MB
function formatFileSize(bytes){

    if(bytes < 1024){

        return bytes + " B";

    }

    if(bytes < 1024 * 1024){

        return (bytes / 1024).toFixed(2) + " KB";

    }

    return (bytes / 1024 / 1024).toFixed(2) + " MB";

}

// Lấy đuôi file
function getExtension(filename){

    const index = filename.lastIndexOf(".");

    if(index === -1){

        return "Unknown";

    }

    return filename.substring(index);

}
