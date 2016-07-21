require('whatwg-fetch');
var React = require('react');
var ReactDom = require('react-dom');

var Person = React.createClass({
    getInitialState: () => {
        return {
            loading: true,
            person: null
        };
    },
    componentDidMount: function () {
        fetch('/data.json')
            .then(data => {
                return data.json();
            })
            .then((data => {
                this.setState({
                    loading: false,
                    person: {
                        name: data.name,
                        lastName: data.lastName
                    }
                })
            }).bind(this));
    },
    componentWillUnmount: () => {
        // ideally, we would like to abort the ongoing stuff here 
        // as described here: https://facebook.github.io/react/tips/initial-ajax.html 
        // but promise cannot be cancelled: https://github.com/whatwg/fetch/issues/27
    },
    render: function () {
        var view;
        if(this.state.loading) {
            view = <div>Fetching...</div>;
        } else {
            view = (
                <div>
                    <div>
                        <strong>Name</strong>: {this.state.person.name}
                    </div>

                    <div>
                        <strong>Last name</strong>: {this.state.person.lastName}
                    </div>
                </div>
            );
        }

        return view;
    }
});

var App = () => {
    return <div>
        <Person />
    </div>;
};

ReactDom.render(
    <App />, 
    document.getElementById('app')
);