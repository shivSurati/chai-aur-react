import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  );
}

const anotherUser = "chai aur react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit GOOGLE",
  anotherUser
);

ReactDom.createRoot(document.getElementById("root")).render(reactElement);
