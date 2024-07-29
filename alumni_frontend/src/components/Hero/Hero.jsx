import React from "react";

import videoHero from "../../assets/tdtu_vd.mp4";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900">
      {/* Video */}
      <div className="w-full h-full ">
        <video
        className="pointer-events-none select-none inset-0 object-cover"
        autoPlay
        loop
        muted
        >
        <source
          src={videoHero}
          type="video/mp4"
        />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-blue-5">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 mt-10 ">
            <span className="text-blue-1">MEETING</span>{" "}
            <span className="text-white">THE MOMENT,</span>
          </h1>
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">TOGETHER.</span>
          </h2>
          <div className=" text-white rounded-lg shadow-md px-6 py-8 m-28">
            <h3 className="text-xl font-semibold mb-4">Ton Duc Thang University</h3>
            <p className="text-white">
            Khoa CNTT đã và đang là một trong những khoa có uy tín về giảng dạy và nghiên cứu khoa học của trường Đại học Tôn Đức Thắng. Khoa CNTT có nhiều chương trình hợp tác đào tạo với các công ty lớn như IBM, LogiGear, FSOFT nên sinh viên có khả năng thực hành tốt. Chất lượng đào tạo của Khoa được khẳng định với trên 90 % sinh viên ra trường có việc làm đúng chuyên môn. Nhiều cựu sinh viên của Khoa hiện là những chuyên gia thành đạt, giữ các chức vụ quan trọng trong các doanh nghiệp phát triển phần mềm, các công ty có sử dụng hệ thống thông tin như trưởng dự án hay giám đốc kỹ thuật.
            </p>
            <button className="mt-4 px-8 py-3 text-white font-bold rounded-md
             bg-blue-2 hover:bg-blue-3 focus:ring-4 focus:ring-blue-300 text-sm lg:px-5  lg:py-2.5 sm:mr-2 lg:mr-0">
              Learn more about Ton Duc Thang University
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
