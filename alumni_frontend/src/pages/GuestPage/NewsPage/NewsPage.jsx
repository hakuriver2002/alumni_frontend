import React from 'react'
import Navbar from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgNews from "../../../assets/chuyendoiso.jpg"
import imgNe from "../../../assets/mta-vietnam-2024.jpg"


const NewsPage = () => {
  const newsData = [
    {
      title: "Top 10 Web App Ideas That Will Work Wonders In 2024",
      image: imgNews, // Replace with your actual image path
      link: "/web-app-ideas", // Replace with your actual link
    },
    {
      title: "Top 5 Advantages of Passwordless Authentication",
      image: imgNews, // Replace with your actual image path
      link: "/passwordless-auth", // Replace with your actual link
    },
    {
      title: "An Overview of the Top Features of Corporate Wellness Programs",
      image: imgNews, // Replace with your actual image path
      link: "/corporate-wellness", // Replace with your actual link
    },
    {
      title: "Expert Picks for the Best Golf Clubs",
      image: imgNews, // Replace with your actual image path
      link: "/golf-clubs", // Replace with your actual link
    },
    {
      title: "What is B2B SaaS: Top 9 B2B SaaS Companies in the World",
      image: imgNews, // Replace with your actual image path
      link: "/b2b-saas", // Replace with your actual link
    },
  ];
  
  return (
    <>
      <Navbar/>
      <section className='container py-12 max-w-full bg-gray-200 border-gray-400'> 
        <div className="mx-32">
          <h2 className='text-6xl font-bold mb-1 ml-3 uppercase'>News</h2>
        </div>
      </section>
      <section className="bg-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={item.link}>
                <img src={item.image} alt={item.title} className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-8 px-6 mt-10 md:px-8 lg:px-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 ">Most Popular News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Breaking News: Major Earthquake Hits West Coast
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tech Giant Announces Major Acquisition
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sports Team Wins Championship in Dramatic Fashion
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 4"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Celebrity Announces Surprise Pregnancy
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 5"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Government Announces New Economic Policies
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 px-6 mt-10 md:px-8 lg:px-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 ">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Breaking News: Major Earthquake Hits West Coast
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tech Giant Announces Major Acquisition
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sports Team Wins Championship in Dramatic Fashion
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 4"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Celebrity Announces Surprise Pregnancy
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 5"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Government Announces New Economic Policies
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sports Team Wins Championship in Dramatic Fashion
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 4"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Celebrity Announces Surprise Pregnancy
              </h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imgNe}
              alt="News Article 5"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Government Announces New Economic Policies
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-8">
          <a
            href='/news'
            className='text-black bg--400 border-solid border-2 border-gray-700 hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0'
          >Load More</a>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default NewsPage
