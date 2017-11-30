
var canvasBody = document.querySelector('canvas');
	var canvas = canvasBody.getContext('2d');	
	
	var my;
	
	
	document.getElementById('color').oninput = function() {
			
			my = this.value;
			
		};

particles = [],

	
Particle = function(Xpos, Ypos){
				this.x = Xpos;
				this.y = Ypos;
					canvas.beginPath();
					canvas.arc(this.x, this.y, 5, 0, Math.PI*2);
					canvas.closePath();
					canvas.fillStyle = my;
					canvas.fill();
				
				
			};




			communicatePoints = function(point1, father) { 
					
					for (var i = 0; i < father.length; i++) {
						
						canvas.strokeStyle = my
						canvas.moveTo(point1.x, point1.y);
						canvas.lineTo(father[i].x, father[i].y );
						canvas.closePath();
						canvas.stroke();


					}
						
					
																		
						

				
			
			};

	
	canvasBody.addEventListener("click", function(e){
			
			particles.push(new Particle(e.offsetX, e.offsetY));
				
			console.log(particles.length);
			
			
			var a = particles.length -1;
			
			

			communicatePoints(particles[a], particles );

			

		
		
	
	});
	
	
	