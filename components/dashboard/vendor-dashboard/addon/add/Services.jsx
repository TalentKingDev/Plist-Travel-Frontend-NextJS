"use client";

import { Checkbox, Dialog } from "@mui/material";
import { useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Eventcalendar, setOptions } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import svgIcon from "@/components/data/svgIcon";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { TimeRangePicker } from "@mui/x-date-pickers-pro/TimeRangePicker";

const Services = () => {
  const [services, setServices] = useState(1);
  const [schedulingNeed, setSchedulingNeed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const hours = Array.from({ length: 48 }, (_, i) => (i + 1) * 0.5);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="row y-gap-15 bg-white px-10 py-20 rounded-8">
      <div className="text-20 fw-600 lh-1">Service Details</div>
      <div className="text-12 text-light-1 lh-1">
        Manage your services, availability, and pricing information.
      </div>
      <div className="col-12">
        <h1 className="text-13 lh-14 fw-500">Description of Services</h1>
        <textarea
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter Description of Services"
        />
      </div>
      <div className="col-12">
        <div className="row justify-between items-center">
          <div className="text-18 fw-500 mt-10 col-auto">Service & Pricing</div>
          {/* <div className="d-flex col-sm-auto">
            <button
              className="button border-light rounded-4 text-13 fw-500 px-10 py-5"
              onClick={() => setServices(services + 1)}
            >
              <span className="material-symbols-outlined mr-10 text-15 fw-500">
                add_circle
              </span>
              Add Service
            </button>
          </div> */}
        </div>
        <div className="col-12 border-light rounded-8 px-15 py-15 mt-10">
          <div className="row x-gap-15 y-gap-15 justify-between items-center y-gap-10">
            <div className="col-md-4 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Service Name</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="text"
                placeholder="Enter Service Name"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Service Type</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="text"
                placeholder="Enter Service Type"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Base Price</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                prefix="$"
                type="text"
                placeholder="Enter Base Price"
              />
            </div>
            <div className="col-12 d-flex gap-2 items-center">
              <Checkbox
                className="px-0 py-0"
                value={schedulingNeed}
                onChange={() => setSchedulingNeed(!schedulingNeed)}
              />
              <h1 className="text-14 lh-14 fw-500">Scheduling Needed</h1>
            </div>
            {schedulingNeed && (
              <>
                {/* <div className="col-md-4">
                  <h1 className="text-13 lh-14 fw-500">Hours Available</h1>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimeRangePicker format="HH:mm" className="mt-5" />
                    </LocalizationProvider>
                </div> */}
                <div className="col-sm-6">
                  <h1 className="text-13 lh-14 fw-500">Hours Available</h1>
                  <select className="form-select rounded-8 border-light px-15 justify-between fw-400 py-10 h-55 w-full text-14 mt-5">
                    {hours.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour} {hour <= 1 ? "hour" : "hours"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-6">
                  <h1 className="text-13 lh-14 fw-500">
                    Availability Per Timeframe
                  </h1>
                  <input
                    className="border-light rounded-8 py-5 px-15 w-full h-55 mt-5"
                    type="text"
                    placeholder="Enter Availability Per Timeframe"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="text-18 fw-500 mt-10 col-auto">
          Availability Calendar
        </div>
        <div className="col-12 border-light rounded-8 px-15 py-15 mt-10">
          <div className="border-light border-dashed d-flex flex-column justify-center items-center rounded-8 py-30 px-15">
            <i className="icon-calendar-2 text-26 text-light-1"></i>
            <div className="text-18 fw-500 mt-10">Availability Calendar</div>
            <div className></div>
            <div className="text-14 text-light-1">
              Manage your service availability
            </div>
            <button
              className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15 mt-10"
              onClick={() => setShowModal(true)}
            >
              <i className="icon-calendar-2 mr-10 text-12"></i>Open Calendar
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
        maxWidth="xl"
      >
        <div className="px-20 py-20" style={{ width: "1200px" }}>
          <AvailableCalendar />
          <div className="d-flex justify-end gap-2 mt-5">
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
              Save
            </button>
          </div>
        </div>
      </Dialog>
      {/* <div className="col-12">
        <div className="text-18 fw-500 mt-10 col-auto">
          Cancellation Policies
        </div>
        <div className="col-12 border-light rounded-8 px-15 py-15 mt-10">
          <div className="text-16  fw-500">Flexible Cancellation Policy</div>
          <div className="d-flex items-start mt-5">
            <span className="material-symbols-outlined text-15 fw-500 mr-10 lh-19">
              schedule
            </span>
            <div>
              <div className="text-14 fw-500">
                Full refund if cancelled 24 hours before check-in
              </div>
              <div className="text-12 text-light-1 lh-1">
                Guests can receive a full refund if they cancel at least 24
                hours before the check-in date.
              </div>
            </div>
          </div>
          <textarea
            className="border-light rounded-8 py-5 px-15 w-full mt-20"
            type="text"
            placeholder="Add custom policy details..."
          />
        </div>
      </div> */}

      <div className="d-flex justify-end mt-20 border-top-light pt-15">
        <button className="button border-light rounded-8 text-12 py-10 px-15 mr-10">
          Cancel
        </button>
        <button className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15">
          Save
        </button>
      </div>
    </div>
  );
};

const Calendar = () =>
  setOptions({
    theme: "ios",
    themeVariant: "light",
  });

const AvailableCalendar = () => {
  const myView = useMemo(
    () => ({
      timeline: { type: "month" },
    }),
    []
  );

  const myEvents = useMemo(
    () => [
      {
        start: "2025-06-02T00:00",
        end: "2025-06-05T00:00",
        title: "Event 1",
        resource: 1,
      },
      {
        start: "2025-06-06T00:00",
        end: "2025-06-09T00:00",
        title: "Event 2",
        resource: 1,
      },
      {
        start: "2025-06-10T00:00",
        end: "2025-06-11T00:00",
        title: "Event 2",
        resource: 1,
      },
      {
        start: "2025-06-12T00:00",
        end: "2025-06-14T00:00",
        title: "Event 2",
        resource: 1,
      },
      {
        start: "2025-06-10T09:00",
        end: "2025-06-15T15:00",
        title: "Event 2",
        resource: 3,
      },
      {
        start: "2025-06-12T00:00",
        end: "2025-06-14T00:00",
        title: "Event 3",
        resource: 4,
      },
      {
        start: "2025-06-15T07:00",
        end: "2025-06-20T12:00",
        title: "Event 4",
        resource: 5,
      },
      {
        start: "2025-06-03T00:00",
        end: "2025-06-10T00:00",
        title: "Event 5",
        resource: 6,
      },
      {
        start: "2025-06-10T08:00",
        end: "2025-06-11T20:00",
        title: "Event 6",
        resource: 7,
      },
      {
        start: "2025-06-22T00:00",
        end: "2025-06-28T00:00",
        title: "Event 7",
        resource: 7,
      },
      {
        start: "2025-06-08T00:00",
        end: "2025-06-13T00:00",
        title: "Event 8",
        resource: 2,
      },
      {
        start: "2025-06-25T00:00",
        end: "2025-06-27T00:00",
        title: "Event 9",
        resource: 10,
      },
      {
        start: "2025-06-20T00:00",
        end: "2025-06-23T00:00",
        title: "Event 10",
        resource: 9,
      },
    ],
    []
  );

  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: "Resource A",
        color: "#e20000",
      },
      {
        id: 2,
        name: "Resource B",
        color: "#76e083",
      },
      {
        id: 3,
        name: "Resource C",
        color: "#4981d6",
      },
      {
        id: 4,
        name: "Resource D",
        color: "#e25dd2",
      },
      {
        id: 5,
        name: "Resource E",
        color: "#1dab2f",
      },
      {
        id: 6,
        name: "Resource F",
        color: "#d6d145",
      },
      {
        id: 7,
        name: "Resource G",
        color: "#34c8e0",
      },
      {
        id: 8,
        name: "Resource H",
        color: "#9dde46",
      },
      {
        id: 9,
        name: "Resource I",
        color: "#166f6f",
      },
      {
        id: 10,
        name: "Resource J",
        color: "#f7961e",
      },
    ],
    []
  );
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
        { title: `Price: ${price}`, start: dateStr, color: "#6ea8fe" }
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
      content: (
        <Eventcalendar
          clickToCreate={true}
          dragToCreate={true}
          dragToMove={true}
          dragToResize={true}
          eventDelete={true}
          view={myView}
          data={myEvents}
          resources={myResources}
        />
      ),
    },
    {
      label: "Availability",
      value: "availability",
      content: (
        <div className="px-20">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              start: "prev,next,today",
              center: "title",
              end: "dayGridMonth,dayGridWeek,dayGridDay",
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

export default Services;
