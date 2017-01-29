//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		},
		{
			city: 'Chicago',
			population: 2719000
		},
		{
			city: 'Minneapolis',
			population: 400070
		},
		{
			city: 'Eau Claire',
			population: 67545
		},
		{
			city: 'New York City',
			population: 8406000
		},
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    //function calls to create City Cize column
    addColumns(cityPop);
		//function call to create random table colors and popups
    addEvents();
};

//This will add a column "City Size" to the table
//displaying the size of each city based on population
function addColumns(cityPop){
    //Computes the row numbers
    $('tr').each(function(i){
      //places the City Size column label into row 0
    	if (i == 0){
    		$(this).append('<th>City Size</th>'); //fixed "append" spelling
    	}

      // Places a size ranking based on the population of the city into the
      // City Size Column
      else {
        //Creates citySize variable
    		var citySize;
        //Small raning assigned to citySize if <100000
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
        //Medium ranking if < 500000
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium'; //capital "S" was changed
        //otherwise large ranking
    		} else {
    			citySize = 'Large';
    		};
        //Displays the rankings
    		$(this).append('<td>' + citySize + '</td>'); //added "(this)"
    	};
    });
};
//This method changes the color of the table everytime it is moused over
//and a popup is created everytime a table element is clicked
function addEvents(){
  //Triggers when the table is moused over
	$('table').mouseover(function(){  //removed #
   //variable created to hold the rgb value
		var color = "rgb(";
    //A loop to create the random 3 digit RGB color value between 0-255
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;  //the variable random, not string "random"
			if (i<2){
				color += ",";
      //closes when appropriate amount of values are choosen
			} else {
				color += ")";
		};
    //Table is given a color based on the css of the RGB value
		$(this).css('color', color);
	};  //removed ")"

  //The popup function
	function clickme(){
    //The popup
		alert('Hey, you clicked me!');
	};
  //The popup is displayed when the user clicks on the table
	$('table').on('click', clickme);
}); //added this
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
