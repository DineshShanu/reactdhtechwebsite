import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import "./ResponsiveWebsite.css";
import mysocialdata from "./Data/Socialdata";


const ContactUs = () => {
    document.title = "Contact";
    return (
        <>
            <div className="container-fluid my-4 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h2><strong className="brand-name text-uppercase">{"contact"}</strong></h2>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column rounded-lg border border-[#464c6a] p-3 lg:p-5" style={{ boxShadow: "0px 2px 10px #4799cd" }}>
                                <p className="text-sm-left brand-name my-3" style={{ fontSize: "12px" }}>
                                    {mysocialdata.contactmsg}
                                </p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="3"></textarea>
                                    </div>
                                    <div className="col-12 mt-4 text-right">
                                        <button type="submit" variant="" className="btn btn-info">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 text-center text-secondary order-2 order-lg-2 my-5">
                                <p className="mx-4 abt-me"><MailIcon /> {mysocialdata.email}</p>
                                <p className="mx-4 abt-me"><CallIcon />{mysocialdata.phone}</p>
                                <p className="mx-4 abt-me"><PersonPinCircleIcon />{mysocialdata.address}</p>
                                <div className="mx-4 text-center">
                                    <a href={mysocialdata.gmail} target="_blank" rel="noreferrer" className="text-secondary">
                                        <EmailIcon className="mx-2 scl-icon" />
                                    </a>
                                    <a href={mysocialdata.github} target="_blank" rel="noreferrer" className="text-secondary">
                                        <GitHubIcon className="mx-2 scl-icon" />
                                    </a>
                                    <a href={mysocialdata.linkedin} target="_blank" rel="noreferrer" className="text-secondary">
                                        <LinkedInIcon className="mx-2 scl-icon" />
                                    </a>
                                    <a href={mysocialdata.facebook} target="_blank" rel="noreferrer" className="text-secondary">
                                        <FacebookIcon className="mx-2 scl-icon" />
                                    </a>
                                    <a href={mysocialdata.insta} target="_blank" rel="noreferrer" className="text-secondary">
                                        <InstagramIcon className="mx-2 scl-icon" />
                                    </a>
                                    <a href={mysocialdata.whatsapp} method="get" target="_blank" rel="noreferrer" className="text-secondary">
                                        <WhatsAppIcon className="mx-2 scl-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;