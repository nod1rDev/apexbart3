import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    id: 1,
    name: "Ali Valiyev",
    comment: "Xizmatdan juda mamnunman, tavsiya qilaman!",
    stars: 5,
    date: "2025-01-08",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "Dilnoza Karimova",
    comment: "Juda qulay va tezkor xizmat.",
    stars: 4,
    date: "2025-01-07",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    name: "Bekzod Abdullayev",
    comment: "Menga yoqdi, yana foydalanaman!",
    stars: 5,
    date: "2025-01-06",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    name: "Shaxzoda Murodova",
    comment: "Xizmat yaxshi, lekin ba'zi kamchiliklar bor.",
    stars: 3,
    date: "2025-01-05",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const CommentSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Chap va o'ngdagi arrowlarni olib tashlash
    responsive: [
      {
        breakpoint: 768, // Mobil format uchun
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // Mobil versiyada autoplay o'chiriladi
          arrows: false, // Mobil versiyada ham arrowlarni olib tashlash
        },
      },
    ],
  };

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <div className="w-full mx-auto px-4 py-[90px] text-[#f9f4e8] bg-[#1f1f1f]">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-[#f9f4e8] ">
          <span className="text-red-500">Client</span> Comments
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Discover what our clients say about their experiences and the quality
          of our services.
        </p>
      </div>

      <Slider {...sliderSettings}>
        {comments.map((comment) => (
          <div key={comment.id} className="p-6">
            <div className="card bg-[#1f1f1f] shadow-lg  rounded-lg overflow-hidden">
              <video
                className="w-full h-56 object-cover mb-4 cursor-pointer rounded-t-lg"
                src={comment.video}
                controls={false}
                onClick={() => openModal(comment.video)}
              ></video>
              <div className="card-body p-6">
                <h2 className="card-title text-[#f9f4e8] text-lg font-bold mb-2">
                  {comment.date}
                </h2>
                <p className="text-[#f9f4e8] text-base leading-relaxed mb-4">
                  {comment.comment}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#f9f4e8]">
                    {comment.name}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(comment.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] rounded-lg p-4 w-11/12 max-w-2xl text-[#f9f4e8]">
            <button
              className="text-red-500 text-xl font-bold mb-4"
              onClick={closeModal}
            >
              &times;
            </button>
            <video
              className="w-full h-auto"
              src={currentVideo}
              controls
              autoPlay
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSlider;
