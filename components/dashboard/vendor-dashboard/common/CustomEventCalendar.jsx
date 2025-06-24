import { Eventcalendar, setOptions } from "@mobiscroll/react";
import { useMemo, useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

setOptions({
  theme: "ios",
  themeVariant: "light",
});
const CustomEventCalendar = () => {
  const [viewType, setViewType] = useState("month");

  const myView = useMemo(
    () => ({
      timeline: {
        type: viewType,
        resolutionHorizontal:
          viewType == "month" ? "week" : viewType == "week" ? "day" : "hour",
      },
    }),
    [viewType]
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
        start: "2025-06-02T00:00",
        end: "2025-06-05T00:00",
        title: "Event 1 - Deluxe Room",
        resource: "Deluxe Room - Room 1",
      },
      {
        start: "2025-06-06T00:00",
        end: "2025-06-09T00:00",
        title: "Event 2 - Deluxe Room",
        resource: "Deluxe Room - Room 1",
      },
      {
        start: "2025-06-10T00:00",
        end: "2025-06-11T00:00",
        title: "Event 2 - Deluxe Room",
        resource: "Deluxe Room - Room 2",
      },
      {
        start: "2025-06-12T00:00",
        end: "2025-06-14T00:00",
        title: "Event 2 - Deluxe Room",
        resource: "Deluxe Room - Room 2",
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
        name: "Deluxe Room",
        children: [
          {
            name: "Room 1",
            id: "Deluxe Room - Room 1",
            color: "#e20000",
          },
          {
            name: "Room 2",
            id: "Deluxe Room - Room 2",
            color: "#e20000",
          },
        ],
        color: "#e20000",
      },
      {
        id: 2,
        name: "Suite",
        color: "#76e083",
      },
      {
        id: 3,
        name: "Standard Room",
        color: "#4981d6",
      },
      {
        id: 4,
        name: "Cozy Beachfront Cottage",
        color: "#e25dd2",
      },
      {
        id: 5,
        name: "Conference Hall",
        color: "#1dab2f",
      },
      {
        id: 6,
        name: "Garden",
        color: "#d6d145",
      },
      {
        id: 7,
        name: "Rooftop",
        color: "#34c8e0",
      },
      {
        id: 8,
        name: "Historic Downtown Walking Tour",
        color: "#9dde46",
      },
      {
        id: 9,
        name: "Yoga in the Park",
        color: "#166f6f",
      },
      {
        id: 10,
        name: "Summer Music Festival",
        color: "#f7961e",
      },
    ],
    []
  );

  return (
    <>
      <div className="d-flex justify-end items-center mb-10 mr-10">
        <select
          className="form-select rounded-8 border-light justify-between text-16 px-15 w-140 text-14"
          onChange={(event) => setViewType(event.target.value)}
        >
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>
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
    </>
  );
};

export default CustomEventCalendar;
