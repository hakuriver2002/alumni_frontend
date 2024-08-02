import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import useGetJobList from '../../../hooks/useGetJobList'
import JobCard from '../../../components/Job/JobCard'

const JobPage = () => {
  // const [ loading, jobLists ] = useGetJobList();
  const [jobLists, setJobLists] = useState([]);

  useEffect(() => {
    fetch(`/api/job-posts?page=1`)
    .then(res => res.json())
    .then(data => setJobLists(data.data))
    .catch(err => console.log(err))
  }, [])
  // console.log(jobLists)
  
  return (
    <div>
      <Navbar/>

      {/* Job Lists */}
      <section className='container max-w-full py-12 sm:p-6 md:px-40'>
        <div className="grid grid-rows-3 md:grid-rows-2 gap-8 mx-auto px-2"> 
          {jobLists.map((jobs, idx) => (
              <JobCard key={idx} jobs={jobs} />
          ))}
        </div>
        {/* {loading ? <span className='loading loading-spinner mx-auto'></span> : null} */}
      </section>

      <Footer/>
    </div>
  )
}

export default JobPage
