
class Bike {
    constructor(public price: number, public max_speed: number) { }
    miles = 0;
    displayInfo = () => {
        console.log(this.price, this.max_speed, this.miles);
        return this
    }
    ride = () => {
        console.log('Riding');
        this.miles += 10;
        return this
    }
    reverse = () => {
        if (this.miles >= 5) {
            console.log('Reversing')
            this.miles -= 5
            return this
        }
        else {
            console.log('still', this.miles)
            return this
        }
    }
}
var RB = new Bike(5000, 66)
var LW = new Bike(8000, 75)
var stock = new Bike(2000, 45)
RB.ride().ride().ride().reverse().displayInfo()
stock.reverse().reverse().reverse()
