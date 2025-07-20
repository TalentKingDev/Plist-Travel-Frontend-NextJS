"use client";

import AdminDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import DashboardCard from "./components/DashboardCard";

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const summaryCards = [
    {
      title: "Total Revenue",
      amount: "$45,231.89",
      improve: "+20% from last month",
      icon: "/img/dashboard/icons/1.svg",
      description: "Total income from all sources"
    },
    {
      title: "Pending Payments",
      amount: "$6,520.00",
      improve: "6 pending invoices",
      icon: "/img/dashboard/icons/3.svg",
      description: "Amount yet to be paid"
    },
    {
      title: "Refund Requests",
      amount: "$2,450.00",
      improve: "3 pending requests",
      icon: "/img/dashboard/icons/2.svg",
      description: "Requests awaiting refund processing"
    },
    {
      title: "Agent Wallet Balance",
      amount: "$40,880.00",
      improve: "Across 15 agent accounts",
      icon: "/img/dashboard/icons/4.svg",
      description: "Total wallet balance of all agents"
    }
  ];
  

  const entries = [
    {
      invoice: "INV-001",
      customer: "John Smith",
      amount: "$1,200",
      status: "Paid",
      date: "2025-05-22T08:20:00Z",
      action: "View"
    },
    {
      invoice: "INV-002",
      customer: "Sarah Johnson",
      amount: "$980",
      status: "Pending",
      date: "2025-05-22T08:20:00Z",
      action: "View"
    },
    {
      invoice: "INV-003",
      customer: "Michael Brown",
      amount: "$1,450",
      status: "Overdue",
      date: "2025-05-22T08:20:00Z",
      action: "View"
    },
    {
      invoice: "INV-004",
      customer: "Emily Davis",
      amount: "$610",
      status: "Refunded",
      date: "2025-05-22T08:20:00Z",
      action: "View"
    },
    {
      invoice: "INV-005",
      customer: "Robert Wilson",
      amount: "$1,170",
      status: "Paid",
      date: "2025-05-22T08:20:00Z",
      action: "View"
    }
  ];
  
  
  
  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Paid",
      value: "paid",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Overdue",
      value: "overdue",
    },
    {
      label: "Refunded",
      value: "refunded",
    }
  ];
  
  

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Financial Management</h1>
          <div className="text-14 lh-14 text-light-1">
            Manage invoices, refunds, and wallet transactions across the platform
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button className="button border-blue-1 text-blue-1 px-15 py-10 rounded-8">
            Export Data
          </button>
        </div>
      </div>

      <DashboardCard data={summaryCards} />

      <div className="row y-gap-10 x-gap-10 items-center mt-15 mb-10">
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
        {/* <h1 className="text-24 lh-14 fw-500"> Manual Entries</h1>
        <div className="text-14 lh-14 text-light-1">
          Review and approve manually entered listing from vendors
        </div> */}
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                <th>Invoice</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {entries
                  .filter((item) => {
                    return activeTab === "all"
                      ? true
                      : item.status.toLowerCase() === activeTab;
                  })
                  .map((entry, index) => (
                    <tr key={index}>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.invoice}
                      </td>
                      <td className="align-middle">
                        {entry.customer}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">  
                        {entry.amount}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            {
                              Pending: "bg-yellow-4 text-yellow-3",
                              Paid: "bg-green-4 text-green-3",
                              Refunded: "bg-red-3 text-red-2",
                              Overdue: "bg-blue-1-05 text-blue-1",
                            }[entry.status] || "bg-gray-4 text-gray-3"
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12 lh-16 fw-500">
                          {new Date(entry.date).toLocaleString()}
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
    </AdminDashboardLayout>
  );
};

export default index;
