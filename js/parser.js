// =====================================
// BuildMate BE
// parser.js
// Version 0.6 Alpha
// =====================================

/*
 * Đây là module đọc file .mcstructure
 * Hiện tại mới là nền móng.
 * Sau này sẽ đọc NBT thật.
 */

function parseStructure(file) {

    console.log("================================");
    console.log("BuildMate BE Parser");
    console.log("Reading:", file.name);
    console.log("Size:", file.size, "bytes");
    console.log("================================");

    return {

    name: file.name,

    size: file.size,

    loaded: true,

    version: "Unknown",

    width: 64,

    height: 32,

    length: 64,

    blocks: 10542,

    palette: 89

};
