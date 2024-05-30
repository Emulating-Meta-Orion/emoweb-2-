import  { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import logo from "/assets/emofooter.gif";
import { SiGmail } from "react-icons/si";
import { Footer, Button, Textarea, TextInput } from "flowbite-react";
import {  BsGithub } from "react-icons/bs";
import logo1 from "/assets/EMO_LOGO.png";

export const MyFooter = () => {
  useEffect(() => {
    emailjs.init("WV50wayA-xqvN8Ygk");
  }, []);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const textRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'default_service';
    const templateID = 'template_qcb1zis';

    try {
      await emailjs.send(serviceID, templateID, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: textRef.current.value
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email:', error);
    }

    setLoading(false);
  };

  return (
    <Footer className="flex flex-col justify-center items-center px-4 lg:px-14 mx-auto bg-black py-16 mt-" style={{ width: "100%" }}>
      <div className="w-full">
        <div className="grid w-full justify-around sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-10 2xl:mr-4">
            <a className="text-2xl font-semibold flex items-center space-x-3" href="/">
              <img className="w-2xl inline-block items-center" src={logo} alt="Imagem do logo" />
            </a>
            <div className="text-white ml-24">
              <p className="mb-1">Copyright © 2024 EmoDev</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex space-x-6 sm:mt-0 ml-20">
              <img src={logo1} className="w-12 h-8 ml-4 mr-4" alt="Logo" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white " />
              <SiGmail className="bg-white w-7 h-5 ml-4" />
            </div>
          </div>
          <div className="grid md:grid-cols-1 sm:mt-6 ml-20 2xl:ml-0" style={{ width: "50%", marginTop: "1rem important!" }}>
            <Footer.Title title="Contact Us" className="text-white text-4xl mt-3" />
            <form id="form" onSubmit={handleSubmit}>
              <div className="my-2">
                <label htmlFor="name" className="text-white text-2xl">Your Name:</label>
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  ref={nameRef}
                  placeholder="Your name"
                  required
                  className={`w-full h-30 ${nameFocused ? 'bg-blue-300' : ''}`}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                />
              </div>
              <div className="my-2">
                <label htmlFor="email" className="text-white text-2xl">Your Email Address:</label>
                <input
                  id="email"
                  type="email"
                  name="_replyto"
                  placeholder="Your email address"
                  required
                  ref={emailRef}
                  className={`w-full ${emailFocused ? 'bg-blue-300' : ''}`}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
              </div>
              <div className="my-2">
                <label htmlFor="message" className="text-white text-2xl">Your Message:</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  ref={textRef}
                  className={`w-full ${messageFocused ? 'bg-blue-300' : ''}`}
                  onFocus={() => setMessageFocused(true)}
                  onBlur={() => setMessageFocused(false)}
                />
              </div>
              <Button id="button" type="submit" className="bg-customBlue  text-black w-30 mt-4 py-1 rounded border-blue-400">{loading ? 'Sending...' : 'Send'}</Button>
            </form>
          </div>
        </div>
      </div>
    </Footer>
  );
};
