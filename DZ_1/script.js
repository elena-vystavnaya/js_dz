//0. create object
//method 1
let obj1 = {
    name: 'test',
    getName(){
        console.log(this.name);
    },
    setName(item){
        this.name = item;
        console.log(this.name)
    }
}

obj1.getName();
obj1.setName('new name');
console.log(obj1.name);

//method 2
let obj2 = new Object();
obj2.name = 'test';
obj2.lastName = 'test';
obj2.mas = [12, 14, 15];
obj2.fullName = function() {
    console.log(this.name + ' ' + this.lastName);
}

console.log(obj2);
console.log(obj2.mas);
obj2.fullName();

//method 3 
function Test(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name);
    }
}

let test = new Test('constructor');
console.log(test);
test.getName();


//1. create object Order

let user = {
    name: 'name',
    lastName: 'lastName',
    fullName(){
        console.log(this.name + '' + this.lastName);
    },
    setFullName(name, lastName){
        this.name = name;
        this.lastName = lastName;
        console.log(this.name + ' ' + this.lastName);
    }
}

let cart = {
    product: 'product',
    price: 100,
    getProduct(){
        console.log(this.product);
    },
    getPrice(){
        console.log(this.price);
    }
}

let name = ['test1', 'test2', 'test3'];

let email = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];

function Order(user, cart, name, email){
    this.user = user;
    this.cart = cart;
    this.name = name;
    this.email = email;
    this.getUser = function(){
        this.user.setFullName('newName', 'newLastName');
        console.log(this.user)
    };
    this.getCartProduct = function(){
        this.cart.product = 'newProduct';
        console.log(this.cart.product);
    };
    this.getLastName = function(){
        console.log(this.name[this.name.length - 1]);
    };
    this.getFirstEmail = function(){
        console.log(this.email[0]);
    }
}

let order = new Order(user, cart, name, email);
console.log(order);
order.getUser();
order.getCartProduct();
order.getLastName();
order.getFirstEmail();

//3. create object Calculator
function Calculator() {
    this.read = function() {
        this.num1 = parseInt(prompt('Введите первое значение'));
        this.num2 = parseInt(prompt('Введите второе значение'));
    },
    this.sum = function() {
        let sum = this.num1 + this.num2;
        alert('Sum = ' + sum);
    },
    this.mul = function() {
        let mul = this.num1 * this.num2;
        alert('Mul = ' + mul);
    },
    this.min = function() {
        let min = this.num1 - this.num2;
        alert('Min = ' + min);
    }
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();
calculator.min();