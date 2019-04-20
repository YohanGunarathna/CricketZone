// JavaScript Document
<script>
	function getSelectedValue( selectList )
{ 
	return selectList[ selectList.selectedIndex ].value; 
}

function getSelectedText( selectList )
{ 
	return selectList.options[ selectList.selectedIndex ].text;
}
	
	function checkOption(formRef)
{
	
	var x=getSelectedValue(formRef.bouqetOption);
	console.log(x);
	switch(x)
		{
				
			case "ball":
				{
					var price=[500,450,550];
					document.getElementById("img1").src="kookaura.jpg";
					document.getElementById("img2").src="ca ball.jpg";
					document.getElementById("img3").src="sas ball.jpg";
					document.getElementById("kokabura").innerHTML='RS'+price[0];
					document.getElementById("ca").innerHTML='RS'+price[1];
					document.getElementById("sas").innerHTML='RS'+price[2];
					
					break;
					
				}
				
			case "bat":
				{
					var price=[4500,6000,3500];
					document.getElementById("img1").src="kokabura bat.jpg";
					document.getElementById("img2").src="ca bat.jpg";
					document.getElementById("img3").src="sas bat .jpg";
					document.getElementById("kokabura").innerHTML='RS'+price[0];
					document.getElementById("ca").innerHTML='RS'+price[1];
					document.getElementById("sas").innerHTML='RS'+price[2];
					break;
				}
			case "pad":
				{
					var price=[2700,2500,1500];
					document.getElementById("img1").src="kok pad.jpg";
					document.getElementById("img2").src="ca pad.jpg";
					document.getElementById("img3").src="sas pad.jpg";
					document.getElementById("kokabura").innerHTML='RS'+price[0];
					document.getElementById("ca").innerHTML='RS'+price[1];
					document.getElementById("sas").innerHTML='RS'+price[2];
					break;
				}
				
		}
}
	
	
	
	</script>