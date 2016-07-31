import 'semantic-ui-css/semantic.css';
import './app.scss';
import PlaceholderImage from './image.png';
var React = require('react');
var ReactDom = require('react-dom');

// see this http://semantic-ui.com/examples/bootstrap.html

var HelloWorld = () => {
    return (<div id="main-container" className="ui grid container">
        <div className="row">
            <div className="column">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.
            </div>
        </div>

        <div className="row">
            <div className="column">
                <h2> Stackable, Responsive Grid</h2>
                <div className="ui stackable three column grid">
                    <div className="column">
                        <div className="ui segment">
                            <i className="add to calendar icon"></i>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="registered icon"></i>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="tasks icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="column">
                <div className="ui three column grid">
                    <div className="column">
                        <h2>Labels</h2>
                        <div>
                            <a className="ui red label">Red</a>
                            <a className="ui orange label">Orange</a>
                            <a className="ui yellow label">Yellow</a>
                            <a className="ui olive label">Olive</a>
                            <a className="ui green label">Green</a>
                            <a className="ui teal label">Teal</a>
                            <a className="ui blue label">Blue</a>
                            <a className="ui violet label">Violet</a>
                            <a className="ui purple label">Purple</a>
                            <a className="ui pink label">Pink</a>
                            <a className="ui brown label">Brown</a>
                            <a className="ui grey label">Grey</a>
                            <a className="ui black label">Black</a>
                        </div>
                    </div>
                    <div className="column">
                        <h2>Tags</h2>
                        <div>
                            <a className="ui tag label">New</a>
                            <a className="ui red tag label">Upcoming</a>
                            <a className="ui teal tag label">Featured</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui two column grid">
                        <div className="column">
                            <div className="ui fluid image">
                            <a className="ui left corner label">
                                <i className="heart icon"></i>
                            </a>
                            <img src={PlaceholderImage} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui fluid image">
                            <a className="ui red right corner label">
                                <i className="save icon"></i>
                            </a>
                            <img src={PlaceholderImage} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="column">
                <h2>Table</h2>
                <table className="ui definition table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Premium Plan</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Yes</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);