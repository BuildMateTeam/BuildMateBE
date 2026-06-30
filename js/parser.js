// =====================================
// BuildMate BE
// parser.js
// Version 0.6 Stable
// =====================================

function parseStructure(file) {

    return {

        name: file.name,

        size: file.size,

        extension: file.name.split(".").pop(),

        loaded: true,

        width: "?",

        height: "?",

        length: "?",

        blocks: "?",

        palette: "?",

        created: new Date().toLocaleString()

    };

}
