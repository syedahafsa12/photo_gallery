"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import Navbar from "@/components/navbar";
// import { Sidebar } from "@/components/sidebar";

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState("o0926lkvwcll6ypq3u5l");

  const handleUploadSuccess = (result: any) => {
    const { public_id } = result.info;
    setUploadedImage(public_id);
  };

  return (
    <main>
      {/* <div className="flex">
        <div>
          <Sidebar />
        </div> */}
      
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Upload button */}
        <CldUploadButton
          uploadPreset="frmnewcc"
          onSuccess={handleUploadSuccess}
          className="bg-blue text-white rounded-sm w-52 h-14 mb-10 font-bold text-xl hover:bg-opacity-85"
        >
          Upload an Image
        </CldUploadButton>

        {/* View image */}
        <CldImage
          width="400"
          height="400"
          src={uploadedImage}
          sizes="100vw"
          alt="Description of my image"
        />
      </div>
      {/* </div> */}
    </main>
  );
}
