//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 3
//Story - Wedding

//Variables
var occation = "wedding";
var music	 = [];

//json Data
var guestList = {
	"guests":[
		{	guestFirstName: "John",
			guestLastName: 	"Anderson" 
		},
		{	guestFirstName: "Jane",
			guestLastName: 	"Anderson" 	
		},
		{	guestFirstName: "Mike",
			guestLastName: 	"Smith" 	
		},
		{	guestFirstName: "Ashley",
			guestLastName: 	"Smith" 	
		},
		{	guestFirstName: "Jacob",
			guestLastName: 	"Lopez" 	
		},
		{	guestFirstName: "Lesly",
			guestLastName: 	"Lopez" 	
		},
		{	guestFirstName: "Kane",
			guestLastName: 	"Sims" 	
		},
		{	guestFirstName: "Janet",
			guestLastName: 	"Sims" 	
		},
		{	guestFirstName: "Alberto",
			guestLastName: 	"Hernandez" 	
		},
		{	guestFirstName: "Alicia",
			guestLastName: 	"Hernandez" 	
		}
	]//end guests
};//end guestList
var bridalParty = {
	"groomsMen":[
		{	firstName: 		"John",
			LastName: 		"Doe",
			isBestMan: 		true
		},
		{	firstName: 		"John",
			LastName: 		"Doe",
			isBestMan: 		false
		},
		{	firstName: 		"John",
			LastName: 		"Doe",
			isBestMan: 		false
		},
		{	firstName: 		"John",
			LastName: 		"Doe",
			isBestMan: 		false
		}
	],//ends groomsMen
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
	]//end bridesMades
};//end bridalParty

//object
var food = {

	"horderves"	: 0.50,
	"entree" 	: 2.75,
	"kidsMeal"	: 1.25,
	"cake"		: 1.00,
	"totalCost"	: function(){ //Method: Accessor (Getter)
		var costOfFood = this.horderves + this.entree + this.kidsMeal + this.cake
		return costOfFood;
	},//end totalCost method
	"otherEntree" : function (alternateEntree){ //Method: Mutator (Setter)
		this.entree = alternateEntree; 
	}

};//end food object

//Main code
console.log ( "My future bride and I are planning out our " + occation + ".");
console.log ( "The estimate cost for food per person is $" + food.totalCost() );

food.otherEntree(2.40);

console.log ( "With the other entree we liked, it would be $" + food.totalCost());












//test data
console.log ( guestList );
console.log ( bridalParty );