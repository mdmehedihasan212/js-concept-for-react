// 2. six basic condition (>, <, ===, !==, <=, >=)
const number = 100;
// ex: 1
if (number > 150) {
    console.log('ami vat khabo');
}
else {
    console.log('ami muri khabo');
}
// ex: 2
if (number !== 100) {
    console.log('ok thik ache');
}
else {
    console.log('hobe na');
}
// ex: 3
if (number <= 50) {
    console.log('taile nan ruti khabo');
}
else {
    console.log('taile jhal muri khabo');
}

// 2.1 multiple condition (&& , ||)
// ex: 4
if (number === 80 && number > 80) {
    console.log('ami gorur goshto khabo');
}
else if (number === 90) {
    console.log('taile ami gorur goshto and murgir goshto khabo');
}
else if (number !== 99 || number >= 100) {
    console.log('taile ami gorur goshto and murgir goshto and dal khabo');
}
else {
    console.log('taile ami khaboi na');
}