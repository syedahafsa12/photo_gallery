import React from "react";
import { Upload } from "../gallery/upload";
import { Sidebar } from "@/components/sidebar";
import cloudinary from "cloudinary";
import { View } from "../gallery/view";
interface MyImage {
  public_id: string;
  tags:string[];
  // url: string,
  // width: number,
  // height: number,
  // format: string,
  // version: number,
  // resource_type: string,
  // created_at: string,
  // bytes: number,
}
async function galleryy() {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("public_id", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <main>
      {/* <div className="flex">
        <div>
          <Sidebar />
        </div> */}
        

        <div
         className="flex pt-14 justify-between "
         >
          <h1 
          className="text-3xl font-semibold tracking-tight"
          >Favourite</h1>
    {/* <div className="ml-20">
    <Upload />
    </div> */}
        </div>
        
        <div>
          
        <div className="grid grid-cols-4 gap-4 p-3">
          {res.resources.map((item, i) => {
            return (
              <div key={i}>
                {" "}
                <View src={item.public_id} tag={item.tags} />
              </div>
            );
          })}
        </div>
        </div>
      {/* </div> */}
      
      
    </main>
  );
}
export default galleryy