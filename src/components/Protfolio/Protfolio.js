import React from "react";
import MyHelmet from "../MyHelmet/MyHelmet";
import TanvirImg from "../../image/RR.K.74.SOZAL-TANVIR (1)........jpg";
import Languages from "../../image/skills/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png";
import MERN from "../../image/skills/MERN-logo.png";
import Bootstrap from "../../image/skills/bootstrap-logo-shadow.png";
import TailwindCss from "../../image/skills/download.png";
import DaisyUi from "../../image/skills/logo-4.svg";

const Protfolio = () => {
  return (
    <div className=" font-thin max-w-[1100px] mx-auto my-12">
      <MyHelmet title={`Portfolio`} />
      {/* my info  */}
      <div className="flex flex-col lg:flex-row ">
        <div className="name w-full lg:order-1 order-2 pl-4 flex items-center lg:w-[70%]">
          <div className="name-info pl-4 mt-12 lg:mt-0 ">
            <h1 className="text-secondary lg:text-4xl font-semibold ">
              Md. Tanvir Alam
            </h1>
            <p className="text-secondary text-xl ">
              mdtanviralamht731@gmail.com
            </p>
          </div>
        </div>
        <div className="img flex lg:justify-end justify-center lg:order-1 order-2  items-center w-full lg:w-[70%]">
          <img
            src={TanvirImg}
            alt="tanvir-img"
            className="h-[400px] rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* educational background  */}

      <h2 className=" section-header  my-8 text-secondary text-4xl font-semibold capitalize ">
        educational background
      </h2>
      <div className="flex flex-col md:flex-row mb-28">
        <div className="ssc mr-12">
          <p className="mt-6 text-xl text-secondary ">S.S.C</p>
          <p className="text-xs text-accent">
            From:<small>Haradighi High School </small>
          </p>
        </div>
        <div className="cse">
          <p className="mt-6 text-xl text-secondary ">CSE</p>
          <p className="text-xs text-accent">
            From:<small>Barguna Gov't Polytechnic Institute </small>
          </p>
        </div>
      </div>
      <h2 className=" section-header  my-8 text-secondary text-4xl font-semibold capitalize ">
        my Web development skills
      </h2>
      <div className="skills flex flex-col md:flex-row">
        <div className="lng md:mr-6 mr-0 p-4 border shadow-md rounded-md">
          <h3 className="text-2xl my-4 text-secondary"> Languages</h3>
          <p className="uppercase  text-xl font-bold ">html, css, js</p>
          <img
            src={Languages}
            alt="Languages-img"
            className="h-[200px] rounded-lg"
          />
        </div>
        <div className="library md:ml-6 ml-0 p-4 border shadow-md rounded-md">
          <h3 className="text-2xl my-4 text-secondary"> Libraries</h3>
          <p className="uppercase  text-xl font-bold ">
            Reactjs ,Nodejs, expressjs, Mongodb
          </p>
          <img src={MERN} alt="MERN-img" className="h-[200px] rounded-lg" />
        </div>
      </div>
      {/* html css Javascript , bootstrap tailwindcss daisyUI , react node express mongodb , */}
      <h3 className="text-2xl mb-4  mt-12 text-secondary capitalize">
        {" "}
        framework & component
      </h3>
      <div className="component flex  flex-col md:flex-row">
        <div className="bootstrap m-4 p-4 rounded-lg border shadow-md">
          <img
            src={Bootstrap}
            alt="bootstrap-img"
            className="h-[100px] rounded-lg"
          />
          <p className="uppercase  text-xl font-bold text-center ">Bootstrap</p>
        </div>
        <div className="bootstrap m-4 p-4 rounded-lg border shadow-md">
          <img
            src={TailwindCss}
            alt="Tailwindcss-img"
            className="h-[100px] rounded-lg"
          />
          <p className="uppercase  text-xl font-bold  text-center">
            Tailwindcss
          </p>
        </div>
        <div className="DaisyUi m-4 p-4 rounded-lg border shadow-md">
          <img
            src={DaisyUi}
            alt="DaisyUi-img"
            className="h-[100px] rounded-lg"
          />
          <p className="uppercase  text-xl font-bold text-center ">DaisyUi</p>
        </div>
      </div>
      <h3 className="text-2xl mb-4  mt-12 text-secondary capitalize">
        {" "}
        And More Then
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            Firebase authentication & hoisting
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            StripeJS for payment
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            react helmet async
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">API</h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            React hook form
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            React query
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            react route dom
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">
            react toast
          </h2>
        </div>
        <div className="item p-4 border rounded-md shadow-md ">
          <h2 className="text-xl fon-bold text-secondary capitalize">Axios</h2>
        </div>
      </div>
      <h3 className="section-header text-4xl mb-4  mt-12 text-secondary capitalize">
        {" "}
        My Best Work
      </h3>
      <div className="grid grd-cols-1 md:grid-cols-2 gap-4 my-12">
        <div className="wb flex justify-center items-center px-4  py-8  flex-col border shadow-md">
          <h2 className="text-secondary font-semibold text-xl  capitalize">
            Stone Ware House management
          </h2>
          <a
            href="https://stone-ware-house.web.app/"
            target="_blank"
            className="py-2 px-8   my-6 btn btn-outline btn-secondary"
          >
            Live Site Link
          </a>
        </div>
        <div className="wb flex justify-center items-center px-4  py-8  flex-col border shadow-md">
          <h2 className="text-secondary font-semibold text-xl  capitalize">
            Unique Article
          </h2>
          <a
            href="https://cool-bubblegum-f0f8a9.netlify.app/"
            target="_blank"
            className="py-2 px-8   my-6 btn btn-outline btn-secondary"
          >
            Live Site Link
          </a>
        </div>
        <div className="wb flex justify-center items-center px-4  py-8  flex-col border shadow-md ">
          <h2 className="text-secondary font-semibold text-xl  capitalize">
            Adelaide Hills Convention Center
          </h2>
          <a
            href="https://adelaide-hills-convention-center.netlify.app/"
            target="_blank"
            className="py-2 px-8   my-6 btn btn-outline btn-secondary"
          >
            Live Site Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
