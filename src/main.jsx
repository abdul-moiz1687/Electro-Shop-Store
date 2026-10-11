import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/CardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>


    <CardProvider>
      <App />
    </CardProvider>
   

  </BrowserRouter>
);