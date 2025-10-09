import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
          <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>

  );
}

export default App;
