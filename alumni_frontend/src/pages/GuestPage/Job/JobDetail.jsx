import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { CiLocationOn, CiUser, CiCalendar } from "react-icons/ci";
import { AiFillPicture } from "react-icons/ai";
import { FaMoneyBill, FaRegCalendar } from "react-icons/fa";
import { BsExplicitFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const JobDetail = () => {
  const { jobId } = useParams();
  const [jobDetail, setJobDetail] = useState();

  useEffect(() => {
    fetch(`/api/job-posts/${jobId}`)
    .then(res => res.json())
    .then(data => setJobDetail(data.data))
    .catch(err => console.log(err))
  }, [])

  console.log(jobDetail);
  return (
    <div>
      <Navbar/>
      <section>
        <div class="flex flex-col md:flex-row p-6 space-x-4">
          {/* <!-- Job Posting Details --> */}
          <div class="w-full md:w-2/3 bg-white border border-gray-200 rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold mb-2"> {jobDetail?.jobTitle} </h2>
            <p class="text-lg font-semibold text-gray-800"> {jobDetail?.company} </p>
            <div class="flex flex-wrap space-x-4 mb-4">
              <CiLocationOn/>
              <p class="text-gray-600">
                {jobDetail?.location}
              </p>
              <CiUser/>
              <p class="text-gray-600"> {jobDetail?.position} </p>
              <FaMoneyBill/>
              <p class="text-gray-600"> {jobDetail?.salary} </p>
              <BsExplicitFill/>
              <p class="text-gray-600">+ {jobDetail?.experience} </p>
            </div>
            <div class="flex flex-wrap space-x-2 mb-4">
              <span class="bg-blue-4 text-white rounded-full px-3 py-1 text-sm"> {jobDetail?.skills[0]} </span>
              <span class="bg-blue-4 text-white rounded-full px-3 py-1 text-sm"> {jobDetail?.skills[1]} </span>
              <span class="bg-blue-4 text-white rounded-full px-3 py-1 text-sm"> {jobDetail?.skills[2]} </span>
            </div>
            <p class="text-gray-800">
              {jobDetail?.jobDetail}
            </p>
            <p class="text-gray-800">Responsibilities:</p>
            <ul class="list-disc list-inside mb-4">
                <li>Design, develop, and maintain web applications.</li>
                <li>Write clean, scalable, and efficient code.</li>
                <li>Participate in daily stand-ups and sprint planning.</li>
                <li>Debug and troubleshoot software issues.</li>
                <li>Stay updated with emerging technologies and industry trends.</li>
            </ul>
            <div className='flex flex-row'>
              <CiCalendar className='mr-3'/>
                <p class="text-red-500 font-semibold">
                  Status: {jobDetail?.expiredAt} 
                </p>
            </div>
            <button type="button" class="mt-4 inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-blue-1 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Apply for Job</button>
          </div>

          {/* <div class="flex-1 bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4">Software Engineer</h2>
              <p class="text-gray-700 mb-2">Company: Tech Innovations Inc.</p>
              <p class="text-gray-700 mb-4">Location: Remote</p>
              <h3 class="text-xl font-semibold mb-2">Job Description</h3>
              <p class="text-gray-600 mb-4">We are looking for a skilled Software Engineer to join our dynamic team. You will be responsible for developing high-quality software solutions.</p>
              
              <h3 class="text-xl font-semibold mb-2">Responsibilities</h3>
              <ul class="list-disc list-inside mb-4">
                  <li>Develop and maintain software applications.</li>
                  <li>Collaborate with cross-functional teams.</li>
                  <li>Participate in code reviews and maintain code quality.</li>
              </ul>
              
              <h3 class="text-xl font-semibold mb-2">Requirements</h3>
              <ul class="list-disc list-inside mb-4">
                  <li>Bachelor's degree in Computer Science or related field.</li>
                  <li>Proven experience in software development.</li>
                  <li>Strong knowledge of programming languages such as Java, Python, or JavaScript.</li>
              </ul>
              
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Apply Now</a>
          </div> */}

          {/* <!-- Suggested Similar Jobs --> */}
          <div class="w-full md:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-4 md:mt-0">
              <h2 class="text-xl font-bold mb-4">Gợi ý công việc</h2>
              <ul class="space-y-4">
                  <li>
                      <a href="#" class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                          <h3 class="font-semibold">Frontend Developer</h3>
                          <p class="text-gray-600">Company: Web Solutions Ltd.</p>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                          <h3 class="font-semibold">Backend Developer</h3>
                          <p class="text-gray-600">Company: Cloud Services Inc.</p>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                          <h3 class="font-semibold">Full Stack Developer</h3>
                          <p class="text-gray-600">Company: Innovative Tech Co.</p>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                          <h3 class="font-semibold">Full Stack Developer</h3>
                          <p class="text-gray-600">Company: Innovative Tech Co.</p>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                          <h3 class="font-semibold">Full Stack Developer</h3>
                          <p class="text-gray-600">Company: Innovative Tech Co.</p>
                      </a>
                  </li>
              </ul>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  )
}

export default JobDetail
