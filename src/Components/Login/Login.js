import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {

    //**Google Sign In Area */

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)


   if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
   }
    

    const handleGoogleSignIn = () =>{

        // firebase.initializeApp(firebaseConfig);

        const goolgeProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(goolgeProvider).then(function(result) {
       
            
          
           const {displayName, email} = result.user;
           const signedInUser = {name: displayName, email}
           setLoggedInUser(signedInUser)
            // console.log(signedInUser);
            // ...
          }).catch(err => {
            
            console.log(err.message);
          });

    }

   



    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    const handleBlurChange = (e) => {

        let isFieldValid = true;
        // console.log(e.target.value);
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValidlength = e.target.value.length > 5
            const isPasswordValid = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && isPasswordValidlength
        }
        if (isFieldValid) {

            const newUserInfo = { ...user }
                 newUserInfo[e.target.name] = e.target.value;
                 setUser(newUserInfo)
        }
    }
    const handleSubmit = (e)=>{
        console.log(user.email && user.password);
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = ''
                newUserInfo.success = true
                setUser(newUserInfo)
            })
            .catch(function(error) {
                const newUserInfo = {...user}
                 newUserInfo.error = error.message
                 newUserInfo.success = false
            
                setUser(newUserInfo)
                // ...
              });

        }
        e.preventDefault()

    }

    return (
        <div>
            <h1>This is Login Area</h1>
            home:
            {user.password}
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label for="location">Name</Label>
                    <Input
                        type="name"
                        onBlur={handleBlurChange}
                        name="name"
                        placeholder="Enter Your Name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="location">Origin</Label>
                    <Input
                        type="name"
                        onBlur={handleBlurChange}
                        name="email"
                        placeholder="Enter Your Password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="location">Destination</Label>
                    <Input
                        type="password"
                        onBlur={handleBlurChange}
                        name="password"
                        placeholder="Destination you want"
                    />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="submit">submit</Label>
                    <Input
                        type="submit"
                   
                        name="submit"
                       
                    />
                </FormGroup> */}


                 <Button size='lg' block color="primary">Start Booking</Button> 
            <h3 style = {{color: 'red'}}>{user.error}</h3>
            { user.success &&  <h3 style = {{color: 'green'}}>User Created SuccessFully</h3>}
            {loggedInUser.email && <h3 style = {{color: 'green'}}>User Created SuccessFully</h3> }
            </Form>





            <h1>This Is google AuthenTication</h1>
            <button onClick ={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;