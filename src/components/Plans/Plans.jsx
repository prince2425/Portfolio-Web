

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "For personal use and experience",
    users: "1 users license",
    color: "from-blue-900 via-blue-800 to-blue-950",
    border: "border-blue-500",
    dot: "bg-blue-500",
    button: "Buy Now",
  },
  {
    name: "Startup Plan",
    price: "$199",
    description: "Perfect for professional and small teams.",
    users: "5 users license",
    color: "from-purple-900 via-purple-700 to-purple-950",
    border: "border-purple-500",
    dot: "bg-purple-400",
    button: "Buy Now",
    popular: true,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "Perfect for large organizations and business",
    users: "10 users license",
    color: "from-green-900 via-emerald-800 to-green-950",
    border: "border-green-500",
    dot: "bg-green-400",
    button: "Contact Sale",
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0615] py-20 px-5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-purple-500/20"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-purple-500/10"></div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Choose your plan
          </h1>
          <p className="text-gray-400 text-lg">
            Unlock endless possibilities
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b ${plan.color}
              rounded-[30px] p-8 border ${plan.border}
              shadow-[0_0_50px_rgba(255,255,255,0.05)]
              backdrop-blur-xl transition-all duration-500
              hover:-translate-y-4 hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Top Dot */}
              <div
                className={`absolute top-6 right-6 w-6 h-6 rounded-full ${plan.dot}
                shadow-[0_0_30px_currentColor]`}
              ></div>

              <h2 className="text-3xl font-bold text-white mb-3">
                {plan.name}
              </h2>

              <p className="text-gray-300 mb-8">{plan.description}</p>

              <div className="flex items-end gap-2 mb-8">
                <h1 className="text-5xl font-bold text-white">
                  {plan.price}
                </h1>

                {plan.price !== "Custom" && (
                  <span className="text-gray-300 mb-2">
                    one-time payment
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                className="w-full bg-[#1B1324] hover:bg-black/60
                border border-white/10 text-white py-4 rounded-2xl
                flex items-center justify-center gap-2 text-lg
                transition-all duration-300"
              >
                {plan.button}
                <ArrowUpRight size={20} />
              </button>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  plan.users,
                  "Access to all components",
                  "Lifetime access",
                  "Unlimited projects",
                  "Customer supports",
                  "Free updates",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full ${plan.dot}
                      flex items-center justify-center`}
                    >
                      <Check size={12} className="text-white" />
                    </div>

                    <p className="text-gray-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;


























// import React from "react";
// import {FaArrowRight} from "reacct-icons/fa"
// import {FaCheck} from "reacct-icons/fa6"
// // import './Plans.css'

// const Plans = () => {

// const renderPlansData = plansData.map(plan =>{
//   return(
//     <div className="card" key={plan.id}>
//       <div className="bg-header flex between">
//         <div>
//           <strong>{plan.title}</strong>
//           <h5 className="mt-1">
//             {plan.price}
//             <small>/{plan.unit}</small>
//           </h5>
//         </div>
//         <a href="#" className="icon-container black-inverse rotate self-start">
//          < FaArrowRight  />
//         </a>
//       </div>

//       <ul>
//         {plan.features.map(list=>{
//           return(
//             <li className="feature flex gap-1 mt-1"
//             style={{opacity:list.included?1:0.15}} key={list.id}>
//               <span className="check"><FaCheck/></span>
//               {list.label}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// })



//   return (
//     <section>
//       <div className="wrapper p-block-9">
//         <div className="flex between gap-4">
//           <div>
//             <span className="sub-text overlay-text" datatype="Pricing Table">
//               Pricing
//             </span>
//             <h2>
//               My <span className="green-text">Pricing Model</span>
//             </h2>
//           </div>

//           <a href="#" className="btn self-end">Get Started</a>
//         </div>
//         <div className="flex mt-5 gap-5">
//           {renderPlansData}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Plans;







// const pricingData = [
//   {
//     id:1,
//     title:'Hourly',
//     price:'$80',
//     unit:'Hour',
//     highlighted:true,
//     features:[
//       { id:1 ,label:'Lorem ipsum dolor sit amet', included:true},
//       { id:2 ,label:'Set ut perspiciatis ', included:true},
//       { id:3 ,label:'At vero eos et accusamus', included:true},
//       { id:4 ,label:'Vitae dicta Sunt explicabo', included:true},
//       { id:5 ,label:'Veritatis et quasi architecto', included:false},
//       { id:6 ,label:'Beatae vitae dicta sunt', included:false},
//       { id:7 ,label:'Explicabo, Nemo enim', included:false},
//       { id:8 ,label:'Nemo enim ipsam voluptatem', included:false},
//     ]
//   },
//   {
//     id:2,
//     title:'Monthly',
//     price:'$9600',
//     unit:'Month',
//     highlighted:true,
//     features:[
//       { id:1 ,label:'Lorem ipsum dolor sit amet', included:true},
//       { id:2 ,label:'Set ut perspiciatis ', included:true},
//       { id:3 ,label:'At vero eos et accusamus', included:true},
//       { id:4 ,label:'Vitae dicta Sunt explicabo', included:true},
//       { id:5 ,label:'Veritatis et quasi architecto', included:true},
//       { id:6 ,label:'Beatae vitae dicta sunt', included:true},
//       { id:7 ,label:'Explicabo, Nemo enim', included:false},
//       { id:8 ,label:'Nemo enim ipsam voluptatem', included:false},
//     ]
//   },
//   {
//     id:3,
//     title:'Quarterly',
//     price:'$28,000',
//     unit:'Qtr',
//     highlighted:true,
//     features:[
//       { id:1 ,label:'Lorem ipsum dolor sit amet', included:true},
//       { id:2 ,label:'Set ut perspiciatis ', included:true},
//       { id:3 ,label:'At vero eos et accusamus', included:true},
//       { id:4 ,label:'Vitae dicta Sunt explicabo', included:true},
//       { id:5 ,label:'Veritatis et quasi architecto', included:false},
//       { id:6 ,label:'Beatae vitae dicta sunt', included:false},
//       { id:7 ,label:'Explicabo, Nemo enim', included:true},
//       { id:8 ,label:'Nemo enim ipsam voluptatem', included:true},
//     ]
//   }
// ]