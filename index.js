var customerName = 'bob';

function upperCaseCustomerName() {
    window.customerName === 'bob';
    window.customerName = window.customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'kyle'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'amy'
}