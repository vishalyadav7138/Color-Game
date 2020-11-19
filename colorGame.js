var numSquares=6;
var colors=[];
var pickedColor=pickColor();
var squares =document.querySelectorAll(".squares");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();
	setupSquares(); 
reset();
}

function setupModeButtons()
{
	  for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
        this.textContent === "Easy" ? numSquares=3: numSquares=6;
        reset();
	});
}

}

function setupSquares()
{
	for(var i=0;i<squares.length;i++)
{
// add clicklistener to squares
    squares[i].addEventListener("click", function(){
    	//grab color of clicked Square
    	var clickedColor= this.style.background;

    	if(clickedColor===pickedColor)
    	{
    		messageDisplay.textContent="Correct!";
    		changeColors(clickedColor);
    		h1.style.background=clickedColor;
    		resetButton.textContent="Play Again?";
    	} 
    	else
    	{
    		messageDisplay.textContent="Try Again!";
    		this.style.background="#232323";
    		// resetButton.textContent="New Colors";
    	}
    });

}

}

function reset()
{
	 colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";

	for(var i=0;i<squares.length;i++)
{
     if(colors[i])
     {
     	squares[i].style.background=colors[i];
     	squares[i].style.display="block";
     }
     else
     {
     	squares[i].style.display="none";
     }
	// squares[i].style.background=colors[i];
}
   h1.style.background="steelblue";
}

 
resetButton.addEventListener("click", function(){
	reset();
});

 
function changeColors(color){

	for(var i=0;i<squares.length;i++)
	{
		// change each color to match given color
		squares[i].style.background=color;
	}
}
 
function pickColor() {
	// body...
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
  var arr=[]
   // add num random colors
   for(var i=0;i<num;i++)
   {
    // get random color and push in arr
     arr.push(randomColor());
   }

  return arr;
}

function randomColor(){
      
      var r=Math.floor(Math.random()*256);

      var g=Math.floor(Math.random()*256);

      var b=Math.floor(Math.random()*256);

      return "rgb(" + r+ "," +" " +g+","+" "+b+")";
}