function inputSubmit(){
	var monday = [];
	for (i=0; i < 5; i++){
		var meal = document.getElementById(i).value;
		monday.push(meal);
	}
	var tuesday = [];
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
		friday.push(meal);
	}
	var saturday = [];
	for (i=25; i < 30; i++){
		var meal = document.getElementById(i).value;
		saturday.push(meal);
	}
	var sunday = [];
	for (i=30; i < 35; i++){
		var meal = document.getElementById(i).value;
		sunday.push(meal);
	}
    
    var weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", 
                        "Friday", "Saturday", "Sunday"];
    var weekdaySchedules = [monday, tuesday, wednesday, thursday,
                            friday, saturday, sunday];
    var mealnames = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];
                            
    // creating an unordered list of weekdays
    document.write("<ul>");
    for(i=0; i < weekdayNames.length; i++){
        document.write("<p><li><b>" + weekdayNames[i] + "</b>");
        
        // creating an inner unordered list of meals
        document.write("<ul>");
        for (j=0; j < mealnames.length; j++){
            if (weekdaySchedules[i][j] != ""){ // ignoring empty meal values
                document.write("<li>");
                document.write(mealnames[j] + ": " + weekdaySchedules[i][j]);
                document.write("</li>");
            }
        }
        document.write("</ul>");
        document.write("</li></p>");
    }
    document.write("</ul>");
}

function textclear(){
    for (i=0; i<34; i++){
        document.getElementById(i).value = "";
    }
}

function _print(){
    // toggle button visibility when printing
    var buttons = document.getElementById("buttons");
    buttons.style.display = "none";
    window.print();
    buttons.style.display = "block";
}
