"use client";

import svgIcon from "@/components/data/svgIcon";
import VendorDashboardLayout from "../../common/layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Eventcalendar, setOptions } from "@mobiscroll/react";
import { useMemo } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const index = () => {
  const myView = useMemo(
    () => ({
      timeline: {
        type: "month",
      },
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
        resource: 15,
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
        resource: 12,
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
      {
        id: 11,
        name: "Resource K",
        color: "#34c8e0",
      },
      {
        id: 12,
        name: "Resource L",
        color: "#af0000",
      },
      {
        id: 13,
        name: "Resource M",
        color: "#446f1c",
      },
      {
        id: 14,
        name: "Resource N",
        color: "#073138",
      },
      {
        id: 15,
        name: "Resource O",
        color: "#4caf00",
      },
    ],
    []
  );

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 justify-between items-end mb-10">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Booking Calendar</h1>
          <div className="text-15 text-light-1">
            Manage and track bookings for your listings in calendar view.
          </div>
        </div>
      </div>

      <div className="bg-white border-light rounded-8 py-20 px-20">
        <div className="row y-gap-10 x-gap-10 justify-between items-center mb-10">
          <div className="col-auto">
            <h1 className="text-24 fw-600">Booking Calendar</h1>
          </div>
          <div className="col-md-auto d-flex justify-end items-center">
            <button className="border-light text-16 h-50 px-15 rounded-8 mr-10 d-flex items-center">
              {svgIcon.filter_alt}&nbsp;<span>Status Filter</span>
            </button>
            <select className="form-select rounded-8 border-light justify-between text-16 px-15 h-50 w-140 text-14">
              <option value="" defaultValue>
                All Statuses
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex items-center mb-20">
          <span className="bg-blue-1 text-white text-10 rounded-100 px-10 mr-5">
            Confirmed
          </span>
          <span className="bg-dark-yellow text-white text-10 rounded-100 px-10 mr-5">
            Pending
          </span>
          <span className="bg-red-1 text-white text-10 rounded-100 px-10 mr-5">
            Cancelled
          </span>
        </div>
        <div className="border-light rounded-8 py-20 px-20">
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
          {/* <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              start: "prev,next,today",
              center: "title",
              end: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
          /> */}
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
