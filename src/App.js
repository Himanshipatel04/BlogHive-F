import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Write from "./pages/Write";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Developers from "./pages/Developers";
import Profile from "./pages/Profile";

function App() {
  return (
   <Router>
       <Header/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/blogs" element={<Blog/>} />
       <Route path="/story" element={<Story/>} />
       <Route path="/write" element={<Write/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/developers" element={<Developers/>} />
      </Routes>
       <Footer/> 
   </Router>
  );
}

export default App;
