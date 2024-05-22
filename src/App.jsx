import { collection, query,where,getDocs, orderBy } from "firebase/firestore";
import {db} from './firebase.config'
import {Card,Header,Navbar,Search,Footer} from './components/index'
import { useEffect, useState } from "react"

function App() {
   
  const [jobs,setJobs]=useState([])
  const [customSearch,setCustomSearch]=useState(false)
  
  const fetchJobs=async()=>{
    setCustomSearch(false)
    const tempData=[]
    const jobsRef= query(collection(db, "jobs"))
    const q=query(jobsRef,orderBy('postedOn','desc'))
    const req = await getDocs(q);
    req.forEach((job) => { 
      tempData.push({...job.data(),id:job.id,postedOn:job.data().postedOn.toDate()}) 
});
setJobs(tempData) 
}

useEffect(()=>{
  fetchJobs()
},[])

const fetchJobsCustom = async(jobCriteria) => {
  setCustomSearch(true);
  const tempJobs = []
  const jobsRef = query(collection(db, "jobs"));
  const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
  const req = await getDocs(q);

  req.forEach((job) => {
    
    tempJobs.push({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate()
    })
  });
  setJobs(tempJobs);
}


 

  return (
    <>
    <Navbar/>
    <Header/>
    <Search fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
        <button onClick={fetchJobs}    className="w-full flex justify-center items-center  mb-2">
          <p className="bg-blue-600 hover:bg-blue-500  hover:scale-105 transition-all ease-out duration-400 px-5 py-2 rounded-md text-white">Clear Filters</p>
        </button>
         
        
      }
    {jobs.map((data)=>(
        <Card key={data.id} {...data}/>
    ))}
    <Footer/>
    </>
  )
}

export default App