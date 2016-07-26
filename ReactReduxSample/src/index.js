require('./bootswatch.less');
require('./messaging.scss');
var React = require('react');
var ReactDom = require('react-dom');
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

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
    onKeyDown: function (e) {
        if(e.keyCode === 13){
            this.onMessageSent();
        }
    },
    onMessageSent: function () {
        const newMessages = this.state.messages.concat([{
            id: guid(),
            from: this.props.userName,
            content: this.state.messageToSend,
            sentAt: new Date().toISOString()
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
                <div className="logo col-xs-7">M</div>
                <div className="username col-xs-3">({this.props.userName})</div>
                <div className="unread-count col-xs-2">{this.state.unreadCount}</div>
            </div>

            <div className="messages row">
                <div className="col-xs-12">
                    {this.state.messages.map(msg => 
                        <div key={msg.id} className="message row" title={msg.sentAt}>
                            <div className="from col-xs-3">{msg.from}:</div>
                            <div className="content col-xs-9">{msg.content}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="control-panel row no-gutter">
                <div className="col-xs-9">
                    <input autoFocus className="form-control" type="text" 
                        placeholder="write your message..." 
                        value={this.state.messageToSend}
                        onKeyDown={this.onKeyDown}
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
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-2"><HelloWorld /></div>
                    <div className="col-sm-5"><Messaging userName="Bob" /></div>
                    <div className="col-sm-5"><Messaging userName="Alice" /></div>
                </div>
            </div>
        </div>
    </div>, 
    document.getElementById('app')
);