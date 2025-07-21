"use client";

import AdminDashboardLayout from "../common/layout";
import { Ellipsis, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormInput from "@/components/common/form/FormInput";

const index = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const clients = [
    {
      id: 1,
      role: "Super Admin",
      role_desc: "Full access to all resources",
      permissions: "24",
      users: "2",
      created_at: "2023-01-10T09:15:00Z",
    },
    {
      id: 2,
      role: "Vendor Admin",
      role_desc: "Manage vendor resources",
      permissions: "16",
      users: "4",
      created_at: "2023-02-20T12:30:00Z",
    },
    {
      id: 3,
      role: "Agent Admin",
      role_desc: "Manage agent resources",
      permissions: "12",
      users: "3",
      created_at: "2023-03-05T15:45:00Z",
    },
    {
      id: 4,
      role: "Customer Support",
      role_desc: "Handle customer inquiries",
      permissions: "8",
      users: "6",
      created_at: "2023-04-18T11:00:00Z",
    },
    {
      id: 5,
      role: "Content Manager",
      role_desc: "Manage content and listings",
      permissions: "10",
      users: "2",
      created_at: "2023-05-22T08:20:00Z",
    },
  ];

  return (
    <AdminDashboardLayout>
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
            onClick={() => setShowModal(true)}
          >
            <Plus size={20} /> Add Role
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <div className="d-flex items-center justify-between mb-10">
          <div className="d-flex flex-column">
            <h1 className="text-24 lh-14 fw-500">Roles</h1>
            <div className="text-14 lh-14 text-light-1">
              Manage roles and permissions
            </div>
          </div>
          <select className="form-select border-light h-45 px-15 w-140">
            <option value="all">All</option>
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="reseller-agent">Reseller Agent</option>
            <option value="affiliate-agent">Affiliate Agent</option>
            <option value="internal-staff">Internal staff</option>
          </select>
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
                {clients.map((client, index) => (
                  <tr key={index}>
                    <td className="align-middle">{client.id}</td>
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
  return (
    <div className="row x-gap-10 y-gap-10 items-center">
      <h1 className="text-20 lh-14 fw-500">Create New Role</h1>
      <div className="text-12 text-light-1 lh-14 mb-15">
        Define a new role with specific permissions
      </div>

      <FormInput
        label="Role Name"
        required={true}
        type="text"
        placeholder="Agent"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Description"
        type="textarea"
        placeholder="Enter role description"
        gridClass="col-12 mt-5"
      />

      <div className="col-12">
        <h1 className="text-14 lh-14 fw-500">
          Listing Type<span className="text-red-1">*</span>
        </h1>
        <RoomType />
      </div>
    </div>
  );
};

const RoomType = () => {
  const [treeData, setTreeData] = useState([
    {
      id: "dashboard",
      label: "Dashboard",
      children: [
        {
          id: "view_dashboard",
          label: "View Dashboard",
        },
        {
          id: "view_analytics",
          label: "View Analytics",
        },
      ],
    },
    {
      id: "user_management",
      label: "User Management",
      children: [
        {
          id: "view_users",
          label: "View Users",
        },
        {
          id: "create_users",
          label: "Create Users",
        },
        {
          id: "edit_users",
          label: "Edit Users",
        },
        {
          id: "delete_users",
          label: "Delete Users",
        },
      ],
    },
    {
      id: "bookings",
      label: "Bookings",
      children: [
        {
          id: "view_bookings",
          label: "View Bookings",
        },
        {
          id: "create_bookings",
          label: "Create Bookings",
        },
        {
          id: "edit_bookings",
          label: "Edit Bookings",
        },
        {
          id: "delete_bookings",
          label: "Delete Bookings",
        },
      ],
    },
  ]);

  const updateNodeAndChildren = (nodes, id, checked) => {
    return nodes.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          checked,
          children: node.children
            ? updateNodeAndChildren(node.children, "found", checked)
            : undefined,
        };
      }

      if (id == "found") {
        if (node.children) {
          return {
            ...node,
            checked,
            children: updateNodeAndChildren(node.children, "found", checked),
          };
        }
        return {
          ...node,
          checked,
        };
      }

      if (node.children) {
        return {
          ...node,
          children: updateNodeAndChildren(node.children, id, checked),
        };
      }

      return node;
    });
  };

  const updateParentStates = (nodes) => {
    return nodes.map((node) => {
      if (node.children && node.children.length > 0) {
        const updatedChildren = updateParentStates(node.children);
        const allChecked = updatedChildren.every((child) => child.checked);

        return {
          ...node,
          checked: allChecked,
          children: updatedChildren,
        };
      }
      return node;
    });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    setTreeData((prevData) => {
      const updatedData = updateNodeAndChildren(prevData, id, checked);

      return updateParentStates(updatedData);
    });
  };

  const renderCheckboxes = (items) => {
    return items.map((item, key) => (
      <div key={key}>
        <div className="d-flex items-center">
          <Checkbox
            id={item.id}
            checked={item.checked ? true : false}
            onChange={handleCheckboxChange}
          />
          <div className="text-14 lh-14 ml-5">{item.label}</div>
        </div>
        {item.children && (
          <div className="ml-30">{renderCheckboxes(item.children)}</div>
        )}
      </div>
    ));
  };

  return <div>{renderCheckboxes(treeData)}</div>;
};

export default index;
