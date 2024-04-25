"use client";
// page.tsx

import React from "react";
import { useUser } from "@clerk/nextjs";
import router, { useRouter } from "next/router";

const Page = () => {
  const { user } = useUser();

  const handleExploreClick = () => {
    if (!user) {
      router.push("/sign-in"); // Redirect to sign-in page if user is not signed in
    } else {
      router.push("/app"); // Redirect to app page if user is signed in
    }
  };

  return (
    <main>
      <div>
        <div className="flex items-center"></div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center flex-wrap">
        <div className="max-w-4xl w-full text-center  p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue mb-5">
            Welcome to Memories Gallery
          </h1>

          <h1 className="p-nav text-xl md:text-1xl font-bold text-black mb-10">
            Explore and cherish your precious memories with us
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Page;

// import React from "react";
// import Page from "./sign-in/[[...sign-in]]/page";
// import Page2 from "./sign-up/[[...sign-up]]/page";

// import Head from "next/head";
// import Link from "next/link";
// import { useUser } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";
// import router, { useRouter } from "next/router";

// function pager() {
//   const { user } = useUser();
//   const handleExploreClick = () => {
//     if (!user) {
//       router.push("/sign-in"); // Redirect to sign-in page if user is not signed in
//     } else {
//       router.push("/app"); // Redirect to app page if user is signed in
//     }
//   };
//   return (
//     <main>
   
//         <div>
//           <div className="flex items-center"></div>
//         </div>

//         {/* Hero Section */}
//         <div className=" min-h-screen flex justify-center items-center flex-wrap">
//           <div className="max-w-4xl w-full text-center  p-4">
//             <h1 className="text-4xl md:text-6xl font-bold text-blue mb-5">
//               Welcome to Memories Gallery{""}
//             </h1>

//             <h1 className="p-nav text-xl md:text-1xl font-bold text-black mb-10">
//               Explore and cherish your precious memories with us
//             </h1>
//           </div>
//         </div>
    
//     </main>
//   );
// }

// export default pager;
