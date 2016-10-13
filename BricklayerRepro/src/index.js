import './bootswatch.less';
import 'bricklayer/dist/bricklayer.css';
import React from 'react';
import ReactDom from 'react-dom';

const ItemsList = React.createClass({
    render: function() {
        const { items } = this.props;
        return <div className="search-results-container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="bricklayer cards-list" ref="itemsListContainer">
                        {items.map(item =>
                            <div className="card">{item.name}</div> 
                        )}
                    </div>
                </div>
            </div>
        </div>;
    }
});

const HelloWorld = () => {
    return <div>hey!</div>;
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);