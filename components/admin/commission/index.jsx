"use client";

import AdminDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
const index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const entries = [
    {
      id: 1,
      name: "Luxury Hotel Groups",
      listing_type: "Hotel",
      status: "Active",
      plan: "Premium",
      commission_rate: 0.15,
      total_commission: "$2,400",
      total_revenue: "$16,000",
      role: "Vendor",
    },
    {
      id: 2,
      name: "Adventure Tours Inc",
      listing_type: "Tour",
      status: "Active",
      plan: "Standard",
      commission_rate: 0.1,
      total_commission: "$1,050",
      total_revenue: "$10,500",
      role: "Agent",
    },
    {
      id: 3,
      name: "City Stays",
      listing_type: "Hotel",
      status: "Active",
      plan: "Basic",
      commission_rate: 0.08,
      total_commission: "$860",
      total_revenue: "$10,750",
      role: "Vendor",
    },
    {
      id: 4,
      name: "Global Events",
      listing_type: "Event",
      status: "Inactive",
      plan: "Standard",
      commission_rate: 0.12,
      total_commission: "$1,200",
      total_revenue: "$10,000",
      role: "Agent",
    },
    {
      id: 5,
      name: "Beach Resorts",
      listing_type: "Hotel",
      status: "Active",
      plan: "Premium",
      commission_rate: 0.15,
      total_commission: "$2,750",
      total_revenue: "$18,333",
      role: "Vendor",
    },
  ];

  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Vendor",
      value: "vendor",
    },
    {
      label: "Agent",
      value: "agent",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">
            Agent & Vendor Commission Management
          </h1>
          {/* <div className="text-14 lh-14 text-light-1">
            Manage all users across the platform
          </div> */}
        </div>
      </div>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <div className="row px-10">
            {tabs.map((item) => (
              <div className="col-auto px-5" key={item.value}>
                <button
                  className={`text-14 px-10 fw-500 py-5 rounded-8 ${
                    activeTab === item.value ? "bg-white" : "text-light-1"
                  }`}
                  onClick={() => {
                    setActiveTab(item.value);
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <div className="d-flex items-center justify-between mb-10">
          <div className="d-flex flex-column">
            <h1 className="text-24 lh-14 fw-500"> Commission Overview</h1>
            <div className="text-14 lh-14 text-light-1">
              Manage commission rates for vendors and agents
            </div>
          </div>
          <div className="d-flex items-center gap-2">
            {activeTab === "vendor" && (
              <select className="form-select border-light h-45 px-15 w-140">
                <option value="all">All Vendors</option>
              </select>
            )}
            {activeTab === "agent" && (
              <select className="form-select border-light h-45 px-15 w-140">
                <option value="all">All Agents</option>
              </select>
            )}
            <select className="form-select border-light h-45 px-15 w-140">
              <option value="all">All Locations</option>
            </select>
          </div>
        </div>
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Listing Type</th>
                  <th>Plan</th>
                  <th>Commission Rate</th>
                  <th>Total Revenue</th>
                  <th>Total Commission</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {entries
                  .filter((item) => {
                    return activeTab === "all"
                      ? true
                      : item.role.toLowerCase() === activeTab;
                  })
                  .map((entry, index) => (
                    <tr key={index}>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.id}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.name}
                      </td>

                      <td className="align-middle text-12 lh-16 fw-500">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            {
                              Vendor: "bg-green-4 text-green-3",
                              Agent: "bg-blue-1-05 text-blue-1",
                            }[entry.role] || "bg-gray-4 text-gray-3"
                          }`}
                        >
                          {entry.role}
                        </span>
                      </td>

                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.listing_type}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.plan}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.commission_rate}%
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.total_revenue}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.total_commission}
                      </td>
                      <td className="align-middle">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            entry.status === "Active"
                              ? "bg-green-1 text-green-2"
                              : "bg-light-2 text-dark-1"
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="align-middle">
                        <Ellipsis size={16} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
