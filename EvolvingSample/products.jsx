var ProductRow = React.createClass({
    
    handleRemove: function() {
        this.props.onRemoveProduct(this.props.product.name);
    },
    
    render: function() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>
                    <a href="#" onClick={this.handleRemove}>X</a>
                </td>
            </tr>
        );
    } 
});

var ProductsTable = React.createClass({
    getInitialState: function() {
        return { products: this.props.products };
    },
    
    removeProduct: function(productNameToRemove) {
        this.setState({
            products: _.filter(this.state.products, function(product) {
                return product.name !== productNameToRemove;
            })
        });
    },
    
    render: function() {
        var rows = [];
        
        this.state.products.forEach(function(product) {
            rows.push(<ProductRow product={product} onRemoveProduct={this.removeProduct} key={product.name} />) 
        }.bind(this));
        
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <ProductsTable products={PRODUCTS} />,
    document.getElementById('products')
)