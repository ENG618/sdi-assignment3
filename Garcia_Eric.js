//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 3
//Story - Wedding

//Variables
var bride = "Lindsay"
var groom = "Eric"
var occasion = "wedding";
var music	 = [];

//json Data
var bridalParty = {
	"groomsMen":[
		{	firstName: 		"Jack",
			lastName: 		"Hill",
			isBestMan: 		true
		},
		{	firstName: 		"Mark",
			lastName: 		"Twain",
			isBestMan: 		false
		},
		{	firstName: 		"Hunter",
			lastName: 		"White",
			isBestMan: 		false
		},
		{	firstName: 		"Brad",
			lastName: 		"Copper",
			isBestMan: 		false
		}
	], //ends groomsMen
	"bridesMades":[
		{	firstName: 		"Jill",
			lastName: 		"Freeman",
			isMadeOfHoner: 	true
		},
		{	firstName: 		"Kelly",
			lastName: 		"Long",
			isMadeOfHoner: 	false
		},
		{	firstName: 		"Ann",
			lastName: 		"Lee",
			isMadeOfHoner: 	false
		},
		{	firstName: 		"Charlotte",
			lastName: 		"Finn",
			isMadeOfHoner: 	false
		}
	] //end bridesMades
}; //end bridalParty
var guestList = {
	"guests":[
		{	firstName: "John",
			lastName: 	"Anderson" 
		},
		{	firstName: "Jane",
			lastName: 	"Anderson" 	
		},
		{	firstName: "Mike",
			lastName: 	"Smith" 	
		},
		{	firstName: "Ashley",
			lastName: 	"Smith" 	
		},
		{	firstName: "Jacob",
			lastName: 	"Lopez" 	
		},
		{	firstName: "Lesly",
			lastName: 	"Lopez" 	
		},
		{	firstName: "Kane",
			lastName: 	"Sims" 	
		},
		{	firstName: "Janet",
			lastName: 	"Sims" 	
		},
		{	firstName: "Alberto",
			lastName: 	"Hernandez" 	
		},
		{	firstName: "Alicia",
			lastName: 	"Hernandez" 	
		}
	] //end guests
}; //end guestList

//object
var food = {

	"horderves"	: 5.30,
	"entree" 	: 10.50,
	"kidsMeal"	: 5.50,
	"cake"		: 3.18,
	"totalCost"	: function(){ //Method: Accessor (Getter)
		var costOfFood = this.horderves + this.entree + this.kidsMeal + this.cake
		return costOfFood;
	}, //end totalCost method
	"otherEntree" : function (alternateEntree){ //Method: Mutator (Setter)
		this.entree = alternateEntree; 
	}

}; //end food object

var getWalkingOrder = function (couples){
	while (couples > 0){
		couples--
		if (couples > 0){
			console.log ("Next couple")
		}else{
			console.log ("And now for the bride and groom " + groom + " and " + bride + " Garcia!!!!!")
		}// if / else
	}// while loop
	return couples
};

//Main code
console.log ( "My future bride (" + bride + ") and I are planning our " + occasion + ".");

//Bridal party
var bestMan = bridalParty
for (var key in bestMan
.groomsMen){
	if (bestMan
	.groomsMen[key].isBestMan == true){
		console.log ( bestMan.groomsMen[key].firstName + " is the best man." )
	}else{
		console.log ( bestMan.groomsMen[key].firstName + " isn't the best man, but is one of the groomsman.")
	}
}; // end bestMan
var maidOfHonr = bridalParty
for (var key in maidOfHonr.bridesMades){
	if (maidOfHonr.bridesMades[key].isMadeOfHoner == true){
		console.log ( maidOfHonr.bridesMades[key].firstName + " is the Made of Honor." )
	}else{
		console.log ( maidOfHonr.bridesMades[key].firstName + " isn't the Maid of Honor, but is one of the Brides Maids.")
	}
}; // end maidOfHonr
var couples = getWalkingOrder(bridalParty)

// Food cost
console.log ( "The estimated cost of food per person is $" + food.totalCost() );
food.otherEntree(15.35);
console.log ( "With the other entree we liked, it would be $" + food.totalCost());

console.log ( groom + " said, who all are we inviting to the wedding?" )

var newObj = guestList
for (var key in newObj.guests){
	if (newObj.guests[key].firstName == newObj.guests[0].firstName){
		console.log ( bride + " replied, " + newObj.guests[key].firstName )
	}else{
		console.log ( newObj.guests[key].firstName )
	}
};// end newObj





