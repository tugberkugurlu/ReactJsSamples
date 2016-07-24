require('whatwg-fetch');
var React = require('react');
var ReactDom = require('react-dom');

var Person = React.createClass({
    render: function () {
        return (
            <div>
                <div><strong>Name: </strong> {this.props.name}</div>
                <div><strong>Lastname: </strong> {this.props.lastname}</div>
            </div>
        );
    }
});

var PersonContainer = React.createClass({
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
            view = <div>Loading...</div>;
        } else {
            view = <Person name={this.state.person.name} lastname={this.state.person.lastName} />;
        }

        return view;
    }
});

ReactDom.render(
    <PersonContainer />, 
    document.getElementById('app')
);