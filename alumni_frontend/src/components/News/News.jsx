import React from 'react'

function NewsCard({ imageSrc, title, date, description, buttonText }) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={imageSrc} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">{title}</h2>
          <p className="font-light text-gray-500">{date}</p>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions mt-4">
            <button className=" block mx-auto px-8 py-3 text-white font-bold rounded-md
              bg-blue-3 hover:bg-blue-4 focus:ring-4 focus:ring-blue-4 text-sm"
             >{buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }


const News = () => {
    const news = [
        {
          imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
          title: 'Hình ảnh Lễ tốt nghiệp và trao bằng đợt 2 năm 2023',
          date: '30-11-2023',
          description: 'Thông báo hình ảnh chụp Lễ tốt nghiệp và trao bằng đợt 2 năm 2023 Thân gửi các tân cử nhân, tân kỳ...',
          buttonText: 'Xem thêm'
        },
        {
          imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
          title: 'Thư mời cựu SV tham gia TDTU Career Day 2023',
          date: '24-11-2023',
          description: 'TDTU CAREER DAY 2023 với hàng ngàn cơ hội việc làm, thực tập đến từ các doanh nghiệp hoạt động trong lĩnh vực Công nghệ...',
          buttonText: 'Xem thêm'
        },
        {
          imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
          title: 'Mời cựu sinh viên hỗ trợ khảo sát sự hài lòng với sinh viên tốt',
          date: '15-09-2023',
          description: 'Thân gửi các bạn cựu sinh viên TDTU! Hàng năm, TDTU đều lấy ý kiến của các bên sử dụng lao động đối với sinh...',
          buttonText: 'Xem thêm'
        },
        {
            imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
            title: 'Hình ảnh Lễ tốt nghiệp và trao bằng đợt 2 năm 2023',
            date: '30-11-2023',
            description: 'Thông báo hình ảnh chụp Lễ tốt nghiệp và trao bằng đợt 2 năm 2023 Thân gửi các tân cử nhân, tân kỳ...',
            buttonText: 'Xem thêm'
          },
          {
            imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
            title: 'Thư mời cựu SV tham gia TDTU Career Day 2023',
            date: '24-11-2023',
            description: 'TDTU CAREER DAY 2023 với hàng ngàn cơ hội việc làm, thực tập đến từ các doanh nghiệp hoạt động trong lĩnh vực Công nghệ...',
            buttonText: 'Xem thêm'
          },
          {
            imageSrc: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
            title: 'Mời cựu sinh viên hỗ trợ khảo sát sự hài lòng với sinh viên tốt',
            date: '15-09-2023',
            description: 'Thân gửi các bạn cựu sinh viên TDTU! Hàng năm, TDTU đều lấy ý kiến của các bên sử dụng lao động đối với sinh...',
            buttonText: 'Xem thêm'
          },
      ];
  return (
    <div className="container mx-auto px-4 py-16">
        <h2 className='text-3xl font-bold text-center mb-8 text-blue-1'>News</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {news.map((news, index) => (
            <NewsCard key={index} {...news} />
            ))}
	    </div>
        <div className="card-actions mt-8">
            <button className=" block mx-auto px-8 py-3 text-white font-bold rounded-md
            bg-blue-3 hover:bg-blue-4 focus:ring-4 focus:ring-blue-4 text-sm "
             >Xem thêm
            </button>
        </div>
    </div>
  )
}

export default News
