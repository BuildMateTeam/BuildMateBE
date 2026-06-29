document.addEventListener("DOMContentLoaded",()=>{

const openBtn=document.getElementById("openBtn");

const aboutBtn=document.getElementById("aboutBtn");

const fileInput=document.getElementById("fileInput");

const status=document.getElementById("statusText");

const fileName=document.getElementById("fileName");

const fileSize=document.getElementById("fileSize");

openBtn.onclick=()=>{

fileInput.click();

};

fileInput.onchange=()=>{

if(fileInput.files.length===0)return;

const file=fileInput.files[0];

status.innerHTML="🟢 File loaded successfully";

fileName.innerHTML="📄 "+file.name;

fileSize.innerHTML="📦 "+(file.size/1024).toFixed(2)+" KB";

};

aboutBtn.onclick=()=>{

alert(
`🧱 BuildMate BE

Version : v0.4 Alpha

Developer :
GiaHuy + ChatGPT ❤️`
);

};

});
