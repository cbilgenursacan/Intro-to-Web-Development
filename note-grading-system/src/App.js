import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import LectureControls from './pages/AdminPages/LectureControls';
import Authentication from './pages/Authentication';
import Assignments from './pages/StudentPages/Assignments';
import Assignment from './pages/StudentPages/Assignment';
import CreateAssignment from './pages/ExpertPages/CreateAssignment';
import ProfileSettings from './pages/ProfileSettings';
import ActiveReviews from './pages/StudentPages/ActiveReviews';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/assignments" element={<Assignments/>}/>
          <Route path="/assignments/:id" element={<Assignment/>}/>
          <Route path='/active-reviews' element={<ActiveReviews/>}/>
          <Route path='/create-assignment' element={<CreateAssignment/>}/>
          <Route path='/lecture-controls' element={<LectureControls/>}/>
          <Route path='/authentication' element={<Authentication/>}/>
          <Route path='/profile-settings' element={<ProfileSettings/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
