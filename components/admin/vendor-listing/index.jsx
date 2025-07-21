"use client";

import AdminDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormInput from "@/components/common/form/FormInput";
const index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const entries = [
    {
      image: "/img/testimonials/1/4.png",
      name: "Apple",
      listing_type: "Hotel",
      vendor: "Apple",
      location: "New York, USA",
      status: "Approved",
      action: "",
    },
    {
      image: "/img/testimonials/1/4.png",
      name: "Xiaomi",
      listing_type: "Vacation Rental",
      vendor: "Xiaomi",
      location: "Miami, USA",
      status: "Approved",
      action: "",
    },
    {
      image: "/img/testimonials/1/4.png",
      name: "NASDAQ",
      listing_type: "Event Venue",
      vendor: "NASDAQ",
      location: "Los Angeles, USA",
      status: "Approved",
      action: "",
    },
    {
      image: "/img/testimonials/1/4.png",
      name: "NASDAQ",
      listing_type: "Activity",
      vendor: "NASDAQ",
      location: "Chicago, USA",
      status: "Pending",
      action: "",
    },
    {
      image: "/img/testimonials/1/4.png",
      name: "NASDAQ",
      listing_type: "Tours",
      vendor: "NASDAQ",
      location: "Dallas, USA",
      status: "Approved",
      action: "",
    },
  ];

  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Hotel",
      value: "hotel",
    },
    {
      label: "Spaces",
      value: "spaces",
    },
    {
      label: "Vacation Rental",
      value: "vacation_rental",
    },
    {
      label: "Event Venue",
      value: "event_venue",
    },
    {
      label: "Tours",
      value: "tours",
    },
    {
      label: "Event",
      value: "event",
    },
    {
      label: "Activity",
      value: "activity",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Vendor Listing Management</h1>
          <div className="text-14 lh-14 text-light-1">
            Review and manage listings from vendors across the platform
          </div>
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
        <div className="d-flex items-center gap-3">
          <select className="form-select border-light h-45 px-15 w-140">
            <option value="all">All Location</option>
          </select>
          <select className="form-select border-light h-45 px-15 w-140">
            <option value="all">All Vendor</option>
          </select>
          <select className="form-select border-light h-45 px-15 w-140">
            <option value="all">All Status</option>
          </select>
        </div>
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Listing Type</th>
                  <th>Location</th>
                  <th>Vendor</th>
                  <th>Status</th>
                  {/* <th>Submitted At</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {entries
                  .filter((item) => {
                    return activeTab === "all"
                      ? true
                      : item.listing_type.toLowerCase() === activeTab;
                  })
                  .map((entry, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        <img
                          className="rounded-8"
                          src={entry.image}
                          alt={entry.name}
                          style={{
                            height: "50px",
                            width: "60px",
                            objectFit: "fill",
                          }}
                        />
                      </td>
                      <td className="align-middle">{entry.name}</td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.listing_type}
                      </td>
                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12">
                          <MapPin size={14} /> {entry.location}
                        </div>
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.vendor}
                      </td>
                      <td className="align-middle">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            entry.status === "Approved"
                              ? "bg-green-1 text-green-2"
                              : "bg-light-2 text-dark-1"
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      {/* <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12 lh-16 fw-500">
                          {new Date(entry.submitted_at).toLocaleString()}
                        </div>
                      </td> */}
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
