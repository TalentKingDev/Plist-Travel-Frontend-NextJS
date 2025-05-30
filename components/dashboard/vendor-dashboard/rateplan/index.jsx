"use client";

import { useRouter } from "next/navigation";

import { Checkbox } from "@mui/material";
import VendorDashboardLayout from "../common/layout";

const index = () => {
  const data = [
    {
      rate_plan_name: "Monthly Rate Plan",
      cancellation_policy: "Flexible-until 1 day before arrival",
      rate_details: "Set in the Calendar",
      meals: "1 × Breakfast & lunch or breakfast & dinner per guest",
      status: "Active",
      prepay_id: "CM Prepay ID: 1478613158",
    },
    {
      rate_plan_name: "Custom Rate Plan",
      cancellation_policy: "Flexible-until 1 day before arrival",
      rate_details:
        "Rate is 5% higher than breakfast-excluded-Flexible-until 1 day before arrival(prepay), Synchronize with the room status and restrictions of breakfast-excluded-Flexible-until 1 day before arrival(prepay)",
      meals: "3 × Lunch + Dinner",
      status: "Active",
      prepay_id: "Package/Cross-sell CM Prepay ID: 147843145",
    },
    {
      rate_plan_name: "Hourly rate plan",
      cancellation_policy: "Flexible-until 1 day before arrival",
      rate_details:
        "Rate is 5% cheaper than breakfast-excluded-Flexible-until 1 day before arrival(prepay), Synchronize with the room status and restrictions of breakfast-excluded-Flexible-until 1 day before arrival(prepay)",
      meals: "None",
      status: "Active",
      prepay_id: "Bundle & save CM Prepay ID: 147842975",
    },
    {
      rate_plan_name:
        "breakfast-excluded-Flexible-until 1 day before arrival(prepay)",
      cancellation_policy: "Flexible-until 1 day before arrival",
      rate_details: "Set in the Calendar",
      meals: "None",
      status: "Active",
      prepay_id: "CM Prepay ID: 147852413",
    },
  ];

  const router = useRouter();

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 justify-between items-end mb-10">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Rate Plan</h1>
          <div className="text-15 text-light-1">
            Create and review different types of rate plans for different
            guests. You can manage availability and pricing in the Calendar.
          </div>
        </div>
      </div>

      <div className="bg-white rounded-8 py-20 px-20 col-12">
        <div className="row y-gap-10 x-gap-10 items-center">
          <div className="col-sm-auto">
            <select className="form-select rounded-8 border-light justify-between px-15 h-50 w-180 sm:w-full text-14">
              <option value="">Select rate plan(s)</option>
            </select>
          </div>
          <div className="col-sm-auto">
            <select className="form-select rounded-8 border-light justify-between px-15 h-50 w-180 sm:w-full text-14">
              <option value="">Select room type</option>
            </select>
          </div>
          <div className="col-auto d-flex items-center">
            <Checkbox />
            <div className="text-14 lh-14">Hide inactive rate plans</div>
          </div>
          <div className="col-auto ms-auto">
            <button className="bg-blue-1 text-white text-14 rounded-8 px-15 py-5" onClick={() => router.push("/vendor/rateplan/add")}>
              Add
            </button>
          </div>

          <div className="overflow-scroll scroll-bar-1 pt-10">
            <table className="table-2 col-12 text-12">
              <thead>
                <tr>
                  <th style={{ width: "25%" }}>Rate plan name</th>
                  <th style={{ width: "15%" }}>Cancellation policy</th>
                  <th>Rate, room status & restrictions</th>
                  <th style={{ width: "25%" }}>Meals</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="text-12">
                      <div className="text-blue-1">{row.rate_plan_name}</div>
                      <div className="text-light-1">{row.prepay_id}</div>
                    </td>
                    <td className="text-12">{row.cancellation_policy}</td>
                    <td className="text-12">{row.rate_details}</td>
                    <td className="text-12">{row.meals}</td>
                    <td>
                      <span className="rounded-100 px-10 text-center col-12 text-12 fw-500 bg-dark-blue text-white">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
