const numbers = [12,33,25,68,95,37];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'iphone', price: 129000},
    {id: 2, name: 'mac book air', price: 169000},
    {id: 3, name: 'Xiami phone', price: 49000},
    {id: 4, name: 'lenovo laptop', price: 69000},
    {id: 5, name: 'lenovo phone', price: 19000},
    {id: 6, name: 'walton', price: 9000},
    {id: 7, name: 'hp laptop', price: 79000},
    {id: 8, name: 'Sony Phone', price: 89000},
];
// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products,'laptop');
console.log(result);