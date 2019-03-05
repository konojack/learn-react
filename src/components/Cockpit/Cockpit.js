import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ({ appTitle, personsLength, showPersons, clicked, login }) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js useEffect]');
        //Fake HTTP request
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js cleanup work in useEffect]');
        }
    }, []) // only once beacuse empty array (no argument it will change every time props will change, define props if should change if that props change)

    const assignedClasses = [];
    let btnClass = '';
    if (showPersons) {
        btnClass = classes.Red;
    }

    if (personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
}

export default React.memo(cockpit);
