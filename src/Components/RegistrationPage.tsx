import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export const RegistrationPage = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [userName, setUserName] = useState("");
    const [nameError, setNameError] = useState("");
    const [formIsValid, setFormIsValid] = useState(false);
    const handleValidation = (event: any) => {
        setFormIsValid(true);
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            setFormIsValid(false);
            setEmailError("Email Not Valid");
            return false;
        } else {
            setEmailError("");
            setFormIsValid(true);
        }
        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            setFormIsValid(false);
            setPasswordError("only letters and length must best minimum 8 characters and Max 22 Characters");
            return false;
        }

        else {
            setPasswordError("");
            setFormIsValid(true);


        }
        if (!userName.match(/^[a-zA-Z]{8,22}$/)) {
            setFormIsValid(false);
            setNameError("only letters and length must best minimum 8 characters and Max 22 Characters");
            return false;
        }
        else {
            setNameError("");
            setFormIsValid(true);
        }
        return formIsValid;
    };
    const registration = (e: any) => {
        e.preventDefault();
        handleValidation(e);
        if (formIsValid) {
            alert('registration success');
        }


    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form id="registration" onSubmit={registration}>
                            <div className="form-group">
                                <label>UserName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="TextInput"
                                    name="TextInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Name"
                                    onChange={(event) => setUserName(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {nameError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <small id="passworderror" className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"

                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
