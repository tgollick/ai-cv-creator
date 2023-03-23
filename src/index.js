import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="594491963050-8mmr898kg1ru7kb2u17nuqtafrv1ee6c.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
