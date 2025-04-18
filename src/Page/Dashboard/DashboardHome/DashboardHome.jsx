import React from 'react'
import CandidateOverview from '../Candidate/CandidateOverview'
import { useState } from 'react'
import EmployeOverview from '../Employe/EmployeOverview'
import AdminOverview from '../Admin/AdminOverview'

const DashboardHome = () => {

  // const [userRole] = useState("candidate");
  const [userRole] = useState("employe");
  // const [userRole] = useState("admin");

  if(userRole === "admin"){
    return <AdminOverview/>
  }else if(userRole === "employe"){
    return <EmployeOverview/>
  }else{
   return <CandidateOverview/>
  }
 
}

export default DashboardHome