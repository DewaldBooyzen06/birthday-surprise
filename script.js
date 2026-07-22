const balloons = document.getElementById("balloons");
const hearts = document.getElementById("hearts");
const stars = document.getElementById("stars");

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random()*100 + "%";

    balloon.style.animationDuration =
        8 + Math.random()*8 + "s";

    balloon.style.fontSize =
        35 + Math.random()*25 + "px";

    balloons.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },16000);

}

setInterval(createBalloon,800);

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration =
        6 + Math.random()*5 + "s";

    heart.style.fontSize =
        18 + Math.random()*25 + "px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,900);

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

const startBtn=document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

    alert("Almost there... 🎉");

});