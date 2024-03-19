import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContactUs = () => {
    const [data, SetData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        SetData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }


    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
        Hi, ${data.fullname} 
        We have recived your Information with these details
        Phone : ${data.phone}
        Email : ${data.email}
        Message: ${data.message}
        we will connect you soon.`);

    };
    return (
        <>
            <div className="my-5">
                <h2 className="text-center text-uppercase">Contact Us</h2>
            </div>
            <div className="container contactus_div">
                <div className="row text-center">
                    <div className="col-md-6 col-md-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <TextField required
                                    id="standard-required"
                                    label="Full Name"
                                    placeholder="Dinesh Kumar"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                />
                            </div>
                            <div class="form-group">
                                <TextField
                                    type="phone"
                                    label="Phone"
                                    defaultValue=""
                                    placeholder="+1 (437)-669-9890"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent} />
                            </div>
                            <div class="form-group">
                                <TextField
                                    type="email"
                                    label="Email"
                                    defaultValue=""
                                    placeholder="dineshkumar9890@gmail.com"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent} />
                            </div>
                            <div class="form-group">
                                <TextField style={{ marginRight: "36px" }}
                                    label="Message"
                                    maxRows={3}
                                    multiline
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12 mt-4">
                                <Button type="submit" variant="" className="sbmt-btn">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;