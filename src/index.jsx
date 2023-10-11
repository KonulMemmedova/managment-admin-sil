import React from "react";
import ReactDOMClient from "react-dom/client";
import { RequestList } from "./screens/RequestList";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RequestList />);
