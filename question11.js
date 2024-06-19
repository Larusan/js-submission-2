//UKI - JavaScript Assignment - 2
//Question 11

let inventory = new Map();
function addItem(itemName, quantity) {
  // use Map Object's set method to add the item to the inventory
  inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
  // use Map Object's has, set, get methods to update the quantity


  if (inventory.has(itemName)) {
   // if exists, update the quantity
    let currentQuantity = inventory.get(itemName);
    inventory.set(itemName, currentQuantity + quantity);
  } else {
    // if not, console log the message "Item not found"
    console.log("Item not found");
  }
}
function checkItemQuantity(itemName) {
  // check item quantity in the inventory
  return inventory.get(itemName);
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150

