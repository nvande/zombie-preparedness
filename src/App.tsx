import React, { useLayoutEffect } from "react";

import "./assets/uswds/css/styles.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Preparedness101 from "./pages/Preparedness101";
import Signuppage from "./pages/Signuppage";

type WrapperProps = {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const location = useLocation();
  
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <div>{children}</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/preparedness101" element={<Preparedness101 />} />
            <Route path="/signup" element={<Signuppage />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
};

export default App;
