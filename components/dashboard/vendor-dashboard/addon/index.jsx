"use client";

import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../common/layout";

const index = () => {
  const router = useRouter();
  const data = [
    {
      description: "Basic Cleaning Package",
      name: "Standard Cleaning",
      type: "Residential",
      basePrice: "$120",
      hourAvailable: "2 hours",
      availabilityPerTimeframe: "50",
    },
    {
      description: "Premium Interior Detailing",
      name: "Car Detailing",
      type: "Automotive",
      basePrice: "$250",
      hourAvailable: "4 hours",
      availabilityPerTimeframe: "30",
    },
    {
      description: "Full Body Massage",
      name: "Spa Treatment",
      type: "Wellness",
      basePrice: "$90",
      hourAvailable: "1.5 hours",
      availabilityPerTimeframe: "80",
    },
    {
      description: "Annual Maintenance Check",
      name: "HVAC Service",
      type: "Home Maintenance",
      basePrice: "$150",
      hourAvailable: "1 hour",
      availabilityPerTimeframe: "60",
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Add-On Services Management</h1>
          <div className="text-15 text-light-1">
            Manage your Add-On services, pricing, and availability.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button -md bg-blue-1 px-15 py-10 fw-400 text-14 text-white rounded-8"
            onClick={() => router.push("/vendor/addon/add")}
          >
            New Add-on Service
          </button>
        </div>
      </div>

      <div className="px-15 px-15 py-10 rounded-8 bg-white shadow-3">
        <div className="overflow-scroll scroll-bar-1 pt-0">
          <table className="table-2 col-12">
            <thead>
              <tr className="text-light-1 fw-600">
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Base Price</th>
                <th>Hour Available</th>
                <th>Availability Per Timeframe</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="align-middle">{row.name}</td>
                  <td className="align-middle">{row.description}</td>
                  <td className="align-middle">{row.type}</td>
                  <td className="align-middle">{row.basePrice}</td>
                  <td className="align-middle">{row.hourAvailable}</td>
                  <td className="align-middle">{row.availabilityPerTimeframe}</td>
                  <td className="align-middle">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};
export default index;
