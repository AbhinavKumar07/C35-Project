var database = firebase.database();
var dog, dogSprite;
var happyDog;
var food;
var foodStock;
var feedPetButton, addFoodButton; // Buttons for adding food and feeding the pet.
var fedTime, lastFed; // Storing last time the pet was fed.
var foodObj; // Food class

function preload() {
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dogSprite = createSprite(250, 250, 20, 20);
  //dogSprite = addImage(dog);

  //foodStock = database.ref('Food');
  //foodStock.on("20", readFood);

  // Feed pet and Add food buttons
  feedPetButton=createButton("Feed your dog");
  feedPetButton.position(450,80);
  feedPetButton.mousePressed(feedDog);

  addFoodButton = createButton("Add food");
  addFoodButton.position(620,80);
  addFoodButton.mousePressed(addFoods);

}


function draw() {
  background(46, 139, 87);

  fedTime = database.ref('lastFedTime')
  fedTime.on("value", function(data){
    lastFed=data.val();
  
  });

  foodObj.display();
  drawSprites();
}

//Reading the database
function readStock(data) {
  food - data.val()
}

//Writing in the database
function writeStock(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref('Food').update({ food: x })
}

function addFoods() {
  Foods++;
  database.ref('/').update({
    food:Foods
  })
}

function feedDog() {
  dogSprite.addImage(happyDog);

  foodObj.updatefoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    fedTime:hour()
  })
}