import { IoLocation, IoCall, IoMail } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div className="py-6 bg-gradient-to-t from-purple-400 to-purple-600 bg-opacity-50 px-2">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid z-20 p-2 md:p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoLocation className=" text-purple-600" size="2rem" />
            <h2 className="text-sm font-semibold text-slate-800 uppercase m-0 p-0">
              our Main Office
            </h2>
            <p className="text-xs text-slate-500">Dhanmondi 32, Dhaka</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoCall className=" text-purple-600" size="2rem" />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">
              Phone Number
            </h2>
            <p className="text-xs text-slate-500">(980)349 340902</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <FaFax className=" text-purple-600" size="2rem" />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">
              Fax
            </h2>
            <p className="text-xs text-slate-500">1-234-567-8900</p>
          </div>
          <div className="p-4 gap-2 bg-base-100 rounded shadow flex flex-col justify-center items-center">
            <IoMail className=" text-purple-600" size="2rem" />
            <h2 className="text-sm font-semibold text-slate-800 uppercase">
              Mail
            </h2>
            <p className="text-xs text-slate-500">hello@example.com</p>
          </div>
        </div>
        <div className="p-4 md:p-8 w-full -mt-12 lg:max-w-screen-md rounded bg-primary mx-auto flex flex-col items-center justify-center">
          <div className="mt-4">
            <h1 className="text-xl font-blod text-slate-800 text-center my-2">
              Get In Touch
            </h1>
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
    </div>
  );
};

export default Contact;
