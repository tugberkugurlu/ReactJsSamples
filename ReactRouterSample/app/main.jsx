require("./bootswatch.less");
var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var _ = require('underscore');

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
            <div className="row">
                <div className="col-md-12">
                    <h2>Add Product</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="productNameInput">Name</label>
                            <input type="text" className="form-control" value={this.props.name} ref="name" id="productNameInput" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCatInput">Category</label>
                            <input type="text" className="form-control" value={this.props.category} ref="category" id="productCatInput" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPriceInput">Price</label>
                            <input type="text" className="form-control" value={this.props.price} ref="price" id="productPriceInput" />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value={this.props.name} ref="stocked" /> It's in stock
                            </label>
                        </div>
                        
                        <div>
                            <button className="btn btn-default" type="button" onClick={this.add}>Add</button>
                        </div>
                    </form>
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
            <div className="row">
                <div className="col-md-12">
                    <h2>Products</h2>
                    <table className="table table-striped table-bordered">
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
            <div className="row">
                <div className="col-md-12">
                    <ProductsTable products={this.state.products} onRemoveProduct={this.removeProduct} /> 
                    <ProductForm onProductAdded={this.addProduct} />
                </div>
            </div>  
        );
    }
});

var MyComponent = React.createClass({
    render: function () {
        return (<div>Hello World</div>);
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <ProductList />
                {this.props.children}
            </div>
        );
    }
});

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={MyComponent} />
    </Router>
), document.getElementById('container'));