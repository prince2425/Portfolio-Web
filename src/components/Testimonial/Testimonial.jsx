
import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.jpg";
import Profile5 from "../../assets/profile5.jpg";
import Profile6 from "../../assets/profile3.jpg";   // <-- new image

import { FaStar } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: 1,
    name: "Leslie Alexander",
    title: "CEO, Software Company",
    image: Profile1,
    rating: 5,
    text: "Very professional and skilled developer. Amazing experience working together.",
  },
  {
    id: 2,
    name: "Emma Watson",
    title: "Marketing Lead",
    image: Profile2,
    rating: 4,
    text: "Amazing attention to detail and smooth development process.",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Founder, Startup",
    image: Profile3,
    rating: 5,
    text: "Great frontend skills and clean code structure.",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    title: "UI Designer",
    image: Profile4,
    rating: 5,
    text: "Very responsive and excellent communication.",
  },
  {
    id: 5,
    name: "Michael Brown",
    title: "Business Owner",
    image: Profile5,
    rating: 4,
    text: "Delivered quality work before deadline.",
  },
  // NEW TESTIMONIAL
  {
    id: 6,
    name: "Olivia Chen",
    title: "Product Manager",
    image: Profile6,
    rating: 5,
    text: "Absolutely outstanding work! The frontend is flawless and the delivery was ahead of schedule.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="testimonial">
      <div className="wrapper p-block-9 border-btn">
        {/* Heading */}
        <div className="heading">
          <span className="subtitle">Client Testimonial</span>
          <h2>
            Testimonial That <br />
            <span className="green-text">Speaks To My Result</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="slider-wrapper">
          <Slider {...settings}>
            {testimonialsData.map((review) => (
              <div key={review.id}>
                <div className="testimonial-card">
                  <div className="top-content">
                    <div className="profile">
                      <img src={review.image} alt={review.name} />
                    </div>
                    <div>
                      <h4>{review.name}</h4>
                      <p className="designation">{review.title}</p>
                      <div className="rating">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <FaStar key={i} className="rating-star" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-text">{review.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;











// import React from "react";
// import Slider from "react-slick";
// import "./Testimonial.css";

// import Profile1 from "../../assets/profile1.jpg";
// import Profile2 from "../../assets/profile2.jpg";
// import Profile3 from "../../assets/profile3.jpg";
// import Profile4 from "../../assets/profile4.jpg";
// import Profile5 from "../../assets/profile5.jpg";

// import { FaStar } from "react-icons/fa6";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile1,
//     rating: 5,
//     text: "Very professional and skilled developer. Amazing experience working together.",
//   },
//   {
//     id: 2,
//     name: "Emma Watson",
//     title: "Marketing Lead",
//     image: Profile2,
//     rating: 4,
//     text: "Amazing attention to detail and smooth development process.",
//   },
//   {
//     id: 3,
//     name: "John Smith",
//     title: "Founder, Startup",
//     image: Profile3,
//     rating: 5,
//     text: "Great frontend skills and clean code structure.",
//   },
//   {
//     id: 4,
//     name: "Sarah Wilson",
//     title: "UI Designer",
//     image: Profile4,
//     rating: 5,
//     text: "Very responsive and excellent communication.",
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     title: "Business Owner",
//     image: Profile5,
//     rating: 4,
//     text: "Delivered quality work before deadline.",
//   },
// ];

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: true,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="testimonial">
//       <div className="wrapper p-block-9 border-btn">

//         {/* Heading */}
//         <div className="heading">
//           <span className="subtitle">
//             Client Testimonial
//           </span>

//           <h2>
//             Testimonial That <br />
//             <span className="green-text">
//               Speaks To My Result
//             </span>
//           </h2>
//         </div>

//         {/* Slider */}
//         <div className="slider-wrapper">
//           <Slider {...settings}>
//             {testimonialsData.map((review) => (
//               <div key={review.id}>
//                 <div className="testimonial-card">

//                   <div className="top-content">

//                     <div className="profile">
//                       <img
//                         src={review.image}
//                         alt={review.name}
//                       />
//                     </div>

//                     <div>
//                       <h4>{review.name}</h4>

//                       <p className="designation">
//                         {review.title}
//                       </p>

//                       <div className="rating">
//                         {Array.from(
//                           { length: review.rating },
//                           (_, i) => (
//                             <FaStar
//                               key={i}
//                               className="rating-star"
//                             />
//                           )
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <p className="testimonial-text">
//                     {review.text}
//                   </p>

//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonial;














// import React from "react";
// import Slider from "react-slick";

// import Profile1 from "../../assets/profile1.jpg";
// import Profile2 from "../../assets/profile2.jpg";
// import Profile3 from "../../assets/profile3.jpg";
// import Profile4 from "../../assets/profile4.jpg";
// import Profile5 from "../../assets/profile5.jpg";

// import { FaStar } from "react-icons/fa6";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "./Testimonial.css";

// const Testimonial = () => {

//   const renderTestimonialData = testimonialsData.map((review) => {
//     return (
//       <div className="card" key={review.id}>
//         <div className="flex gap-2">

//           <div className="profile">
//             <img src={review.image} alt={review.name} />
//           </div>

//           <div>
//             <h4>{review.name}</h4>
//             <p>{review.title}</p>

//             <span className="flex">
//               {Array.from({ length: review.rating }, (_, i) => (
//                 <FaStar key={i} className="rating-star" />
//               ))}
//             </span>

//           </div>
//         </div>

//         <div>
//           <p className="para">{review.text}</p>
//         </div>

//       </div>
//     );
//   });

//   return (
//     <section>
//       <div id="testimonial" className="wrapper p-block-9 border-btn">

//         <div className="text-center">
//           <span
//             className="text-6xl pr-3 font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent middle"
//             datatype="Client Testimonial"
//           >
//             Client Testimonial
//           </span>

//           <h2 className="font-medium">
//             Testimonial that 
//             <span className="green-text" > Speaks to my result</span>
//           </h2>
//         </div>

//         <Slider {...settings} className="mt-5">
//           {renderTestimonialData}
//         </Slider>

//       </div>
//     </section>
//   );
// };

// export default Testimonial;

// const testimonialsData = [
//   {
//     id: 1,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile1,
//     rating: 4,
//     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
//   },
//   {
//     id: 2,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile2,
//     rating: 2,
//     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
//   },
//   {
//     id: 3,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile3,
//     rating: 5,
//     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
//   },
//   {
//     id: 4,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile4,
//     rating: 1,
//     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
//   },
//   {
//     id: 5,
//     name: "Leslie Alexander",
//     title: "CEO, Software Company",
//     image: Profile5,
//     rating: 3,
//     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
//   },
// ];






// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,

//   responsive: [
//     {
//       breakpoint: 790,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };