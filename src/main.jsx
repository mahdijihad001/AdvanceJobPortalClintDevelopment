import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home/Home.jsx'
import JobDetails from './Page/FeaturedJobs/JobDetails.jsx'
import LogIn from './Page/Auth/LogIn.jsx'
import SingUp from './Page/Auth/SingUp.jsx'
import ArticlesDescription from './Page/Articles/ArticlesDescription.jsx'
import AllJobs from './Page/FeaturedJobs/AllJobs.jsx'
import Layout from './Page/Dashboard/Layout/Layout.jsx'
import DashboardHome from './Page/Dashboard/DashboardHome/DashboardHome.jsx'
import CandidateProfile from './Page/Dashboard/Candidate/CandidateProfile.jsx'
import AppliedJobs from './Page/Dashboard/Candidate/AppliedJobs.jsx'
import CandidateBookmark from './Page/Dashboard/Candidate/CandidateBookmark.jsx'
import PostNewJob from './Page/Dashboard/Employe/PostNewJob.jsx'
import ManageJobs from './Page/Dashboard/Employe/ManageJobs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Website Ui */}
        <Route element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/singUp' element={<SingUp/>}/>
          <Route path='/jobDetails' element={<JobDetails/>}/>
          <Route path='/ariicleDes' element={<ArticlesDescription/>} />
          <Route path='/alljobs' element={<AllJobs/>} />
        </Route>
        {/* Dashboard Ui */}
        <Route path='/dashboard' element={<Layout/>}>
          <Route index element={<DashboardHome/>} />
          <Route path='candifateProfile' element={<CandidateProfile/>} />
          <Route path='appliedJobs' element={<AppliedJobs/>} />
          <Route path='candidateBookmark' element={<CandidateBookmark/>}/>
          <Route path='postJob' element={<PostNewJob/>} />
          <Route path='manageJob' element={<ManageJobs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
