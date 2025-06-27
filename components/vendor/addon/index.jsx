"use client";

import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../common/layout";
import { useMemo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import CustomEventCalendar from "../common/CustomEventCalendar";

const index = () => {
  const router = useRouter();
  const data = [
    {
      description: "Basic Cleaning Package",
      name: "Standard Cleaning",
      type: "Residential",
      basePrice: "$120",
      hourAvailable: "2 hours",
      availabilityPerTimeframe: "50",
    },
    {
      description: "Premium Interior Detailing",
      name: "Car Detailing",
      type: "Automotive",
      basePrice: "$250",
      hourAvailable: "4 hours",
      availabilityPerTimeframe: "30",
    },
    {
      description: "Full Body Massage",
      name: "Spa Treatment",
      type: "Wellness",
      basePrice: "$90",
      hourAvailable: "1.5 hours",
      availabilityPerTimeframe: "80",
    },
    {
      description: "Annual Maintenance Check",
      name: "HVAC Service",
      type: "Home Maintenance",
      basePrice: "$150",
      hourAvailable: "1 hour",
      availabilityPerTimeframe: "60",
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Add-On Services Management</h1>
          <div className="text-15 text-light-1">
            Manage your Add-On services, pricing, and availability.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button -md bg-blue-1 px-15 py-10 fw-400 text-14 text-white rounded-8"
            onClick={() => router.push("/vendor/addon/add")}
          >
            New Add-on Service
          </button>
        </div>
      </div>

      <div className="px-15 px-15 py-10 rounded-8 bg-white shadow-3 mb-10">
        <div className="overflow-scroll scroll-bar-1 pt-0">
          <table className="table-2 col-12">
            <thead>
              <tr className="text-light-1 fw-600">
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Base Price</th>
                <th>Hour Available</th>
                <th>Availability Per Timeframe</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="align-middle">{row.name}</td>
                  <td className="align-middle">{row.description}</td>
                  <td className="align-middle">{row.type}</td>
                  <td className="align-middle">{row.basePrice}</td>
                  <td className="align-middle">{row.hourAvailable}</td>
                  <td className="align-middle">
                    {row.availabilityPerTimeframe}
                  </td>
                  <td className="align-middle">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AvailableCalendar />
    </VendorDashboardLayout>
  );
};

const AvailableCalendar = () => {
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  function generateRawEvents(startDateStr, days = 80) {
    const rawEvents = [];
    const startDate = new Date(startDateStr);

    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateStr = currentDate.toISOString().split("T")[0];

      const availability = Math.round(random(0, 1));
      const price = Math.round(random(40, 60));

      rawEvents.push(
        {
          title: `Availability: ${availability}`,
          start: dateStr,
          color: "#ffc107",
        },
        { title: `Price: ${price}`, start: dateStr, color: "#6ea8fe" },
        {
          title: `Event 1`,
          start: dateStr + "T09:00:00",
          end: dateStr + "T12:00:00",
          color: "#6ea8fe",
        },
        {
          title: `Event 2`,
          start: dateStr + "T14:00:00",
          end: dateStr + "T21:00:00",
          color: "#6ea8fe",
        },
        {
          title: `Event 3`,
          start: dateStr + "T14:00:00",
          end: dateStr + "T21:00:00",
          color: "#6ea8fe",
        },
        {
          title: `Event 4`,
          start: dateStr + "T14:00:00",
          end: dateStr + "T21:00:00",
          color: "#6ea8fe",
        },
        {
          title: `Event 5`,
          start: dateStr + "T14:00:00",
          end: dateStr + "T21:00:00",
          color: "#6ea8fe",
        }
      );
    }

    return rawEvents;
  }

  const events = generateRawEvents("2025-05-30");

  function renderEventContent(eventInfo) {
    return <span className="text-14 fw-500 lh-1">{eventInfo.event.title}</span>;
  }

  const [activeTab, setActiveTab] = useState("events");
  const tabs = [
    {
      label: "Events",
      value: "events",
      content: <CustomEventCalendar />,
    },
    {
      label: "Availability",
      value: "availability",
      content: (
        <div className="px-20">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              start: "prev,next,today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            eventContent={renderEventContent}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="bg-white border-light rounded-8 py-20 px-20">
      <div className="d-flex">
        <div className="px-5 mb-10 py-5 bg-light-2 rounded-8">
          {tabs.map((item) => (
            <button
              className={`text-14 px-10 fw-500 py-5 rounded-8 ${
                activeTab === item.value ? "bg-white" : "text-light-1"
              }`}
              key={item.value}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="border-light rounded-8 py-20">
        {tabs.map((item) => item.value == activeTab && item.content)}
      </div>
    </div>
  );
};

export default index;
