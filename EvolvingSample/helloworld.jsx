var FirstName = React.createClass({
   render: function() {
       return (
           <div>
                <strong>First name: </strong> <input type="text" placeholder="First name" />
           </div>  
       );
   }
});

var LastName = React.createClass({
   render: function() {
       return (
           <div>
                <strong>Last name: </strong> <input type="text" placeholder="Last name" />
           </div>  
       );
   }
});

var PersonName = React.createClass({
    render: function() {
        return (
            <div>
                <FirstName />
                <LastName />
            </div>          
        );
    } 
});

ReactDOM.render(
    <PersonName />,
    document.getElementById('container')
);