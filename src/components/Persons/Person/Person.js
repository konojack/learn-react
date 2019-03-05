import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    inputElementRef = React.createRef();

    //other way to use context (other than AuthContext.Consumer)
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <Fragment>
                {/* <AuthContext.Consumer>
                    {(context) =>  context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p> }
                </AuthContext.Consumer> */}
                 { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p> }
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
            </Fragment>


        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};


export default withClass(Person, classes.Person);