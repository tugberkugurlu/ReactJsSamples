var ProductForm = React.createClass({
    getInitialState: function() {
        return {
            category: '', 
            price: '', 
            stocked: false, 
            name: ''            
        }
    },
    add: function() {
        this.props.onProductAdded({
            category: this.refs.category.value, 
            price: this.refs.price.value, 
            stocked: this.refs.stocked.value, 
            name: this.refs.name.value
        });
    },
    
    render: function() {
        return (
            <div>
                <h2>Add Product</h2>
                
                <div>Name: <input type="text" value={this.props.name} ref="name" /></div>
                <div>Category: <input type="text" value={this.props.category} ref="category" /></div>
                <div>Price: <input type="text" value={this.props.price} ref="price" /></div>
                <div>Stocked: <input type="checkbox" value={this.props.name} ref="stocked" /></div>
                
                <div>
                    <button type="button" onClick={this.add}>Add</button>
                </div>
            </div>
        );
    }
});

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
    handleRemove: function(productNameToRemove) {
        this.props.onRemoveProduct(productNameToRemove)
    },

    render: function() {
        var rows = [];
        
        this.props.products.forEach(function(product) {
            rows.push(<ProductRow product={product} onRemoveProduct={this.handleRemove} key={product.name} />) 
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

var ProductList = React.createClass({
    getInitialState: function() {
        return { products: [
                {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
            ]
        };
    },
    
    removeProduct: function(productNameToRemove) {
        this.setState({
            products: _.filter(this.state.products, function(product) {
                return product.name !== productNameToRemove;
            })
        });
    },

    addProduct: function(product) {
        this.setState({
            products: this.state.products.concat([product])
        }) 
    },
    
    render: function() {
        return (
            <div>
                <ProductsTable products={this.state.products} onRemoveProduct={this.removeProduct} /> 
                <ProductForm onProductAdded={this.addProduct} />
            </div>  
        );
    } 
});

ReactDOM.render(<ProductList />,
    document.getElementById('products')
)