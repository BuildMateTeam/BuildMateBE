// Hiển thị thông tin Structure
function updateStructureInfo(data){

    document.getElementById("structureSize").textContent =
        "📐 Size : " +
        data.width + " × " +
        data.height + " × " +
        data.length;

    document.getElementById("blockCount").textContent =
        "🧱 Blocks : " + data.blocks;

    document.getElementById("paletteCount").textContent =
        "🎨 Palette : " + data.palette;

}
