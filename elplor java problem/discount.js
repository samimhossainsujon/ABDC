/*

if you purchase more than 200 tickets 
first 100 ------> 100 tk
101-200 --------> 90tk
201+------------> 70tk
*/

function ticketPrice(ticketQuantitiy) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantitiy <= 100) {
        const price = ticketQuantitiy * first100Rate;
        return price;

    }

    else if (ticketQuantitiy <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantitiy = ticketQuantitiy - 100;
        const restticketPrice = restTicketQuantitiy * second100Rate;
        const totalPrice = first100Price + restticketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantitiy = ticketQuantitiy - 200;
        const restticketPrice = restTicketQuantitiy * restTicketRate;

        const totalCost = first100Price + second100Price + restticketPrice;
        return totalCost;
    }
}

const price = ticketPrice(201);
console.log('price :', price);
