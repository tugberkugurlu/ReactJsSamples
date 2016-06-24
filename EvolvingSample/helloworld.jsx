var FirstName = React.createClass({
   render: function() {
       return (
           <div>
                <strong>First name: </strong> <input type="text" placeholder="First name" value={this.props.value} />
           </div>  
       );
   }
});

var LastName = React.createClass({
   render: function() {
       return (
           <div>
                <strong>Last name: </strong> <input type="text" placeholder="Last name" value={this.props.value} />
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
    render: function() {
        return (
            <div>
                <FirstName value={this.props.person.firstName} />
                <LastName value={this.props.person.lastName} />
                <FullName person={this.props.person} />
            </div>          
        );
    } 
});

var person = { firstName: '', lastName: '' };

ReactDOM.render(
    <PersonName person={person} />,
    document.getElementById('container')
);