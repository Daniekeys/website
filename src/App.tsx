import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./Routes";
import { useEffect } from "react";

function App(): JSX.Element {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="">
      <AppRoutes />
    </div>
  );
}

export default App;
