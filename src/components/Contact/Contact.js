import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mx-auto  max-w-[1100px] my-12 ">
      <h1 className="section-header text-start text-4xl font-bold text-secondary">
        Get In Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="show-info">
          <div className="hotline">
            <h2 className="text-xl font-semibold text-accent tracking-tighter">
              Hot Line Number
            </h2>
            <div className="number flex items-center">
              <PhoneIcon className="h-5 mr-4" />
              <p className="tracking-tighter">+8801354632236</p>
            </div>
          </div>
          <div className="hotline mt-6">
            <h2 className="text-xl font-semibold text-accent tracking-tighter">
              Hot Mail
            </h2>
            <div className="number flex items-center">
              <MailIcon className="h-5 mr-4" />
              <p className="tracking-tighter">mdtanviralamht731@gmail.com</p>
            </div>
          </div>
          <div className="social flex mt-6 ">
            <a
              className="btn-secondary mr-4 py-4 px-8 rounded-lg text-base-100 btn uppercase "
              target="_blank"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
            <a
              className="btn-secondary mr-4 py-4 px-8 rounded-lg text-base-100 btn uppercase "
              target="_blank"
              href="https://www.twitter.com/"
            >
              Twitter
            </a>
            <a
              className="btn-secondary mr-4 py-4 px-8 rounded-lg text-base-100 btn uppercase "
              target="_blank"
              href="https://www.google.com/"
            >
              Google Plus
            </a>
          </div>
        </div>
        <div className="contact-form">
          <input
            type="text"
            placeholder="Name"
            class="input input-secondary border-secondary w-full mb-6 "
          />
          <input
            type="text"
            placeholder="Email"
            class="input input-secondary  border-secondary w-full mb-6"
          />
          <textarea
            class="textarea textarea-secondary mb-6 w-full"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
