//function to move from left to right
function myMoveRight()
{
	var elem=document.getElementById("animate");    
  var picture=document.getElementById("image");
  var quoteColor=document.getElementById("quote");
  var containerColor=document.getElementById("container");
	var pos=0;
	var id=setInterval(frame,3);
  picture.src = "images/hardwork1.jpg";
  quoteColor.style.color="#5f4b8bff";
  containerColor.style.backgroundColor="#e69a8dff";
	function frame(){

       if(pos==350){
      clearInterval(id);
      myMoveDown();
       }
        else{
        	pos++;
        	elem.style.left=pos+"px";
        }
	}
} 

//function to move from top to bottom
function myMoveDown()
{
  var elem=document.getElementById("animate");
  var picture=document.getElementById("image");
  var quoteColor=document.getElementById("quote");
  var containerColor=document.getElementById("container");
  var pos=0;
  var id=setInterval(frame,3);
  image.src = "images/hardwork2.jpg";
  quoteColor.style.color="#f2a104";
  containerColor.style.backgroundColor="#192e5b";
  function frame(){

       if(pos==350){
      clearInterval(id);
      myMoveLeft();
       }
        else{
          pos++;
          elem.style.top=pos+"px";
        }
  }
}

//function to move from left to right
function myMoveLeft()
{
  var elem=document.getElementById("animate");
  var picture=document.getElementById("image");
  var quoteColor=document.getElementById("quote");
  var containerColor=document.getElementById("container");
  var pos=350;
  var id=setInterval(frame,3);
  image.src = "images/hardwork3.jpg";
  quoteColor.style.color="#daa2da";
  containerColor.style.backgroundColor="#93a806";
  function frame(){

       if(pos==0){
      clearInterval(id);
      myMoveUp();
       }
        else{
          pos--;
          elem.style.left=pos+"px";
        }
  }
}

//function to move from bottom to top
function myMoveUp()
{
  var elem=document.getElementById("animate");
  var picture=document.getElementById("image");
  var quoteColor=document.getElementById("quote");
  var containerColor=document.getElementById("container");
  var pos=350;
  var id=setInterval(frame,3);
  image.src = "images/hardwork4.jpg";
  quoteColor.style.color="#f1f3f2";
  containerColor.style.backgroundColor="#c0334d";
  function frame(){

       if(pos==0){
      clearInterval(id);
      myMoveRight();
       }
        else{
          pos--;
          elem.style.top=pos+"px";
        }
  }
}

