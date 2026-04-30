const input = require("prompt-sync")(); 
let successfulDeliveries =  input("Enter number of successful deliveries must be between 0 and 100. ");



function calculateRiderWage(successfulDeliveries) {

    if (typeof successfulDeliveries !== 'number' || successfulDeliveries < 0 || successfulDeliveries > 100) {
        return "Invalid input. Successful deliveries must be between 0 and 100.";
    }
    
    const basePay = 5000;
    let amountPerParcel;
    let collectionRate = successfulDeliveries; 
    
   
    if (collectionRate < 50) {
        amountPerParcel = 160;
    } else if (collectionRate >= 50 && collectionRate <= 59) {
        amountPerParcel = 200;
    } else if (collectionRate >= 60 && collectionRate <= 69) {
        amountPerParcel = 250;
    } else { // >= 70%
        amountPerParcel = 500;
    }
    
    let totalWage = basePay + (successfulDeliveries * amountPerParcel);
    return totalWage;
}
