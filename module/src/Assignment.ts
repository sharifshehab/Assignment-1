
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || typeof toUpper === "undefined") {
        return input.toUpperCase();
    } else{
        return input.toLowerCase();
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4 );
}




class Vehicle {
    private _make: string;
    private _year: number;

    constructor(_make: string, _year: number) {
        this._make = _make;
        this._year = _year;
    }

    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`;
    }
}

class Car extends Vehicle {

    private _model: string;

    constructor(_make: string, _year: number, _model: string) {
        super(_make, _year);
        this._model = _model;
    }

    getModel() {
        return `Model: ${this._model}`;
    }
}




function processValue(value: string | number): number{
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}





interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null;
    }

    let highestPrice = products[0].price;
    let product = {
        name:'',
        price: 0
    };

    for (const arr of products) {

        if (highestPrice < arr.price) {
            highestPrice = arr.price;
        }

        if (highestPrice === arr.price) {
            product = arr
        }
    }
    return product;
}







enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day) {
    if (day > 5) {
        return "Weekend";
    }
        return "Weekday";
}



async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve, reject) => {
        if (n < 0) {
            reject("Negative number not allowed");
        }
        setTimeout(() =>  resolve(n ** 2),1000);
    })
}

