var _ = require('underscore');
var products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

module.exports = {
    getProducts: function () {
        return products;
    },

    getProduct: function (productName) {
        return  _.find(products, function (product) {
            return product.name === productName;
        });
    },

    removeProduct: function (productName) {
        products = _.filter(products, function(product) {
            return product.name !== productName;
        })
    },

    addProduct: function (product) {
        products.push(product);
    }
};