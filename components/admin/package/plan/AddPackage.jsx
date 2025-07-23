"use client";

import AdminDashboardLayout from "../../common/layout";
import FormInput from "@/components/common/form/FormInput";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Package Plan Management</h1>
          <div className="text-14 text-light-1 lh-14">
            Manage and monitor all package plans across the platform.
          </div>
        </div>
      </div>

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <h1 className="text-22 lh-14 fw-600">Add New Package</h1>
        <div className="row y-gap-15 x-gap-15">
          <FormInput
            label="Package Name"
            placeholder="Enter package name"
            gridClass="col-sm-6"
          />

          <FormInput
            label="Package Description"
            placeholder="Enter package description"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="1"
            label="Number of Locations/Properties"
            placeholder="Enter number of locations/properties"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="1"
            label="Number of Active Users"
            placeholder="Enter number of active users"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="1"
            label="Number of Listing Types"
            placeholder="Enter number of listing types"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="1"
            label="Number of Listings"
            placeholder="Enter number of listings"
            gridClass="col-sm-6"
          />

          <div className="col-sm-6 mt-5">
            <h1 className="text-14 fw-500 lh-14">Support Tiers Included</h1>
            <select className="form-select border-light rounded-8 h-40 mt-10 px-15">
              <option value="tier1">Tier 1</option>
              <option value="tier2">Tier 2</option>
              <option value="tier3">Tier 3</option>
              <option value="tier4">Tier 4</option>
            </select>
          </div>

          <FormInput
            type="number"
            step="1"
            label="Number of Featured Listings"
            placeholder="Enter number of featured listings"
            gridClass="col-sm-6"
          />

          <div className="col-sm-6 mt-5">
            <h1 className="text-14 fw-500 lh-14">Package Duration</h1>
            <select className="form-select border-light rounded-8 h-40 mt-10 px-15">
              <option value="days">Days</option>
              <option value="months">Months</option>
              <option value="quarters">Quarters</option>
              <option value="years">Years</option>
            </select>
          </div>

          <div className="col-sm-6 mt-5">
            <h1 className="text-14 fw-500 lh-14">Duration Timeframe</h1>
            <select className="form-select border-light rounded-8 h-40 mt-10 px-15">
              {Array(40)
                .fill(null)
                .map((_, index) => (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                ))}
            </select>
          </div>

          <FormInput
            type="number"
            step="1"
            label="Trial Days"
            placeholder="Enter trial days"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="0.01"
            label="Price($)"
            tooltip="Package price currency is set from System Setting"
            placeholder="Enter price"
            gridClass="col-sm-6"
          />

          <FormInput
            type="number"
            step="1"
            label="Sort Order"
            placeholder="i.e. 1"
            gridClass="col-sm-6"
          />
          <div className="col-sm-6 mt-5"></div>

          {[
            "Channel Manager",
            "One time only subscription",
            "Mark Package as Popular",
            "API Included",
          ].map((item, index) => (
            <div
              className="col-sm-auto mt-5 d-flex gap-2 items-center"
              key={index}
            >
              <Checkbox className="px-0 py-0" />
              <div className="text-14 fw-500 lh-14">{item}</div>
            </div>
          ))}

          <div className="col-12"></div>
          <div className="col-sm-2 mt-5 d-flex gap-2 items-center">
            <Checkbox
              className="px-0 py-0"
              checked={isActive}
              onClick={() => setIsActive(!isActive)}
            />
            <div className="text-14 fw-500 lh-14">Is Active</div>
          </div>
          {isActive && (
            <>
              <FormInput
                type="text"
                label="Only for these Vendors"
                tooltip="Select Vendors to which this package will be shown. If empty, then package will be shown to all Vendors."
                gridClass="col-sm-4"
              />

              <FormInput
                type="text"
                label="ERP Package Subscription"
                tooltip="Select applicable ERP Package."
                gridClass="col-sm-4"
              />
            </>
          )}

          <div className="col-12 d-flex justify-end gap-2">
            <button
              className="text-14 border-light rounded-8 px-15 py-5"
              onClick={() => router.push("/admin/package/plan")}
            >
              Cancel
            </button>
            <button
              className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-15 py-5"
              onClick={() => router.push("/admin/package/plan")}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
