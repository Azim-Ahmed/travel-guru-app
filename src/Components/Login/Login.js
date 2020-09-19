import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    //**Google Sign In Area */

    const [ user, setUser] = useContext(UserContext)

    const [newUser, setnewUser] = useState(false)

    const history = useHistory()
 const location = useLocation()
 let { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        const goolgeProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(goolgeProvider).then(function (result) {



            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setUser(signedInUser)
            history.replace(from)

        }).catch(err => {

            console.log(err.message);
        });

    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {

            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setUser(signedInUser)
            history.replace(from)
            // ...
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleBlurChange = (e) => {

        let isFieldValid = true;

        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValidlength = e.target.value.length > 5
            const isPasswordValid = /\d{1}/.test(e.target.value)
            const newUserInfo = {...user}
            newUserInfo.error = "Password is Not valid"
            isFieldValid = isPasswordValid && isPasswordValidlength
        }
        if (isFieldValid) {

            const newUserInfo = { ...user }
            newUserInfo.error = ''
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }


    const handleSubmit = (e) => {

        if (newUser && user.email && user.password && user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                     updateUserName(user.name)
                    setUser(newUserInfo)
                    history.replace(from)
                    
                    // 
                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                    // ...
                });
            if (!newUser && user.email && user.password) {
                firebase.auth().signInWithEmailAndPassword(user.email && user.password)
                    .then(res => {
                        const newUserInfo = { ...user }

                        newUserInfo.error = ''
                        newUserInfo.success = true
                        newUserInfo[user.name] = res.user.displayName
                        setUser(newUserInfo)
                        history.replace(from)
                       
                    })
                    .catch(function (error) {
                        const newUserInfo = { ...user }
                        newUserInfo.error = error.message
                        newUserInfo.success = false
                        setUser(newUserInfo)
                        console.log(error);
                    });
            }

        }
        e.preventDefault()

    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
    }



    return (
        <div style={{ textAlign: "center", color : "white" }}>
            {user.name}
            <div>
                <h1>This is Login Area</h1>

                <Form onSubmit={handleSubmit}>
                    {newUser && <FormGroup>
                        <Label for="name">Name</Label>
                        <Input

                            type="name"
                            onBlur={handleBlurChange}
                            name="name"
                            placeholder="Enter Your Name"
                        />
                    </FormGroup>}

                    <FormGroup>
                        <Label for="location">Email</Label>
                        <Input
                            type="name"
                            onBlur={handleBlurChange}
                            name="email"
                            placeholder="Enter Your Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Password</Label>
                        <Input
                            type="password"
                            onBlur={handleBlurChange}
                            name="password"
                            placeholder="Enter Your Password"
                        />
                    </FormGroup>
                    {newUser && <FormGroup>
                        <Label for="name">Confirm Password</Label>
                        <Input

                            type="password"
                            onBlur={handleBlurChange}
                            name="password"
                            placeholder="Enter Your Confirm Password"
                        />
                    </FormGroup>}


                    <Button size='lg' color="success"> <strong> {newUser ? "Sign Up" : "Sign In"} </strong> </Button>
                    <h3 style={{ color: 'red' }}>{user.error}</h3>
                    {user.success && <h3 style={{ color: 'green' }}>User {newUser ? 'Created' : "Logged"} SuccessFully</h3>}
                    {user.email && <h3 style={{ color: 'green' }}>User LoggedIn SuccessFully</h3>}
                </Form>

                <Button color="warning"> <h4 onClick={() => setnewUser(!newUser)}>Need To Sign Up?</h4></Button>
            </div>




            <h1>This Is google AuthenTication</h1>
            <Button color='success' onClick={handleGoogleSignIn}>Continue With Google </Button>
            <br/>

            <Button color='success' onClick={handleFacebookSignIn}>Continue With Facebook </Button>

        </div>
    );
};

export default Login;