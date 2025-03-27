import { Routes, Route, useParams } from "react-router-dom"; // ❌ Yahan Router import na karein
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import AddJob from "./pages/AddJob";
import AllJobs from "./pages/AllJobs";
import EditJob from "./pages/EditJob";
import MyApplications from "./pages/MyApplications";
import Footer from "./components/Footer";
import ViewSingleApplication from "./components/ViewSingleApplication";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/add-jobs" element={<AddJob />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/edit-jobs" element={<EditJob />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route
          path="/application/:applicationID"
          element={<ViewSingleApplicationWrapper />}
        />
      </Routes>
      <Footer />
    </>
  );
}

const ViewSingleApplicationWrapper = () => {
  const { applicationID } = useParams();
  return <ViewSingleApplication applicationID={applicationID} />;
};
export default App;
