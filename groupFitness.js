function inputSubmit(){
	var monday = [];
	for (i=0; i < 5; i++){
		var meal = document.getElementById(i).value;
		monday.push(meal);
	}
	var tuesday = []
	for (i=5; i < 10; i++){
		var meal = document.getElementById(i).value;
		tuesday.push(meal);
	}
	var wednesday = [];
	for (i=10; i < 15; i++){
		var meal = document.getElementById(i).value;
		wednesday.push(meal);
	}
	var thursday = [];
	for (i=15; i < 20; i++){
		var meal = document.getElementById(i).value;
		thursday.push(meal);
	}
	var friday = [];
	for (i=20; i < 25; i++){
		var meal = document.getElementById(i).value;
		monday.push(meal);
	}
	console.log(monday);
	console.log(tuesday);
}
