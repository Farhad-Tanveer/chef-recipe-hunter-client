import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 w-3/4 mb-10 mx-auto gap-2 space-y-3">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Differences between uncontrolled and controlled components
          </h2>
          <p>
            Uncontrolled components: Form data is managed by the DOM, rather
            than by React. Input fields are not bound to any state value in the
            React component. Controlled components: The value of each input
            field is bound to a state value in the React component. When the
            user interacts with the input field, the component updates its
            state.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How to validate React props using PropTypes
          </h2>
          <p>
            PropTypes is a library for React that provides a way to validate the
            props that are passed to a component. To validate React props using
            PropTypes, you can use the prop-types package that comes with React.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Difference between nodejs and express js
          </h2>
          <p>
            Node.js is a runtime environment for running JavaScript code outside
            of the web browser. Express.js is a web framework built on top of
            Node.js, which provides a set of features and tools for building web
            applications and APIs.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            Custom hooks are a way to reuse stateful logic in React components.
            A custom hook is a JavaScript function that starts with the prefix
            "use" and can call other hooks.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
