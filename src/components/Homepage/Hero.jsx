"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Play } from "lucide-react";

const slides = [
  {
    image: "/secam1.jpg",
    title: "Soaring Eagle Christians' Assembly and Ministry",
    description:
      "Join us in our journey of faith, worship, and community. Experience a sanctuary of spiritual growth and modern ministry excellence.",
  },
  {
    image: "/secam2.jpg",
    title: "A Place to Grow in Faith and Love",
    description:
      "Discover God's purpose for your life through worship, fellowship, prayer, and the transforming power of His word.",
  },
  {
    image: "/secam3.jpg",
    title: "Building Faith, Strengthening Community",
    description:
      "Come together with us as we grow spiritually, support one another, and share the love of Christ with our community.",
  },
  {
    image: "/secam4.jpg",
    title: "Experience Worship and God's Presence",
    description:
      "Be part of a welcoming family committed to authentic worship, spiritual growth, and making a difference.",
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    adaptiveHeight: false,
  };

  return (
    <section className="w-full px-2 py-2 sm:px-4">
      <div className="relative overflow-hidden rounded-[28px] bg-[#0b1421]">

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="relative flex min-h-[450px] items-center justify-center bg-cover bg-center px-5 py-20 sm:min-h-[500px] md:min-h-[550px] md:px-12"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* LIGHTER DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/15" />

                {/* SOFTER GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/35" />

                {/* HERO CONTENT WITH TEXT SHADOW FOR HIGH READABILITY */}
                <div className="relative z-10 mx-auto w-full max-w-[750px] text-center text-white">

                  <h1 
                    className="mx-auto mb-5 max-w-[700px] font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[58px]"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)" }}
                  >
                    {slide.title}
                  </h1>

                  <p 
                    className="mx-auto mb-8 max-w-[600px] text-sm font-medium leading-relaxed text-white sm:text-base md:text-[15px]"
                    style={{ textShadow: "0 1px 6px rgba(0, 0, 0, 0.8)" }}
                  >
                    {slide.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap items-center justify-center gap-3">

                    <a
                      href="/live"
                      className="inline-flex min-w-[130px] items-center justify-center gap-2 rounded-full border border-[#a47b31] bg-[#a47b31] px-6 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-[#896324]"
                    >
                      <Play size={15} fill="currentColor" />
                      Watch Live
                    </a>

                    <a
                      href="/visit"
                      className="inline-flex min-w-[130px] items-center justify-center rounded-full border border-[#a47b31] bg-white px-6 py-2.5 text-sm font-medium text-[#956d29] shadow-md transition duration-300 hover:bg-[#a47b31] hover:text-white"
                    >
                      Plan a Visit
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>

      {/* SLIDER STYLING */}
      <style jsx global>{`
        .slick-slider {
          margin-bottom: 0;
        }

        .slick-list {
          border-radius: 28px;
          overflow: hidden;
        }

        .slick-slide {
          outline: none;
        }

        .slick-slide > div {
          outline: none;
        }

        .slick-dots {
          bottom: 18px;
          z-index: 20;
        }

        .slick-dots li button:before {
          color: white;
          opacity: 0.7;
          font-size: 9px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        }

        .slick-dots li.slick-active button:before {
          color: #c49a48;
          opacity: 1;
        }

        .slick-prev {
          left: 20px;
          z-index: 20;
        }

        .slick-next {
          right: 20px;
          z-index: 20;
        }

        .slick-prev:before,
        .slick-next:before {
          color: white;
          font-size: 25px;
          opacity: 0.9;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 640px) {
          .slick-prev {
            left: 8px;
          }

          .slick-next {
            right: 8px;
          }

          .slick-dots {
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;