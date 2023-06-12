import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Settings from "./pages/ssettings/Settings";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import { BrowserRouter as Router, Routes,
Route,
Link
 } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
        <Routes>
        <Route >

          <Route index path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settingd" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
