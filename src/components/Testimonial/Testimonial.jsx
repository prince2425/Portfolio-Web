import React from "react";
import Slider from "react-slick";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.jpg";
import Profile5 from "../../assets/profile5.jpg";

import { FaStar } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonialsData = [
  {
    id: 1,
    name: "Leslie Alexander",
    title: "CEO , Software Company",
    image: Profile1,
    rating: 4,
    text: "Sed hi how are you  ia am fine  ",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    title: "CEO , Software Company",
    image: Profile2,
    rating: 2,
    text: "Sed ut perspiciatis unde dnzxvvv vcmnv vxcxch xvhkl vv sjhvlvsvla ds",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    title: "CEO , Software Company",
    image: Profile3,
    rating: 5,
    text: "Sed ut perspiciatis unde dnzxvvv vcmnv vxcxch xvhkl vv sjhvlvsvla ds",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    title: "CEO , Software Company",
    image: Profile4,
    rating: 1,
    text: "Sed ut perspiciatis unde dnzxvvv vcmnv vxcxch xvhkl vv sjhvlvsvla ds",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    title: "CEO , Software Company",
    image: Profile5,
    rating: 3,
    text: "Sed ut perspiciatis unde dnzxvvv vcmnv vxcxch xvhkl vv sjhvlvsvla ds",
  },
];

const Testimonial = () => {
  const renderTestimonialData = testimonialsData.map((review) => {
    return (
      <div className="card" key={review.id}>
        <div className="flex gap-2">
          <div className="profile">
            <img src={review.image} />
          </div>
          <div>
            <h4>{review.name}</h4>
            <p>{review.title}</p>
            <span className="flex">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="rating-star" />
              ))}
            </span>
          </div>
        </div>
        <div>
          <p className="para">{review.text}</p>
        </div>
      </div>
    );
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="wrapper p-block-9 border-btn">
        <div className="text-center">
          <span
            className=" text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent     "
            datatype="client Testimonial"
          >            Client Testimonial
          </span>
          <h2>
            Testimonial that <br />{" "}
            <span className="green-text">Speaks to my result</span>
          </h2>
        </div>
        <div className="mt-5">
          <Slider {...settings}>{renderTestimonialData}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;





















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






