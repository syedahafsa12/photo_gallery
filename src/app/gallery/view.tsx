"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AddTags } from "./action";
// import { useState } from "react";

export const View = ({ src, tag }: { src: string,tag:string[] }) => {
  const [fav,setfav]=useState(tag.includes("favourite"))
  const [uploadedImage, setUploadedImage] = useState("o0926lkvwcll6ypq3u5l");

  const handleUploadSuccess = (result: any) => {
    const { public_id } = result.info;
    setUploadedImage(public_id);
  };
  return (
    <main className="relative">
      {/* View image */}
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      <div className="absolute top-1 right-1" onClick={()=>{AddTags(src,fav)}}>
        {
          fav? (
            <FaHeart  className="w-6 h-6 cursor-pointer text-red-500 "/> 
          ) : (
            <CiHeart className="w-8 h-8 cursor-pointer text-black hover:text-red-500 duration-300"/>
          )
        }
      {/* <CiHeart className="w-8 h-8 cursor-pointer text-black hover:text-red-500 duration-300"/> */}
{/* <FaHeart  className="w-8 h-8 cursor-pointer text-red-500 "/>   */}
      </div>
    </main>
  );
};
