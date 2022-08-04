import MainNavigation from "./layout/MainNavigation";
import {Routes, Route} from "react-router-dom";

import AllCryptos from "./components/AllCryptos";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllCryptos />} />
      </Routes>
    </>
  );
}

export default App;
