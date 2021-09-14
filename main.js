
// Exercice 1
var items = new Array();
console.log(items);
items = []; // Error should happend but does not... ???
console.log(items);
items = new Array;
console.log(items);
items = ["a","b"];
console.log(items);



//Exercice 2
var items = ["premier élément", "deuxième élément","troisième élément","quatrième élément"];
console.log(items);
console.log(items[1]);
//Show Array 2nd element because index start at 0.
console.log(items[3]);
//Show Array's 4th element
console.log(items[0]);
//Show Array's first element

/*
//Exercice 3
var player = ["John","Doe",34,true];
console.log(player);
// COnsole show expected output
console.log(player[0] + " " + player[1]);
player[2] = 40;
console.log(player[2]);
console.log(player[3]);
//This would not be pratical at all
*/

var player = {"firstname":"John","lastname":"Doe","age":34,"isAdult":true};
console.log(player);
console.log(player["firstname"] + " " + player["lastname"]);
player["age"] = 40;
console.log(player["age"]);
console.log(player["isAdult"]);
// This method is easier to find specific indexes and more intuitive 
// We can also use the dot notation since javascript considers it as an object

var car = {
    "type" : "Clio",
    "brand" : "Renaud",
    "date" : 2006,
    "color" : "orange",
    "passengers" : ["Mike","Claire","Anna","Louis"]
}
console.log("Une " + car["brand"] + " " + car["type"] + " de couleur "
+ car["color"] + ", " + car["date"] + " a été aperçue avec à son bord 4 passagers" );
// Clio is not the right color !
//The passenger index contains another array
// This is a nested Array
console.log(car["passengers"][0]);
//Mike is showing up ! Hi Mike !
// the First [] refers to the first arrays of the nest
// and the second to the second arrays obviously
console.log(car["passengers"].length + " individus ont été aperçus à son bord : "
+ car["passengers"][3] + ", " + car["passengers"][1] + ", " + car["passengers"][0] + ", "
+ car["passengers"][2] + ", ");

var a = 14;
var b = 38;

var product = [];
console.log(a);
console.log(b);
console.log(product);
product[0] = a;
product[1] = b;
product[7] = 50;
console.log(product);
// By putting a value to the 8th index of product we made it a 8th index long array
// WIth 5 empty slot from 1 to 6.
// This is because JavaScript array are Dynamic and automatically expand