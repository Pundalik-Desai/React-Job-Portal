import { Routes, Route, useParams } from "react-router-dom";
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
import JobDetails from "./pages/JobDetails"; // ✅ Import JobDetails
import UpdateJob from "./pages/UpdateJob"; // ✅ Import UpdateJob
import JobApplicationDetails from "./pages/JobApplicationDetails";
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
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route
          path="/job-application/:appId"
          element={<JobApplicationDetails />}
        />
        <Route path="/job/:jobId" element={<JobDetailsWrapper />} />{" "}
        {/* ✅ Added JobDetails Route */}
        <Route path="/update-job/:jobId" element={<UpdateJobWrapper />} />{" "}
        {/* ✅ Added UpdateJob Route */}
      </Routes>
      <Footer />
    </>
  );
}

// ✅ Wrapper Component for UpdateJob
const UpdateJobWrapper = () => {
  const { jobId } = useParams();
  return <UpdateJob jobId={jobId} />;
};

// ✅ Wrapper Component for JobDetails
const JobDetailsWrapper = () => {
  const { jobId } = useParams();
  return <JobDetails jobId={jobId} />;
};

const ViewSingleApplicationWrapper = () => {
  const { applicationID } = useParams();
  return <ViewSingleApplication applicationID={applicationID} />;
};

export default App;
