require('./bootswatch.less');
require('./messaging.scss');
var React = require('react');
var PropTypes = require('react').PropTypes;
var ReactDom = require('react-dom');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var _ = require('underscore');
import { applyMiddleware, createStore, combineReducers } from 'redux';
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

const initialState = {
    count: 0,
    messages: [],
    messageReadHistory: {}
};

const counter = function (state = initialState.count, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const messageReducer = function (state = initialState.messages, action) {
    switch (action.type) {
        case 'MESSAGE_SENT':
            return state.concat([action.message]);
    
        default:
            return state;
    }
};

const messageReadHistoryReducer = function (state = initialState.messageReadHistory, action) {
    switch (action.type) {
        case 'MESSAGE_READ': {
            const existingReadRecord = state[action.readRecord.messageId],
                newReadRecord = { by: action.readRecord.by, at: action.readRecord.at },
                readRecordToAdd = {};

            readRecordToAdd[action.readRecord.messageId] = existingReadRecord === undefined ?
                [newReadRecord] :
                existingReadRecord.concat([newReadRecord]);

            return Object.assign({}, state, readRecordToAdd);
        }

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    count: counter,
    messages: messageReducer,
    messageReadHistory: messageReadHistoryReducer
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

const Counter = React.createClass({
    getInitialState: () => {
        return {
            count: store.getState().count
        };
    },

    onIncrement: (e) => {
        e.preventDefault();
        store.dispatch({ type: 'INCREMENT' });
    },

    onDecrement: (e) => {
        e.preventDefault();
        store.dispatch({ type: 'DECREMENT' });
    },

    componentDidMount: function () {
        this.unsubscribe = store.subscribe(function () {
            this.setState({
                count: store.getState().count
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    render: function () {
        return <div>
            <div>
                <button className="btn btn-default" onClick={this.onIncrement}>+</button>
                <button className="btn btn-default" onClick={this.onDecrement}>-</button>
            </div>

            <div>Count: {this.state.count}</div>
        </div>;
    }
});

var MessagingInner = React.createClass({
    onKeyDown: function (e) {
        if(e.keyCode === 13){
            this.onMessageSent();
        }
    },
    onMessageSent: function () {
        const messageToSend = {
            id: guid(),
            from: this.props.userName,
            content: this.state.messageToSend,
            sentAt: new Date().toISOString()
        };

        this.props.onMessageSent(messageToSend);
        this.setState({ messageToSend: '' });
    },
    getInitialState: function () {
        return {
            messageToSend: '',
            unreadCount: 0
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
                    {this.props.messages.map(msg => 
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

MessagingInner.propTypes = {
    userName: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        userName: ownProps.userName,
        messages: state.messages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageSent: (message) => {
            dispatch({ type: 'MESSAGE_SENT', message: message })
        }
    };
};

const Messaging = connect(mapStateToProps, mapDispatchToProps)(MessagingInner);

Messaging.propTypes = {
    userName: PropTypes.string.isRequired
};

ReactDom.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-2"><Counter /></div>
                        <div className="col-sm-5 click-observe"><Messaging userName="Bob" /></div>
                        <div className="col-sm-5 click-observe"><Messaging userName="Alice" /></div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>, 
    document.getElementById('app')
);

_(document.getElementsByClassName('click-observe')).each((e) => {
    e.addEventListener('click', () => {
        store.dispatch({ type: 'INCREMENT' });
    });
});