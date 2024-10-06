import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import OptionPage from "./Pages/Options";
import Homepage from "./Pages/Homepage";
import EducationForm from "./Pages/EducationForm";
import AllEducation from "./Pages/AllEducation";
import SkillsForm from "./Pages/SkillsForm";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ProjectList from "./Pages/ProjectList";
import ChatbotPage from "./Pages/ChatbotPage";
import AllSkills from "./Pages/AllSkills";
import Competitions from "./Pages/Competitions";
import BlogList from "./Pages/BlogList";
import BlogForm from "./Pages/BlogForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Register}></Route>
          <Route path="/mydashboard" Component={Dashboard} />
          <Route path="/chatbot" Component={ChatbotPage} />
          <Route path="/option/skills/new" Component={SkillsForm} />
          <Route path="/option/skills/all" Component={AllSkills} />
          <Route path="/option/blogs/all" Component={BlogList}/>
          <Route path="/option/blogs/new" Component={BlogForm}/>

          <Route path="/option/competitions/new" Component={Competitions} />
          <Route path="/option/education/new" Component={EducationForm} />
          <Route path="/education" Component={AllEducation} />
          <Route path="/projects" Component={ProjectList} />
          <Route path="/option/:option" element={<OptionPage />} />
          <Route path="/" Component={Homepage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
