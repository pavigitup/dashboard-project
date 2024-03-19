import { Route , Routes} from "react-router-dom"
import Home from "./Component/Home";
import LoginForm from "./Component/LoginForm";
import './App.css';
import NotFound from "./Component/NotFound";

const App = () => (
      <>
      <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )

export default App;
