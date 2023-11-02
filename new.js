//E3 Задание 1
const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

function itemCounter (arr){
    let even = 0,
        odd = 0,
        zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }
    console.log('четных элементов: ', even)
    console.log('нечетных элементов: ', odd)
    console.log('нулей: ', zero)
}


//E3 Задание 2
itemCounter(arr)
function checkingNumbers(number){
    if (number > 1000 || number === 0 || number === 1){
        return `Данные не верны`
    }else if (number % 2 !== 0){
        return `Число ${number} простое`;
    }else if(number % 2 === 0){
        return `Число ${number} составное`;
    }
}
console.log(checkingNumbers(400));

//E3 Задание 3


function sumNum(num1){
    return function (num2){
        return num1 + num2;
    }
}
const sum = sumNum(3);
const sumFunction = sum(4);
console.log(sumFunction);

//E3  Задание 4


function counter(beginning, end){
    let timer = setInterval(function (){
        console.log(beginning);
        if (beginning === end){
            clearInterval(timer);
        }
        beginning++;
    },1000);
}
//counter(5, 15)


//E3 Задание 5
const arrowFunction = (num, mul) => {
    let result;
    return result = Math.pow(num, mul);
}
console.log(arrowFunction(5, 3));


//E4 задание 1

const user = {name: 'Ivan', surname: 'Petrov', age: 24 };
function getObj (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`Ключ - ${key} , значение - ${obj[key]}`);
        }

    }
}
getObj(user)


//E4 задание 2
function verification (str, obj){
    return str in obj;
}

let a = verification('Ivan', user)
console.log(a);


//E4 задание 3
function withoutAPrototype(){
    return Object.create(null);
}
withoutAPrototype();

//E4 Задание 4

function ElectricalDevices(name ,brand, weight, consumption){
    this.weight = weight;
    this.consumption = consumption;
    this.name = name;
    this.brand = brand;
    this.getConsumption365 = function (consumption=this.consumption){
        console.log(`${this.consumption * 365} Wh`);
    }
}

function PC(ram, gpu, cpu, core, tactOperations){
    this.ram = ram;
    this.gpu = gpu;
    this.cpu = cpu;
    this.core = core;
    this.tactOperations = tactOperations;
    this.computingPower = function (){
        let operations = (this.cpu*this.core*this.tactOperations)/10**-9;
        console.log(`Number of gigaoperations per second ${operations}`);
    }
}

function TableLamp(lumen){
    this.lumen = lumen;
}

TableLamp.prototype = new ElectricalDevices('Horte','Ikea',0.32, 0.3);
const horte = new TableLamp(1000);


PC.prototype = new ElectricalDevices('Dexp', 'Dexp', 10,1050);
const dexp = new PC(16, 4.0, 3.00, 4, 4);


ElectricalDevices.prototype.getInfo = function (){
    console.log(`name ${this.name},consumption ${this.consumption},weight ${this.weight} `);
}
dexp.computingPower();
dexp.getConsumption365();
horte.getInfo();

//E4 Задание 5
class ViewingTools {
    constructor(brand, name, permission) {
        this.brand = brand;
        this.name = name;
        this.permisson = permission;
    }
    getFullName(){
        return `Brand - ${this.brand}, Name - ${this.name}`

    }
}

class TV extends ViewingTools {
    constructor(weight, decibel, brand , name, permission) {
        super(brand , name, permission);
        this.decibel = decibel;
        this.weight = weight;
    }
    getInfo(){
        return `${this.brand} ${this.name} ${this.permisson} ${this.weight} ${this.decibel}`
    }
}

const samsung = new TV(20, 20, 'Samsung', 'UE32N4000AUXCE', '1080p, 1920 x 1080')

console.log(samsung.getFullName())


