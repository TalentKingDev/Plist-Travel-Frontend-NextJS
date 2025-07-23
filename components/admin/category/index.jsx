"use client";

import AdminDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormInput from "@/components/common/form/FormInput";
const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const clients = [
    {
      listing_type: "Events",
      listing_subtype: "Events",
      category: "Concerts & Shows",
      subcategory: "Theater",
      status: "Active",
      description: "Organizes large-scale musical and theater events in major venues.",
    },
    {
      listing_type: "Activities",
      listing_subtype: "Activities",
      category: "Cultural Experiences",
      subcategory: "City Tours",
      status: "Active",
      description: "Offers immersive guided tours through historic city landmarks.",
    },
    {
      listing_type: "Activities",
      listing_subtype: "Activities",
      category: "Food & Drink",
      subcategory: "Cooking Classes",
      status: "Active",
      description: "Hosts hands-on cooking workshops with local chefs.",
    },
    {
      listing_type: "Flights",
      listing_subtype: "Flights",
      category: "Flights",
      subcategory: "First Class",
      status: "Inactive",
      description: "Premium international first-class flight booking service.",
    },
    {
      listing_type: "Properties",
      listing_subtype: "Properties",
      category: "Hotels",
      subcategory: "Airport Hotels",
      status: "Active",
      description: "Luxury airport hotel listings with hourly and day-use rates.",
    },
    {
      listing_type: "Flights",
      listing_subtype: "Airport VIP Lounge",
      category: "Standard Lounges",
      subcategory: "Economy Class",
      status: "Active",
      description: "Access to economy class standard lounges at major international airports.",
    },
    {
      listing_type: "Flights",
      listing_subtype: "Concierge Services",
      category: "Corporate Concierge",
      subcategory: "Travel Arrangements",
      status: "Active",
      description: "Comprehensive corporate concierge services for business travel planning.",
    },
    {
      listing_type: "Flights",
      listing_subtype: "Flights",
      category: "Business Class",
      subcategory: "First Class",
      status: "Active",
      description: "High-end business and first-class flight booking for international routes.",
    },
    {
      listing_type: "Properties",
      listing_subtype: "Hotels",
      category: "Airport Hotels",
      subcategory: "Day Use",
      status: "Active",
      description: "Day-use airport hotels ideal for layovers and short-term stays.",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Category Management</h1>
          <div className="text-14 lh-14 text-light-1">
            Magage Your Categories/Subcategories
          </div>
        </div>
      </div>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        {/* <div className="col-auto">
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
        </div> */}

        <div className="col-auto ms-auto">
          <button
            className="button bg-blue-1 text-white px-15 fw-400 py-10 rounded-8"
            onClick={() => setShowModal(true)}
          >
            <Plus size={20} /> Add
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <h1 className="text-24 lh-14 fw-500">All Users</h1>
        <div className="text-14 lh-14 text-light-1">
          Manage all users across the platform
        </div>

        <div className="row y-gap-10 x-gap-10 items-center mb-5 mt-10">
          
          <div className="col-sm-auto">
            <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="col-sm-auto">
            <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
              <option value="all">All Types</option>
              <option value="property">Property</option>
              <option value="activity">Activity</option>
              <option value="tour">Tour</option>
              <option value="event">Event</option>
              <option value="flight">Flight</option>
              <option value="ride">Ride</option>
            </select>
          </div>

          <div className="col-sm-auto">
            <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
              <option value="all">Category</option>
            </select>
          </div>
          
          <div className="col-sm-auto ms-auto d-flex">
            <button className="button -md px-15 py-10 fw-400 text-14 bg-white border-light rounded-8 sm:w-full me-2">
              Export Listings
            </button>
            <button className="button -md px-15 py-10 fw-400 text-14 text-white bg-blue-1 rounded-8 sm:w-full">
              View All
            </button>
          </div>
        </div>

        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Listing Type</th>
                  <th>Listing Subtype</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {clients
                  .filter((item) => {
                    return activeTab === "all"
                      ? true
                      : item.role.toLowerCase() === activeTab;
                  })
                  .map((client, index) => (
                    <tr key={index}>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.listing_type}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.listing_subtype}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.category}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.subcategory}
                      </td>
                      <td className="align-middle">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            client.status === "Active"
                              ? "bg-green-1 text-green-2"
                              : "bg-light-2 text-dark-1"
                          }`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.description}
                      </td>
                      <td className="align-middle">
                        <span className="text-12 border border-primary text-blue-1 fw-500 rounded-4 px-10 cursor-pointer">
                          Edit
                        </span>
                        <span className="text-12 border border-danger text-red-2 fw-500 rounded-4 px-10 cursor-pointer mx-1">
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
      >
        <div className="px-20 py-20 w-500 sm:w-full">
          <ModalContent />
          <div className="d-flex justify-end gap-2 mt-10">
            <button
              className="text-14 border-light rounded-8 px-10 py-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Create Category
            </button>
          </div>
        </div>
      </Dialog>
    </AdminDashboardLayout>
  );
};

const ModalContent = () => {

  const listingTypeOptions = [
    { value: "Properties", label: "Properties" },
    { value: "Events", label: "Events" },
    { value: "Activities", label: "Activities" },
    { value: "Tours", label: "Tours" },
    { value: "Flights", label: "Flights" },
    { value: "Rides", label: "Rides" },
  ];

  const listingSubTypeOptions = [
    { value: "default", label: "default" },
  ];

  const status = [
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Inactive",
      value: "inactive",
    },
  ];

  return (
    <div className="row x-gap-10 y-gap-10 items-center">
      <h1 className="text-20 lh-14 fw-500">Create New Category</h1>
      <div className="text-12 text-light-1 lh-14 mb-15">
        Define a new category
      </div>

      <FormInput
        label="Listing Type"
        required={true}
        type="select"
        placeholder="What's the listing type?"
        gridClass="col-12 mt-5"
        options={listingTypeOptions}
      />

      <FormInput
        label="Listing Subtype"
        required={true}
        type="select"
        placeholder="What's the listing subtype?"
        gridClass="col-12 mt-5"
        options={listingSubTypeOptions}
      />

      <FormInput
        label="Category"
        type="text"
        placeholder="Enter Category Name"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Sub-Category"
        type="text"
        placeholder="Enter Sub-Category Name"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Description"
        type="textarea"
        placeholder="Fill Description"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Status"
        type="select"
        placeholder="What's the status?"
        gridClass="col-12 mt-5"
        options={status}
      />
    </div>
  );
};

export default index;
