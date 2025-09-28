import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const preloader = document.getElementById("preloader");

const renderApp = () => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.addEventListener("load", () => {
  if (preloader) {
    preloader.style.opacity = "0"; // fade-out
    setTimeout(() => {
      preloader.style.display = "none";
      rootElement.style.display = "block";
      renderApp();
    }, 600);
  } else {
    renderApp();
  }
});
