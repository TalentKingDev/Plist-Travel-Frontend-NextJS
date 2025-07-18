"use client";

import { useState } from "react";
import AgentDashboardLayout from "../../common/layout";
import FormInput from "@/components/common/form/FormInput";

const index = () => {
  const [activeTab, setActiveTab] = useState("add-business");

  const tabs = [
    {
      label: "Add Business Client",
      value: "add-business",
      content: <AddBusinessClient />,
    },
    {
      label: "Add Client",
      value: "add-individual",
      content: <AddIndividualClient />,
    },
  ];

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Client Management</h1>
          <div className="text-14 lh-14 text-light-1">
            Manage your client information for faster bookings
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
        {tabs.map((tab) => (
          <div key={tab.value}>{activeTab === tab.value && tab.content}</div>
        ))}
      </div>
    </AgentDashboardLayout>
  );
};

const AddBusinessClient = () => {
  return (
    <div className="row y-gap-10 x-gap-10 items-center mb-10">
      <div className="col-12">
        <div className="text-20 lh-14 fw-500">Add New Business Client</div>
        <div className="text-14 lh-14 text-light-1">
          Enter client details to add them to your database
        </div>
      </div>

      <FormInput
        label="Company Name"
        required
        placeholder="Enter Company Name"
        gridClass="col-12 mt-10"
      />

      <FormInput
        label="First Name"
        required
        placeholder="Enter First Name"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Last Name"
        required
        placeholder="Enter Last Name"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Email Address"
        required
        placeholder="Enter Email Address"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Phone Number"
        required
        placeholder="Enter Phone Number"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Business Type"
        placeholder="Enter Business Type"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Tax ID/Business Registration Number"
        placeholder="Enter Tax ID/Business Registration Number"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Position/Title"
        placeholder="Enter Position/Title"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Company Address"
        placeholder="Enter Company Address"
        gridClass="col-12 mt-10"
      />

      <FormInput
        label="City"
        placeholder="Enter City"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="State/Province"
        placeholder="Enter State/Province"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="Postal Code"
        placeholder="Enter Postal Code"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="Country"
        type="select"
        placeholder="Select Country"
        options={["USA", "Canada", "Mexico"]}
        gridClass="col-12 mt-10"
      />

      <FormInput
        label="Website"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Referred By"
        gridClass="col-sm-6 mt-10"
      />

      <div className="col-12 d-flex justify-end gap-2">
        <button className="border-light rounded-8 py-5 px-15 text-14">
          Cancel
        </button>
        <button className="bg-blue-1 text-white rounded-8 py-5 px-15 text-14">
          Save
        </button>
      </div>
    </div>
  );
};

const AddIndividualClient = () => {
  return (
    <div className="row y-gap-10 x-gap-10 items-center mb-10">
      <div className="col-12">
        <div className="text-20 lh-14 fw-500">Add New Client</div>
        <div className="text-14 lh-14 text-light-1">
          Enter client details to add them to your database
        </div>
      </div>

      <FormInput
        label="First Name"
        required
        placeholder="Enter First Name"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Last Name"
        required
        placeholder="Enter Last Name"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Email Address"
        required
        placeholder="Enter Email Address"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Phone Number"
        required
        placeholder="Enter Phone Number"
        gridClass="col-sm-6 mt-10"
      />

      <FormInput
        label="Address"
        placeholder="Enter Address"
        gridClass="col-12 mt-10"
      />

      <FormInput
        label="City"
        placeholder="Enter City"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="State/Province"
        placeholder="Enter State/Province"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="Postal Code"
        placeholder="Enter Postal Code"
        gridClass="col-sm-4 mt-10"
      />

      <FormInput
        label="Country"
        type="select"
        placeholder="Select Country"
        options={["USA", "Canada", "Mexico"]}
        gridClass="col-12 mt-10"
      />

      <FormInput
        label="Notes (Optional)"
        type="textarea"
        placeholder="Add any additional information about this client"
        gridClass="col-12 mt-10"
      />

      <div className="col-12 d-flex justify-end gap-2">
        <button className="border-light rounded-8 py-5 px-15 text-14">
          Cancel
        </button>
        <button className="bg-blue-1 text-white rounded-8 py-5 px-15 text-14">
          Save
        </button>
      </div>
    </div>
  );
};

export default index;
