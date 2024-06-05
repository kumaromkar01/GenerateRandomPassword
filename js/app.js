const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const special = "!@#$%^&*()";
const totalLength = document.getElementById('total-char').value;
const boxes = document.querySelectorAll('input[type="checkbox"]');
var password = "";
const genPass = ()=>{
    password="";
    while(password.length < totalLength){
        if(password.length>=totalLength) break;
        if(boxes[0].checked)  password+=(cap[Math.floor(Math.random()*cap.length)]);
        if(password.length>=totalLength) break;
        if(boxes[1].checked) password+=(small[Math.floor(Math.random()*small.length)]);
        if(password.length>=totalLength) break;
        if(boxes[2].checked) password+=(number[Math.floor(Math.random()*number.length)]);
        if(password.length>=totalLength) break;
        if(boxes[3].checked) password+=(special[Math.floor(Math.random()*special.length)])
        if(password.length>=totalLength) break;
    }
    document.getElementById('pass-box').innerText=password;
}
document.getElementById('btn').addEventListener('click',
    ()=>{
        genPass();
        console.log(password);
        navigator.clipboard.writeText(password);
    }
)














































