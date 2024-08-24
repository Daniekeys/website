import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";
import NotFound from "./pages/Error/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
     
        {/* Protected Routes */}
        <Route
          path="/"
          element={
           
              <Home />
            
          }
        />
      
        {/* Broken Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
