require('./bootswatch.less');
require('./messaging.scss');
var React = require('react');
var ReactDom = require('react-dom');
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

var counter = function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const logger = createLogger();
const store = createStore(counter, applyMiddleware(logger));

var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            count: store.getState()
        };
    },

    componentDidMount: function () {
        this.unsubscribe = store.subscribe(function () {
            this.setState({
                count: store.getState()
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    render: function () {
        return <div>count: {this.state.count}</div>;
    }
});

var Messaging = React.createClass({
    onMessageSent: function () {
        const newMessages = this.state.messages.concat([{
            from: this.props.userName,
            content: this.state.messageToSend
        }]);

        this.setState({
            messages: newMessages,
            messageToSend: ''
        });
    },
    getInitialState: function () {
        return {
            messageToSend: '',
            unreadCount: 0,
            messages: []
        };
    },
    render: function () {
        return <div id="messaging">
            <div className="header row">
                <div className="logo col-xs-8">M</div>
                <div className="username col-xs-2">({this.props.userName})</div>
                <div className="unread-count col-xs-2">{this.state.unreadCount}</div>
            </div>

            <div className="messages row">
                <div className="col-xs-12">
                    {this.state.messages.map(msg => 
                        <div className="message row">
                            <div className="from col-xs-3" title={msg.sentAt}>{msg.from}:</div>
                            <div className="content col-xs-">{msg.content}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="control-panel row no-gutter">
                <div className="col-xs-9">
                    <input className="form-control" type="text" 
                        placeholder="write your message..." 
                        value={this.state.messageToSend} 
                        onChange={(e) => this.setState({ messageToSend: e.currentTarget.value })} />
                </div>
                <div className="col-xs-3">
                    <button onClick={this.onMessageSent} type="button" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>;
    }
});

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

ReactDom.render(
    <div className="row">
        <div className="col-sm-12">
            <div className="row">
                <div className="col-sm-2"><HelloWorld /></div>
                <div className="col-sm-5"><Messaging userName="Bob" /></div>
                <div className="col-sm-5"><Messaging userName="Alice" /></div>
            </div>
        </div>
    </div>, 
    document.getElementById('app')
);