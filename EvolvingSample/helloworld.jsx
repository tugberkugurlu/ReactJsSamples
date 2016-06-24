var FirstName = React.createClass({
   handleChange: function() {
       this.props.onUserInput(this.refs.nameInput.value);
   }, 
    
   render: function() {
       return (
           <div>
                <strong>First name: </strong> 
                <input type="text" placeholder="First name" value={this.props.value} ref="nameInput" onChange={this.handleChange} />
           </div>
       );
   }
});

var LastName = React.createClass({
   handleChange: function() {
       this.props.onUserInput(this.refs.nameInput.value);
   },
   
   render: function() {
       return (
           <div>
                <strong>Last name: </strong> 
                <input type="text" placeholder="Last name" value={this.props.value} ref="nameInput" onChange={this.handleChange} />
           </div>  
       );
   }
});

var FullName = React.createClass({
   render: function() {
       return (
           <div>
                <span>{this.props.person.firstName}</span> <span>{this.props.person.lastName}</span>
           </div>  
       );
   }
});

var PersonName = React.createClass({
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

//var person = { firstName: '', lastName: '' };

ReactDOM.render(
    <PersonName />,
    document.getElementById('hello-world')
);