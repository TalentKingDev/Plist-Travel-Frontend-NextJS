"use client";

import AgentDashboardLayout from "../../common/layout";
import { Copy } from "lucide-react";
import { useRouter } from "next/navigation";

const index = () => {
  const dynamicFields = [
    { value: "{{ client_name }}", label: "Client's full name" },
    { value: "{{ booking_id }}", label: "Booking reference number" },
    { value: "{{ booking_date }}", label: "Date of booking" },
    { value: "{{ travel_date }}", label: "Date of travel" },
    { value: "{{ service_type }}", label: "Type of service booked" },
    { value: "{{ service_details }}", label: "Details of the service" },
    { value: "{{ total_amount }}", label: "Total amount" },
  ];

  const router = useRouter();

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Sales Links</h1>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15 h-100">
        <h1 className="text-24 lh-14 fw-500">Create Sales Link</h1>
        <div className="text-14 lh-14 text-light-1">
          Generate custom links for your clients to book services with your
          commission automatically applied.
        </div>
        <div className="row y-gap-10 x-gap-10 mt-10">
          <div className="col-sm-6">
            <h1 className="text-14 lh-14 fw-500">Service Type</h1>
            <select className="form-select rounded-8 border-light h-45 px-15 w-100 mt-5">
              <optgroup label="Property List">
                <option value="hotel">Hotel</option>
                <option value="vacation">Vacation Rental</option>
                <option value="venue">Event Venue</option>
                <option value="spaces">Spaces</option>
              </optgroup>
              <optgroup label="Non-Property List">
                <option value="tour">Tour</option>
                <option value="activity">Activity</option>
                <option value="event">Event</option>
              </optgroup>
            </select>
          </div>

          <div className="col-sm-6">
            <h1 className="text-14 lh-14 fw-500">Commission Rate (%)</h1>
            <select className="form-select rounded-8 border-light h-45 px-15 w-100 mt-5">
              <option value="5">Default (5%)</option>
            </select>
          </div>

          <div className="col-12">
            <h1 className="text-14 lh-14 fw-500">Campaign Name (Optional)</h1>
            <input
              className="border-light rounded-8 py-5 px-15 w-100 mt-5"
              type="text"
              placeholder="Summer 2023 Promotion"
            />
          </div>

          <div className="col-12">
            <h1 className="text-14 lh-14 fw-500">Link Expiry</h1>
            <select className="form-select rounded-8 border-light h-45 px-15 w-100 mt-5">
              <option value="never">Never</option>
            </select>
          </div>

          <div className="col-12 mt-10">
            <button
              className="text-14 bg-blue-1 text-white rounded-8 px-15 py-5 fw-400 w-100"
              onClick={() => router.push("/agent/sales-links")}
            >
              Generate Link
            </button>
          </div>

          <div className="col-12 mt-10">
            <div className="border-light rounded-8 px-15 py-15">
              <div className="text-14 lh-14 fw-500 mb-5">Generated Link</div>
              <div className="d-flex gap-2 items-center">
                <input
                  type="text"
                  className="border-light rounded-8 h-45 px-15 w-100"
                  readOnly
                  value="https://travel-saas.com/book/agent/john-doe/hotel?ref=summer23"
                />
                <button className="border-light rounded-8 size-45">
                  <Copy />
                </button>
              </div>
              <div className="text-14 text-light-1 lh-14 mt-5">
                This link will track bookings made through it and automatically
                apply your commission.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AgentDashboardLayout>
  );
};

export default index;
