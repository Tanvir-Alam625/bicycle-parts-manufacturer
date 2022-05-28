import React from "react";
import MyHelmet from "../MyHelmet/MyHelmet";

const Blog = () => {
  return (
    <div className="my-12  max-w-[1100px] mx-auto px-2">
      <MyHelmet title={`Blog`} />
      <h2 className="section-header  text-start text-4xl font-bold text-secondary">
        My Blogs
      </h2>
      <div className="ask-1">
        <h3 className="text-2xl mt-12 text-accent capitalize font-mono">
          1. how will you improve th performance of a React application?
        </h3>
        <p className="text-xs text-accent ">
          <span className="text-secondary font-bold">Answer:</span>
          Optimizing application performance is key for developers who are
          mindful of keeping a user’s experience positive to keep them on an app
          and engaged. Before optimizing a React application, we must understand
          how React updates its UI and how to measure an app’s performance. This
          makes it easy to solve any React performance problems. In React
          applications, we are guaranteed a very fast UI by default. However, as
          an application grows, developers may encounter some performance
          issues. In this guide, we will discuss five important ways to optimize
          the performance of a React application, including pre-optimization
          techniques. These include:
        </p>
        <h3 className="text-2xl mt-12 text-accent capitalize font-mono">
          2.how does prototypal inheritance work?
        </h3>
        <p className="text-xs text-accent ">
          <span className="text-secondary font-bold">Answer:</span>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object.getPrototypeOf and Object.
        </p>
        <h3 className="text-2xl mt-12 text-accent capitalize font-mono">
          3. what is unit test in JS
        </h3>
        <p className="text-xs text-accent ">
          <span className="text-secondary font-bold">Answer:</span>
          It is an open-source testing framework built on JavaScript, designed
          majorly to work with React and React Native-based web applications.
          Often, unit tests are not very useful when run on the frontend of any
          software. This is mostly because unit tests for the front-end require
          extensive, time-consuming configuration. This complexity can be
          reduced to a great extent with the Jest framework.
        </p>
        <h3 className="text-2xl mt-12 text-accent capitalize font-mono">
          4. you have an array of products ,each object has a name price,
          description ,etc how will you implement a search to find products by
          name
        </h3>
        <p className="text-xs text-accent ">
          <span className="text-secondary font-bold">Answer:</span>
          By mapping an array, with the help of the method, all the elements
          that come with the property of each element, if its value matches with
          that, then that element must be shown.
        </p>
      </div>
    </div>
  );
};

export default Blog;
