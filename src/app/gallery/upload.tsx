"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Result } from "postcss";
import { useRouter } from "next/navigation";
export const Upload = () => {
  const router = useRouter()
  interface UploadImage {
    event: "success";
    info: { public_id: string };
  }
  const [uploadedImage, setUploadedImage] = useState("o0926lkvwcll6ypq3u5l");
  const handleUploadSuccess = (result: any) => {
    const { public_id } = result.info;
    setUploadedImage(public_id);
  };
  return (
    <main>
      <Button asChild className="cursor-pointer">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>

          <CldUploadButton
            uploadPreset="frmnewcc"
                onSuccess={(result)=>{
                  let res = result as UploadImage
                  setTimeout(() => {
                    router.refresh();
                  }, 1000);
                }}
            //     className="bg-blue text-white rounded-sm w-52 h-14 mb-10 font-bold text-xl hover:bg-opacity-85"
            //   >
            //     Upload an Image
            //   </CldUploadButton>
          />
        </div>
      </Button>
    </main>
  );
};
