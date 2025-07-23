"use client";

import { CheckIcon, CreditCard, Edit, Plus, Star, Trash } from "lucide-react";
import AdminDashboardLayout from "../../common/layout";
import { ElectricBolt } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();
  const subscriptionPlans = [
    {
      id: 1,
      title: "Basic",
      value: "basic",
      description: "For new vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-light-2 text-dark-1">
          <CreditCard />
        </div>
      ),
      price: 19.99,
      services: ["Up to 5 listings", "Standard support", "Basic analytics"],
      status: "Active",
    },
    {
      id: 2,
      title: "Professional",
      value: "professional",
      description: "For established vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-blue-2 text-blue-1">
          <Star />
        </div>
      ),
      price: 49.99,
      services: [
        "Up to 25 listings",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
      ],
      isPopular: true,
      status: "Active",
    },
    {
      id: 3,
      title: "Premium",
      value: "premium",
      description: "For power vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-purple-2 text-purple-1">
          <ElectricBolt />
        </div>
      ),
      services: [
        "Unlimited listings",
        "24/7 premium support",
        "Advanced analytics & reports",
        "Featured listings",
        "Priority search placement",
      ],
      price: 99.99,
      status: "Active",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Package Plan Management</h1>
          <div className="text-14 text-light-1 lh-14">
            Manage and monitor all package plans across the platform.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button bg-dark-blue text-white px-20 py-10 rounded-8"
            onClick={() => router.push("/admin/package/plan/add")}
          >
            <Plus size={18} className="mr-10" /> Create New Plan
          </button>
        </div>
      </div>

      <div className="row y-gap-20 x-gap-20">
        {subscriptionPlans.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              className={
                "rounded-8 bg-white px-15 py-15 h-100 d-flex flex-column justify-between " +
                (item.isPopular ? "border-blue-1" : "border-light")
              }
            >
              <div>
                <div className="d-flex flex-wrap items-center">
                  <div className="d-flex items-center">
                    {item.icon}
                    <h3 className="ml-10 text-24 lh-1 fw-600">{item.title}</h3>
                  </div>
                  {item.isPopular && (
                    <div className="text-white px-10 rounded-100 bg-blue-1 text-10 fw-500 ms-auto">
                      Popular
                    </div>
                  )}
                </div>
                <div className="text-12 lh-1 text-light-1 mt-5">
                  {item.description}
                </div>
                <div className="d-flex items-end mt-20">
                  <h1 className="text-30 fw-600 mr-5">${item.price} </h1>
                  <div className="text-14 text-light-1 mb-5">/ month</div>
                </div>
                {item.services.map((service, idx) => (
                  <div
                    className="d-flex items-center text-14 gap-2 mt-5"
                    key={"service" + idx}
                  >
                    <CheckIcon size={16} color="green" />
                    {service}
                  </div>
                ))}
              </div>
              <div className="d-flex items-center justify-end gap-2 mt-auto">
                <span className="text-12 fw-500 text-white bg-green-3 rounded-100 px-10">
                  {item.status}
                </span>
                <Edit size={16} className="text-light-1 cursor-pointer" />
                <Trash size={16} className="text-light-1 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
