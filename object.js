const nayok = {
    name: 'Ajabul Islam',
    id: 101,
    address: 'Dhaka',
    isSingle: true,
    friends: ['Rinku','Raju','Abdullaha','Rabby'],
    act: function(){
        console.log('acting like Sakib Khan')
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
// console.log(student);
console.log(nayok.act);
nayok.act();