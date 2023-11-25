// Declare customerName to be 'bob' in the global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Constant variable for the least favorite customer
const leastFavoriteCustomer = 'someone';

// Function to try to reassign the least favorite customer (throws an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
