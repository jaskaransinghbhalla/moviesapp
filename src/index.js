// Importing React and React Document Object Model
import React from "react";
import { createRoot } from "react-dom/client";

// Importing App -> First App Created by us.
import App from "./App.js";

// Creating a root.
const container = document.getElementById("root");
const root = createRoot(container);

// Rendering the App component.
root.render(<App />);
