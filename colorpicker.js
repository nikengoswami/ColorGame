var numsq=6;
var colors = generate(numsq);
var squares=document.querySelectorAll(".square");
var mess=document.querySelector("#mess");
var pickedColor=pickColor();
var colord = document.getElementById("colord");
var h1=document.querySelector("h1");
colord.textContent=pickedColor;
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsq=3;
	colors=generate(numsq);
	pickedColor=pickColor();
	colord.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});
	hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsq=6;
	colors=generate(numsq);
	pickedColor=pickColor();
	colord.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

reset.addEventListener("click",function(){
	//generate new
	colors=generate(numsq);
	//pick new random color
	pickedColor=pickColor();
	colord.textContent = pickedColor;
	//for
	this.textContent="New Colors";
	mess.textContent="";
	for(var i=0 ;i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
		h1.style.backgroundColor="steelblue";
	}

});

for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor=colors[i]; 
			//add click listeners
			squares[i].addEventListener("click",function(){
				//grab color of clicked square
				var clickedColor=this.style.backgroundColor;
				//compare color to picked color
				if(clickedColor=== pickedColor){
					mess.textContent="Correct!";
					changeColors(clickedColor);
					h1.style.backgroundColor=clickedColor;
					reset.textContent="play Again?";
							
				}else{
					this.style.backgroundColor="#232323";
					mess.textContent="Try Again";
				}
		});
}

function changeColors(color){
	//loop through squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){

	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generate(num){
	//make array
	var arr=[];
	//add num colors
	for(var i=0;i<num;i++){
		//random number push to array
		arr.push(randomcolor());
	}
	//return
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	//"rgb(r,g,b)"
	return "rgb(" + r + ", "+g+", "+b+")";
}










