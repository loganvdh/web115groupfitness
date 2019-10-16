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
	console.log(monday);
	console.log(tuesday);
}