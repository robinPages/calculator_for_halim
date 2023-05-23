'use client';
import { useEffect, useState } from 'react';

export default function Home() {
   // 20 gonda = 1 kani
   const [pricePerKani, setPricePerKani] = useState(600);

   const [landInKani, setLandInKani] = useState(Number);
   const [landInGonda, setLandInGonda] = useState(0);

   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      calcuLatePrice();
   }, [pricePerKani, landInKani, landInGonda]);
   const calcuLatePrice = () => {
      const gondaTokani = landInGonda / 20;
      console.log(typeof 0.1);
      const totalLand = Number(landInKani) + Number(gondaTokani);

      setTotalPrice((totalLand * pricePerKani).toFixed());
   };

   return (
      <main className="bg-slate-900 h-screen flex flex-col gap-5 bg-gradient-to-b from-[#2C2C42]  via-[#202239] to-[#1F1E2E] items-center justify-center ">
         <div className="flex flex-col gap-5 max-w-sm px-3 z-10">
            <div>
               <h1 className="text-sm">প্রতি কানির দামঃ </h1>

               <input
                  type="number"
                  placeholder="00"
                  defaultValue="600"
                  contentEditable="true"
                  onChange={(e) => setPricePerKani(e.target.value)}
               />
            </div>
            <div className="flex flex-col">
               <div className="flex gap-2">
                  <div className="">
                     <p>কানি </p>
                     <input
                        type="number"
                        placeholder="00"
                        onChange={(e) => setLandInKani(e.target.value)}
                     />
                  </div>
                  <div>
                     <p>গন্ডা </p>
                     <input
                        type="number"
                        placeholder="0.00"
                        onChange={(e) => setLandInGonda(e.target.value)}
                     />
                  </div>
               </div>
            </div>
            <button
               type="button"
               class="bg-indigo-700 font-semibold py-3 text-lg rounded-md shadow-lg mt-4"
               onClick={calcuLatePrice}
            >
               হিসাব করুন
            </button>
            <div className="flex gap-3 items-center mx-auto mt-4">
               <p className="text-indigo-500 text-lg font-bold">মোট টাকা:</p>
               <span className="text-indigo-400 font-semibold text-xl">
                  {totalPrice}
               </span>
            </div>
         </div>
         <p className="text-8xl absolute top-1/2 z-0 rotate-45 text-slate-700 opacity-70">
            রবিন
         </p>
      </main>
   );
}
