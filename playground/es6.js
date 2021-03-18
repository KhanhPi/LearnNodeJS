const name = "khanh"
const age = 25

const user = {
    name,
    age,
    lacation: 'VietName'
}

console.log(user)


const product = {
    label: "Red book",
    price: 4,
    sale: 23, 
    rating: 4.3 
}

// const {label: labelProduct, sale, rating = 5} = product
// console.log(labelProduct);
// console.log(sale);
// console.log(rating)

const transaction = (type, {label, sale}) => {
    console.log(type, label, sale)
}

transaction('order', product)