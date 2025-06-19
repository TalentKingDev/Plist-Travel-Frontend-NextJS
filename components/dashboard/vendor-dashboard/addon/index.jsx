"use client";

import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../common/layout";

const index = () => {
  const router = useRouter();
  const data = [
    {
      code: "SUMMER2023",
      description: "Summer Sale Discount",
      discount: "20%",
      usage: "45/100",
      expiry: "Aug 31, 2023",
    },
    {
      code: "WELCOME50",
      description: "New Customer Discount",
      discount: "$50",
      usage: "32/50",
      expiry: "Dec 31, 2023",
    },
    {
      code: "FLASH25",
      description: "Flash Sale",
      discount: "25%",
      usage: "18/20",
      expiry: "Jul 15, 2023",
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
                <th>Code</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Usage</th>
                <th>Expiry</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="align-middle">{row.code}</td>
                  <td className="align-middle">{row.description}</td>
                  <td className="align-middle">{row.discount}</td>
                  <td className="align-middle">{row.usage}</td>
                  <td className="align-middle">{row.expiry}</td>
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
