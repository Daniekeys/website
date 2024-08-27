import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";
import NotFound from "./pages/Error/NotFound";
import ViewLiveGroup from "./pages/view-group";
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
        <Route
          path="/view-livegroup"
          element={
           
              <ViewLiveGroup />
            
          }
        />
      
        {/* Broken Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
