import './bootswatch.less';
import 'bricklayer/dist/bricklayer.css';
import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Bricklayer from 'bricklayer';
import loremIpsum from 'lorem-ipsum';
import _ from 'underscore';

const ItemsList = React.createClass({
    componentDidMount: function() {
        this.itemsListContainerBricklayer = new Bricklayer(this.refs.itemsListContainer);
    },
    componentDidUpdate: function() {
        this.itemsListContainerBricklayer.destroy();
        this.itemsListContainerBricklayer = new Bricklayer(this.refs.itemsListContainer);
    },
    render: function() {
        const { items } = this.props;
        return <div className="search-results-container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="bricklayer cards-list" ref="itemsListContainer">
                        {items.map(item =>
                            <div key={item.id} className="card">{item.content}</div> 
                        )}
                    </div>
                </div>
            </div>
        </div>;
    }
});

export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

const getRandomItems = () => {
    const count = _.random(20, 100);
    return _(_.range(count)).map(i => ({
        id: guid(),
        content: loremIpsum()
    }));
};

const HelloWorld = React.createClass({
    getInitialState: function() {
        return {
            items: getRandomItems()
        };
    },
    componentDidMount: function() {
        this.timerId = window.setInterval(() => {
            this.setState({
                items: getRandomItems()
            });
        }, 3000);
    },
    componentWillUnmount: function() {
        window.clearInterval(this.timerId);
    },
    render: function() {
        return <div>
            <ItemsList items={this.state.items} />
        </div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);