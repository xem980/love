h.addEventListener("click", clickHeart);
h.addEventListener("touchstart", clickHeart);

function clickHeart(){
  count++;
  document.getElementById("score").innerText = count + " / " + target;
  h.remove();

  if(count>=7 && !bossSpawned){
    spawnBoss();
    bossSpawned=true;
  }

  if(count>=target){
    winGame();
  }
}
b.addEventListener("click", bossClick);
b.addEventListener("touchstart", bossClick);

function bossClick(){
  winGame(true);
  b.remove();
}