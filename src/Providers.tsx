import React from "react";
import { BrowserRouter } from "react-router-dom";

interface ProvidersProps {}
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
