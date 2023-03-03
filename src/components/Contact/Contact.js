
import { IoLocation, IoCall,IoMail } from "react-icons/io5";
import {FaFax} from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div className="py-6 bg-purple-500 bg-opacity-50 px-2">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid z-20 p-2 md:p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoLocation className=" text-purple-600" size='2rem' />
            <h2 className="text-sm font-semibold text-slate-800 uppercase m-0 p-0">our Main Office</h2>
            <p className="text-xs text-slate-500">Dhanmondi 32, Dhaka</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoCall className=" text-purple-600" size='2rem' />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">Phone Number</h2>
            <p className="text-xs text-slate-500">(980)349 340902</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <FaFax className=" text-purple-600" size='2rem' />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">Fax</h2>
            <p className="text-xs text-slate-500">1-234-567-8900</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoMail className=" text-purple-600" size='2rem' />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">Mail</h2>
            <p className="text-xs text-slate-500">hello@example.com</p>
          </div>
        </div>
        <div className="p-4 md:p-8 w-full -mt-12 lg:max-w-screen-md rounded bg-primary mx-auto flex flex-col items-center justify-center">
         <div className="mt-4">
          <h1 className="text-xl font-blod text-slate-800 text-center my-2">Get In Touch</h1>
         </div>
         <input
            type="text"
            placeholder="Name"
            className="input input-secondary border-secondary w-full mb-6 "
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-secondary  border-secondary w-full mb-6"
          />
          <textarea
            className="textarea textarea-secondary mb-6 w-full"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div>
      {/* <h1 className="section-header text-start text-4xl font-bold text-secondary">
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
            className="input input-secondary border-secondary w-full mb-6 "
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-secondary  border-secondary w-full mb-6"
          />
          <textarea
            className="textarea textarea-secondary mb-6 w-full"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
