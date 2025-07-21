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
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Vendor",
      company_name: "Apple",
      location: "New York, USA",
      bookings: 8,
      total_spent: "$12,450",
      status: "Active",
      created_at: "2025-05-22T08:20:00Z",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Admin",
      company_name: "Xiaomi",
      location: "Miami, USA",
      bookings: 5,
      total_spent: "$8,320",
      status: "Active",
      created_at: "2025-05-22T08:20:00Z",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.b@example.com",
      role: "Agent",
      company_name: "NASDAQ",
      location: "Los Angeles, USA",
      bookings: 3,
      total_spent: "$5,670",
      status: "Active",
      created_at: "2025-05-22T08:20:00Z",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Agent",
      company_name: "NASDAQ",
      location: "Chicago, USA",
      bookings: 2,
      total_spent: "$3,450",
      status: "Inactive",
      created_at: "2025-05-22T08:20:00Z",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.w@example.com",
      role: "Customer",
      company_name: "NASDAQ",
      location: "Dallas, USA",
      bookings: 6,
      status: "Active",
      created_at: "2025-05-22T08:20:00Z",
    },
  ];
  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Vendor",
      value: "vendor",
    },
    {
      label: "Agent",
      value: "agent",
    },
    {
      label: "Customer",
      value: "customer",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">User Management</h1>
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

        <div className="col-auto ms-auto">
          <button
            className="button bg-blue-1 text-white px-15 fw-400 py-10 rounded-8"
            onClick={() => setShowModal(true)}
          >
            <Plus size={20} /> Add User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <h1 className="text-24 lh-14 fw-500">All Users</h1>
        <div className="text-14 lh-14 text-light-1">
          Manage all users across the platform
        </div>
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>User</th>
                  <th>Location</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-nowrap">Createt At</th>
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
                      <td className="align-middle">
                        <div className="d-flex items-center gap-2">
                          <div className="size-30 rounded-full text-light-1 bg-light-2 flex-center fw-500">
                            JS
                          </div>
                          <div>
                            <div className="d-flex items-center gap-1 text-14">
                              {client.name}
                            </div>
                            <div className="d-flex items-center gap-1 text-light-1 text-12 mt-5">
                              <Mail size={14} /> {client.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.location}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            {
                              Agent: "bg-yellow-4 text-yellow-3",
                              Vendor: "bg-green-4 text-green-3",
                              Admin: "bg-red-3 text-red-2",
                              Customer: "bg-blue-1-05 text-blue-1",
                            }[client.role] || "bg-gray-4 text-gray-3"
                          }`}
                        >
                          {client.role}
                        </span>
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
                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12 lh-16 fw-500">
                          {new Date(client.created_at).toLocaleString()}
                        </div>
                      </td>
                      <td className="align-middle">
                        <span className="text-12 border-blue-1 text-blue-1 fw-500 rounded-4 px-10 cursor-pointer">
                          Manage
                        </span>
                        <span className="text-12 border-green-3 text-green-3 fw-500 rounded-4 px-10 cursor-pointer text-nowrap mx-1">
                          Add Subscription
                        </span>
                        <span className="text-12 border-yellow-3 text-yellow-3 fw-500 rounded-4 px-10 cursor-pointer">
                          Deactive
                        </span>
                        <span className="text-12 border-red-2 text-red-2 fw-500 rounded-4 px-10 cursor-pointer mx-1">
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
              Create Role
            </button>
          </div>
        </div>
      </Dialog>
    </AdminDashboardLayout>
  );
};

const ModalContent = () => {
  const options = [
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Vendor",
      value: "vendor",
    },
    {
      label: "Agent",
      value: "agent",
    },
    {
      label: "Customer",
      value: "customer",
    },
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
      <h1 className="text-20 lh-14 fw-500">Create New Role</h1>
      <div className="text-12 text-light-1 lh-14 mb-15">
        Define a new role with specific permissions
      </div>

      <FormInput
        label="Name"
        required={true}
        type="text"
        placeholder="Enter Name"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Email"
        type="text"
        placeholder="Enter Email"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Role"
        type="select"
        placeholder="What's the role?"
        gridClass="col-12 mt-5"
        options={options}
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
