import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Input from "react-phone-number-input/input";

import {
    IoLogoLinkedin,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoFacebook,
} from "react-icons/io";

import "./layout.scss";
import StyledInput from "../../components/input/Input";
import Textarea from "../textarea/Textarea";
import { Phone, Mail, Address, Apartment } from "../../components/icons/Icons";
import Routes from "../Routes";

import useStore, { request } from "../../useStore";

const Layout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const handleContact = async () => {
        if (name.trim() === "") {
            toast.warning("empty username. Try again!");
            return;
        } else if (email.trim() === "") {
            toast.warning("empty email. Try again!");
            return;
        } else if (phone.trim() === "") {
            toast.warning("empty phone. Try again!");
            return;
        } else if (title.trim() === "") {
            toast.warning("empty subject. Try again!");
            return;
        } else if (details.trim() === "") {
            toast.warning("empty detail descriptions. Try again!");
            return;
        } else {
            let contactInfo = {
                name: name,
                email: email,
                phone: phone,
                subject: title,
                details: details,
            };

            const response = await request("/api/requestdata", contactInfo);

            if (response?.result) {
                toast.success("Success to send your info!!!");

                setName("");
                setEmail("");
                setPhone("");
                setTitle("");
                setDetails("");
            } else if (response?.error == 1001) {
                toast.warning(
                    "Usernames can only have lowercase Letters (a-z) and numbers (0-9), 3 ~ 20 characters"
                );
            } else if (response?.error == 1002) {
                toast.warning("invalid email address format");
            }
        }
    };

    return (
        <BrowserRouter>
            <Route
                render={(props: any) => (
                    <div className="layout">
                        <div className="content">
                            <Routes />
                        </div>
                        <section className="container contactus" id="contactus">
                            <div className="header">
                                <h2>Tell us about your project</h2>
                                <span>
                                    Send us a request for proposal! We’ll get
                                    back to you with details and estimations.
                                </span>
                            </div>
                            <div className="row content">
                                <div className="infosign">
                                    <div>
                                        <StyledInput
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e: any) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <StyledInput
                                            type="email"
                                            value={email}
                                            placeholder="Email"
                                            onChange={(e: any) =>
                                                setEmail(e.target.value)
                                            }
                                        />

                                        <div>
                                            <Input
                                                value={phone}
                                                onChange={(e: any) =>
                                                    setPhone(e)
                                                }
                                                className="phone"
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <StyledInput
                                            type="text"
                                            value={title}
                                            placeholder="Subject of your request"
                                            onChange={(e: any) =>
                                                setTitle(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            value={details}
                                            placeholder="Give us more details on your project"
                                            onChange={(e: any) =>
                                                setDetails(e.target.value)
                                            }
                                        />
                                    </div>
                                    <small>
                                        By clicking Send you give consent to
                                        processing your data
                                    </small>
                                    <div
                                        className="btn"
                                        onClick={handleContact}
                                    >
                                        Send
                                    </div>
                                </div>
                                <div className="contact">
                                    <div className="bookcall">
                                        <h3>Book an Exploratory Call</h3>
                                        <span>
                                            Do not have any specific task for us
                                            in mind but our skills seem
                                            interesting?
                                            <br />
                                            <br />
                                            Get a quick Apriorit intro to better
                                            understand our team capabilities.
                                        </span>
                                        <div>Book time slot</div>
                                    </div>
                                    <div className="info">
                                        <h3>Contact Us</h3>
                                        <div>
                                            <div>
                                                <div>
                                                    <Phone size={24} />
                                                </div>
                                                <span>+86 13717701687</span>
                                            </div>
                                            <div>
                                                <div>
                                                    微信
                                                </div>
                                                <span>
                                                    13717701687
                                                </span>
                                            </div>
                                            <div>
                                                <div>
                                                    <Address size={24} />
                                                </div>
                                                <span>
                                                    重庆市渝中区石油路1号12栋17-1, 中国
                                                </span>
                                            </div>
                                            {/* <div>
                                                <div>
                                                    <Apartment size={24} />
                                                </div>
                                                <span>
                                                    D-U-N-S number: 117063762
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="footer">
                            {/* <div>
                                <div>
                                    <Link to="/">
                                        <IoLogoLinkedin />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                        <IoLogoYoutube />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                        <IoLogoTwitter />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                        <IoLogoFacebook />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                        <IoLogoGithub />
                                    </Link>
                                </div>
                            </div> */}
                            <div>
                                <span>© 2022 重庆妙丙文化传播公司</span>
                            </div>
                        </div>
                    </div>
                )}
            />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Layout;
