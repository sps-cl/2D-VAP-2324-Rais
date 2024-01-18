let platno = 
document.getElementById("platno");
let kontext =
platno.getContext("2d");

let stredKruhuY = 100;
let stredKruhuX = 100;

document.addEventListener("mousemove", (event) => {
    let rect = platno.getBoundingClientRect();
    stredKruhuX = event.clientX - rect.x;
    stredKruhuY = event.clientY - rect.y;
})



function nakresli(){
    kontext.clearRect(0, 0, platno.width, platno.height);
    kontext.beginPath();
    kontext.arc(stredKruhuX, stredKruhuY, 50, 0, Math.PI * 2)
    kontext.fill();
    kontext.fillStyle = "green";
    kontext.fillRect(300, 300, 100, 100);
    requestAnimationFrame(nakresli);
}

nakresli();


