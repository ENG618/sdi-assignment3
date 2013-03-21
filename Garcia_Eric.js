//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 3
//Story - Wedding

//Variables
var bride = "Lindsay"
var groom = "Eric"
var occation = "wedding";
var music	 = [];

//json Data
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
var bridalParty = {
	"groomsMen":[
		{	firstName: 		"John",
			lastName: 		"Doe",
			isBestMan: 		true
		},
		{	firstName: 		"John",
			lastName: 		"Doe",
			isBestMan: 		false
		},
		{	firstName: 		"John",
			lastName: 		"Doe",
			isBestMan: 		false
		},
		{	firstName: 		"John",
			lastName: 		"Doe",
			isBestMan: 		false
		}
	], //ends groomsMen
	"bridesMades":[
		{	firstName: 		"Jane",
			lastName: 		"Doe",
			isMadeOfHoner: 	true
		},
		{	firstName: 		"Jane",
			lastName: 		"Doe",
			isMadeOfHoner: 	false
		},
		{	firstName: 		"Jane",
			lastName: 		"Doe",
			isMadeOfHoner: 	false
		},
		{	firstName: 		"Jane",
			lastName: 		"Doe",
			isMadeOfHoner: 	false
		}
	] //end bridesMades
}; //end bridalParty

//object
var food = {

	"horderves"	: 0.50,
	"entree" 	: 2.75,
	"kidsMeal"	: 1.25,
	"cake"		: 1.00,
	"totalCost"	: function(){ //Method: Accessor (Getter)
		var costOfFood = this.horderves + this.entree + this.kidsMeal + this.cake
		return costOfFood;
	}, //end totalCost method
	"otherEntree" : function (alternateEntree){ //Method: Mutator (Setter)
		this.entree = alternateEntree; 
	}

}; //end food object

var totalAttendees = function (){

};
//Main code
console.log ( "My future bride (" + bride + ") and I are planning our " + occation + ".");

console.log ( "The estimated cost of food per person is $" + food.totalCost() );
food.otherEntree(2.40);
console.log ( "With the other entree we liked, it would be $" + food.totalCost());

console.log ( groom + " said, who all are we inviting to the wedding?" )
var newObj = guestList
for (var key in newObj.guests){
	if (newObj.guests[key].firstName == newObj.guests[0].firstName){
		console.log ( bride + " replied, " + newObj.guests[key].firstName )
	}else{
		console.log ( newObj.guests[key].firstName)
	}
};








//test data
console.log ( "Test logs" );
console.log ( guestList );
console.log ( bridalParty );