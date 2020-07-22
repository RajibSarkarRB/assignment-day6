
var c=["blue","green","yellow","Red","Grey","Yellowgreen","violet","Brown","pink"];
function changeColor(){
      var randomcolor = c[Math.floor(Math.random() * c.length)];
      document.body.style.backgroundColor = randomcolor;
          
      }
function start(){
           setInterval(changeColor, 5000);
}

start()
