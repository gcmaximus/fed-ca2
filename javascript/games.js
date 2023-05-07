/* function is used to generate and show a random slide on the page when it is launched, then 
    change the slide after every 3 seconds in a certain order */
let caption = new Array(5);
caption[1] = "Counter Strike: Global Offensive"; // This image is from https://esportsjunkie.com/2019/05/17/heres-what-you-should-know-about-csgo
caption[2] = "Rainbow Six Siege"; // This image is from https://www.ubisoft.com/en-us/help/game/rainbow-six-siege
caption[3] = "Valorant"; // This image is from https://playvalorant.com/en-us/news/
caption[4] = "Minecraft"; //This image is from https://www.theverge.com/2020/5/18/21262045/minecraft-sales-monthly-players-statistics-youtube
let slideNo = Math.floor(Math.random() * (caption.length - 1)) + 1;
gameShown();
setInterval(gameShown, 3000);

function gameShown() {
    if (slideNo != (caption.length - 1)) {
        ++slideNo
    } else {
        slideNo = 1
    }
    document.getElementById("game").src = "images/game" + slideNo + ".jpg";
    document.getElementById("gameName").textContent = getGameName(slideNo);
}

function getGameName(game) {
    return caption[game];
}