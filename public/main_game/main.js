// var player1=Math.random();
// var player2=Math.random();
var min = 1;
var max = 6;
var player1=Math.floor(Math.random() * (max - min) + min);
var player2=Math.floor(Math.random() * (max - min) + min);

switch (player1) {
    case 1:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/one.png")
        break;
    case 2:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/two.png")
        break;
    case 3:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/three.png")
        break;
    case 4:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/four.png")
        break;    
    case 5:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/five.png")
        break;
    case 6:
        var image=document.querySelectorAll("img")[0];
        image.setAttribute("src","/main_game/images/six.png")
        break;
    default:
        break;
}

switch (player2) {
    case 1:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/one.png")
        break;
    case 2:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/two.png")
        break;
    case 3:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/three.png")
        break;
    case 4:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/four.png")
        break;    
    case 5:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/five.png")
        break;
    case 6:
        var image=document.querySelectorAll("img")[1];
        image.setAttribute("src","/main_game/images/six.png")
        break;
    default:
        break;
}
    

if(player1>player2){
    var a=document.querySelector("h1");
    a.innerHTML="Player 1 wins"
}
else if(player2>player1){
    var a=document.querySelector("h1");
    a.innerHTML="Player 2 wins"
}
else{
    var a=document.querySelector("h1");
    a.innerHTML="Draw"
}