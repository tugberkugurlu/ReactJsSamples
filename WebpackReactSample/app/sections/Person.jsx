var React = require('react');
var FirstName = require('../views/FirstName.jsx'); 
var LastName = require('../views/LastName.jsx');
var FullName = require('../views/FullName.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            firstName: '', 
            lastName: ''
        }
    },
    
    handleInputFirstName: function(firstName) {
      this.setState({
            firstName: firstName 
        });
      },
    
    handleInputLastName: function(lastName) {
      this.setState({ 
            lastName: lastName 
        });
    },
    
    render: function() {
        return (
            <div>
                <FirstName value={this.state.firstName} onUserInput={this.handleInputFirstName} />
                <LastName value={this.state.lastName} onUserInput={this.handleInputLastName} />
                <FullName person={this.state} />
            </div>   
        );
    } 
});