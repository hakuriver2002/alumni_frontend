import React from 'react'
import { Link } from 'react-router-dom'


const Alumni = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="container grid gap-8 px-1 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-1">Meet Our Alumni</h2>
          <p className="mx-auto max-w-[750px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our alumni have gone on to do amazing things. Learn more about their journeys.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-between rounded-lg border bg-gray-100 shadow-md p-6 transition-all hover:shadow-2xl">
            <img
              alt="Alumni Profile"
              className="mb-4 rounded-full"
              height={120}
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              style={{
                aspectRatio: "120/120",
                objectFit: "cover",
              }}
              width={120}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-600">Software Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John is a software engineer at a leading tech company. He credits his time at our university for helping
                him develop the skills he needed to succeed.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between rounded-lg border bg-gray-100 shadow-md p-6 transition-all hover:shadow-2xl">
            <img
              alt="Alumni Profile"
              className="mb-4 rounded-full"
              height={120}
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              style={{
                aspectRatio: "120/120",
                objectFit: "cover",
              }}
              width={120}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-600">Computer Networks</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane is a successful entrepreneur who started her own e-commerce business. She credits the
                entrepreneurship program at our university for giving her the skills and confidence to start her own
                company.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between rounded-lg border bg-gray-100 shadow-md p-6 transition-all hover:shadow-2xl">
            <img
              alt="Alumni Profile"
              className="mb-4 rounded-full"
              height={120}
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              style={{
                aspectRatio: "120/120",
                objectFit: "cover",
              }}
              width={120}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Harry Williams</h3>
              <p className="text-gray-500 dark:text-gray-600">Data Science</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Michael is a research scientist at a leading university. He credits the strong research program at our
                university for helping him develop the skills he needed to succeed in his field.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between rounded-lg border bg-gray-100 shadow-md p-6 transition-all hover:shadow-2xl">
            <img
              alt="Alumni Profile"
              className="mb-4 rounded-full"
              height={120}
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              style={{
                aspectRatio: "120/120",
                objectFit: "cover",
              }}
              width={120}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Emily Davis</h3>
              <p className="text-gray-500 dark:text-gray-600">Information System</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Emily is a social worker who works with underprivileged communities. She credits the social work program
                at our university for giving her the skills and passion to make a difference in her community.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" block mx-auto px-8 py-3 text-white font-bold rounded-md
          bg-blue-3 hover:bg-blue-4 focus:ring-4 focus:ring-blue-4 text-sm "
            >Xem thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alumni
