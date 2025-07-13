import Image from "next/image";
import React, { useState } from "react";

const Integration = () => {
  return (
    <div className="row y-gap-10 x-gap-10 bg-white px-15 py-20 rounded-8">
      <div className="text-20 fw-600 lh-14">Branding Settings</div>
      <div className="text-14 text-light-1 lh-14">
        Customize your brand appearance
      </div>
      <div className="text-14 fw-500 lh-14 mt-15">Company Logo</div>
      <div className="d-flex gap-3 items-center">
        <div className="px-5 py-5 border-light rounded-8">
          <Image
            width={70}
            height={70}
            src="/img/misc/avatar-1.png"
            alt="image"
            className="size-70 rounded-8 object-cover"
            unoptimized
          />
        </div>
        <button className="border-light text-12 fw-500 px-15 py-5">
          Upload New Logo
        </button>
      </div>
      <div className="text-12 text-light-1 lh-14">
        Recommended size: 200x200px. Max file size: 2MB.
      </div>

      <div className="pt-10 mt-10 border-top-light"></div>

      <div className="text-14 fw-500 lh-14">Brand Colors</div>

      <div className="col-sm-3">
        <div className="text-12 fw-500 lh-14">Primary Colors</div>
        <div className="d-flex gap-2 items-center mt-10">
          <div className="size-35 rounded-full bg-dark-blue"></div>
          <button className="border-light text-12 fw-500 px-15 py-5">
            #0853B2
          </button>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="text-12 fw-500 lh-14">Secondary Colors</div>
        <div className="d-flex gap-2 items-center mt-10">
          <div className="size-35 rounded-full bg-light-2"></div>
          <button className="border-light text-12 fw-500 px-15 py-5">
            #F5F5F5
          </button>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="text-12 fw-500 lh-14">Accent Colors</div>
        <div className="d-flex gap-2 items-center mt-10">
          <div className="size-35 rounded-full bg-green-3"></div>
          <button className="border-light text-12 fw-500 px-15 py-5">
            #16A34A
          </button>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="text-12 fw-500 lh-14">Text Colors</div>
        <div className="d-flex gap-2 items-center mt-10">
          <div className="size-35 rounded-full bg-dark-1"></div>
          <button className="border-light text-12 fw-500 px-15 py-5">
            #111827
          </button>
        </div>
      </div>

      <div className="pt-10 mt-10 border-top-light"></div>

      <div className="text-14 fw-500 lh-14">Brand Fonts</div>
      <select className="form-select border-light rounded-8 py-5 px-15 w-full">
        <option value="inter">Inter</option>
      </select>

      <div className="d-flex mt-20 border-top-light pt-15">
        <button className="button bg-dark-blue text-white rounded-8 text-12 py-10 px-15">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Integration;
