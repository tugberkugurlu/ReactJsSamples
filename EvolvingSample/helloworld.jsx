var FirstName = React.createClass({
   render: function() {
       return (
           <div>
                <strong>First name: </strong> <input type="text" placeholder="First name" />
           </div>  
       );
   }
});

ReactDOM.render(
    <FirstName />,
    document.getElementById('container')
);