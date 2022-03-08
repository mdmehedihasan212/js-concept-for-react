const computer = {
    monitor: 'esonic',
    price: 26000,
    processor: 'core i3',
    hardDisck: 'giga byte'
};
console.log(computer);
const computerPrice = computer.price;
console.log(computerPrice);

// set a new propertis
// set first way
computer.price = 28000;
console.log(computer);
// set second way
computer['price'] = 25000;
console.log(computer);
// set third way
const newPrice = 'price';
computer[newPrice] = 27500;
console.log(computer);