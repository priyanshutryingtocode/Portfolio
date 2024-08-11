
onclick
{

    var rn1 = Math.floor(Math.random()*6) + 1;
    var rn2 = Math.floor(Math.random()*6) + 1;

    var img1 = document.getElementById("img1").src = "./images/dice"+ rn1 +".png";
    var img2 = document.getElementById("img2").src = "./images/dice"+ rn2 +".png";

    if (rn1 > rn2)
    {
        document.querySelector("h1").textContent = "Player 1 wins! 🚩";
    }

    else if (rn1 < rn2)
    {
        document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    }

    else
    {
        document.querySelector("h1").textContent = "Draw";
    }

}