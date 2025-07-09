import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage'
import TreatmentsPage from './Pages/TreatmentsPage'
import BranchesPage from './Pages/BranchesPage'
import DoctorsPage from './Pages/DoctorsPage'
// import PatientLogin from './Pages/PatientLogin'
// import PatientSignup from './Pages/PatientSignup'
// import PatientDashboard from './Pages/PatientDashboard'
import ComingSoon from './components/ComingSoon'
import SecureAccess from './Pages/SecureAccess';
// import DoctorLogin from './Pages/DoctorLogin';
// import DoctorDashboard from './Pages/DoctorDashboard'
// import ReceptionistLogin from './Pages/ReceptionistLogin'
// import ReceptionistDashboard from './Pages/ReceptionistDashboard'
import RoleProtectedRoute from './components/RoleProtectedRoute';



function App() {


  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/treatments" element={<TreatmentsPage/>} />
        <Route path="/branches" element={<BranchesPage/>} />
        <Route path="/doctors" element={<DoctorsPage/>} />
        <Route path='coming-soon' element={<ComingSoon/>}></Route>
        <Route path="/patients/login" element={<ComingSoon/>} />
        <Route path="/patients/signup" element={<ComingSoon/>} />
        <Route
          path="/patient/dashboard"
          element={
            <RoleProtectedRoute allowedRoles={["patient"]}>
              <ComingSoon />
            </RoleProtectedRoute>
          }
        />
        <Route path="/secure-login" element={<SecureAccess />} />
        <Route path="/doctors/login" element={<ComingSoon />} />
        <Route path="/receptionists/login" element={<ComingSoon/>} />
        <Route
          path="/dashboard-doctor"
          element={
            <RoleProtectedRoute allowedRoles={['doctor']}>
              <ComingSoon />
            </RoleProtectedRoute>
          }
        >
        </Route>
        <Route
          path="/dashboard-receptionist"
          element={
            <RoleProtectedRoute allowedRoles={['receptionist']}>
              <ComingSoon />
            </RoleProtectedRoute>
          }
        />

      </Routes>
    </Router>
    </>
  )
}

export default App
