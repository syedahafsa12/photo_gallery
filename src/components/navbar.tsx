"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";
// import router from "next/router";
import React from "react";
// import { useUser } from '@clerk/nextjs';
// import { UserButton } from '@clerk/nextjs';
import router, { useRouter } from 'next/router';

function Navbar() {
  const { user } = useUser();
  const handleExploreClick = () => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in page if user is not signed in
    } else {
      router.push('/app'); // Redirect to app page if user is signed in
    }
  };
  return (
    <main>
      <div>
      <div className=" flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            {/* <MainNav ClassName="mx-6" /> */}
            <h2 className="text-nav text-3xl font-bold tracking-tight" >Memories Gallery</h2>
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              {/* <UserNav /> */}
            </div>
            {/* <h2 className="text-3xl font-bold tracking-tight"><UserButton /></h2> */}
            <div className="flex items-center">
          

          {user ? (
        <Link href="/main">
          <button className="explore bg-blue text-white px-3 py-3 rounded-lg text-l hover:bg-green-dark hover:text-white transition duration-300 ease-in-out mr-4">
           Get Started
          </button>
        </Link>
      ) : null}
      <div>
        {user ? (
          <main>
            <UserButton afterSignOutUrl="/" />
          </main>
        ) : (
          <Link href="/sign-in">
            <button className="sign-in bg-blue text-white px-3 py-3 rounded-lg text-l hover:bg-opacity-85 hover:text-white transition duration-300 ease-in-out">
              Sign In
            </button>
          </Link>
        )}
    
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default Navbar;
