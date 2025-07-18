"use client";

import AgentDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const clients = [
    {
      id: 1,
      role: "Super Admin",
      role_desc: "Full access to all resources",
      permissions: "24",
      users: "2",
      created_at: "2023-01-10T09:15:00Z"
    },
    {
      id: 2,
      role: "Vendor Admin",
      role_desc: "Manage vendor resources",
      permissions: "16",
      users: "4",
      created_at: "2023-02-20T12:30:00Z"
    },
    {
      id: 3,
      role: "Agent Admin",
      role_desc: "Manage agent resources",
      permissions: "12",
      users: "3",
      created_at: "2023-03-05T15:45:00Z"
    },
    {
      id: 4,
      role: "Customer Support",
      role_desc: "Handle customer inquiries",
      permissions: "8",
      users: "6",
      created_at: "2023-04-18T11:00:00Z"
    },
    {
      id: 5,
      role: "Content Manager",
      role_desc: "Manage content and listings",
      permissions: "10",
      users: "2",
      created_at: "2023-05-22T08:20:00Z"
    },
  ];

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-15">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Permissions & Roles</h1>
          <div className="text-14 lh-14 text-light-1">
            Manage your permissions & roles easily
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button bg-blue-1 text-white px-15 fw-400 py-10 rounded-8"
            onClick={() => router.push("/agent/clients/add")}
          >
            <Plus size={20} /> Add Role
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <h1 className="text-24 lh-14 fw-500">Roles</h1>
        <div className="text-14 lh-14 text-light-1">
          Manage roles and permissions
        </div>
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>ID</th>
                  <th>Role</th>
                  <th>Permissions</th>
                  <th>Users</th>
                  <th>Created at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients
                  .map((client, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        {client.id}
                      </td>
                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-14">
                          {client.role}
                        </div>
                        <div className="d-flex items-center gap-1 text-light-1 text-12 mt-5">
                          {client.role_desc}
                        </div>
                      </td>

                      <td className="align-middle text-12 lh-16 fw-500">
                        {client.permissions}
                      </td>

                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12">
                          {client.users}
                        </div>
                      </td>

                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12 lh-16 fw-500">
                          {new Date(client.created_at).toLocaleString()}
                        </div>
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
    </AgentDashboardLayout>
  );
};

export default index;
