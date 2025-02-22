import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

const categories = [
  { icon: "👤", label: "Personal Cause" },
  { icon: "🚑", label: "Emergency" },
  { icon: "💼", label: "Medical" },
  { icon: "❤️", label: "Transplant" },
  { icon: "👶", label: "Child Health" },
  { icon: "🎗", label: "Cancer" },
  { icon: "🏢", label: "NGO" }, // New category
  { icon: "📚", label: "Education" }, // New category
  { icon: "🐾", label: "Animal Welfare" }, // New category
  { icon: "🌪", label: "Disaster Relief" }, // New category
];

function Category() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="category-slider text-center">
      <h2 className="title">Crowdfunding Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
