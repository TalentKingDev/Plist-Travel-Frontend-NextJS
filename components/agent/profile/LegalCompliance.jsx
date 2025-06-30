import { useState } from "react";
import FileUploadForm from "./components/FileUploadForm";
import { Checkbox } from "@mui/material";

const LegalCompliance = () => {
  const [licenses, setLicenses] = useState(1);
  const [certificates, setCertificates] = useState(1);
  return (
    <div className="row y-gap-10 x-gap-10 bg-white px-15 py-20 rounded-8">
      <div className="text-20 fw-600 lh-1">Legal & Compliance</div>
      <div className="text-12 text-light-1 lh-1">
        Manage your legal and compliance information
      </div>

      <div className="col-md-6 col-sm-12">
        <h1 className="text-13 lh-14 fw-500">Business Registration Number</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter Business Registration Number"
        />
      </div>

      <div className="col-md-6 col-sm-12">
        <h1 className="text-13 lh-14 fw-500">Tax Identification Number</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter Tax Identification Number"
        />
      </div>

      <div className="col-12 d-flex gap-2 items-center">
        <Checkbox className="px-0 py-0" />
        <h1 className="text-14 lh-14 fw-500">IATA Certified</h1>
      </div>
      <div className="col-12">
        <h1 className="text-14 lh-14 fw-500">IATA Number</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter IATA Number"
        />
        <div className="text-12 text-light-1 lh-14 mt-5">
          Seven-digit code assigned to IATA-certified travel agencies
        </div>
      </div>

      <h1 className="text-14 lh-14 fw-500">Licenses & Certifications</h1>

      <div className="col-12 px-5 d-flex flex-column gap-2">
        <div className="border-light rounded-8 px-15 py-15 d-flex justify-between items-center">
          <div>
            <div className="text-14 lh-14 fw-500">Travel Agency License</div>
            <div className="text-12 lh-14 text-light-1">
              Expires: December 31, 2024
            </div>
          </div>
          <button className="border-light text-12 fw-500 rounded-8 py-5 px-15">
            View
          </button>
        </div>
        <div className="border-light rounded-8 px-15 py-15 d-flex justify-between items-center">
          <div>
            <div className="text-14 lh-14 fw-500">
              Business Insurance Certificate
            </div>
            <div className="text-12 lh-14 text-light-1">
              Expires: June 15, 2024
            </div>
          </div>
          <button className="border-light text-12 fw-500 rounded-8 py-5 px-15">
            View
          </button>
        </div>
        <button className="border-light text-12 fw-500 rounded-8 py-5 px-15">
          Upload New Document
        </button>
      </div>

      <div className="d-flex mt-10">
        <button className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default LegalCompliance;
