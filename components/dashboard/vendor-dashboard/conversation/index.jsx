"use client";

import { act, useState } from "react";
import VenderDashboardLayout from "../common/layout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import svgIcon from "@/components/data/svgIcon";

const Conversation = () => {
  const [activeChat, setActiveChat] = useState(null);
  const chatList = [
    {
      id: 1,
      name: "John Smith",
      last_message:
        "I have a question about my booking for the Luxury Beach Resort...",
      time: "2m ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      last_message:
        "Thanks for confirming my tour booking. I'm looking forward to it!",
      time: "1h ago",
      message_list: [],
    },
    {
      id: 3,
      name: "Michael Brown",
      last_message: "Is the wine tasting experience suitable for beginners?",
      time: "Yesterday",
    },
    {
      id: 4,
      name: "Emily Davis",
      last_message: "I need to cancel my booking due to an emergency.",
      time: "2d ago",
    },
    {
      id: 5,
      name: "Support Team",
      last_message: "Your account has been verified successfully!",
      time: "1w ago",
    },
  ];

  return (
    <VenderDashboardLayout>
      <div
        className="row y-gap-20 x-gap-20 justify-between"
        style={{ height: "calc(100vh - 300px)", minHeight: "300px" }}
      >
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Messaging & Communication</h1>
          <div className="text-15 text-light-1">
            Communicate with customers, agents, and platform administrators.
          </div>
        </div>
        <div className="col-4 h-100">
          <div className="bg-white rounded-8 border-light pb-15 d-flex flex-column h-100">
            <div className=" flex-shrink-0">
              <div className="d-flex justify-between items-center px-15 py-15">
                <h1 className="text-18 fw-500">Conversation</h1>
                <span className="bg-dark-blue text-white text-10 fw-400 px-10 rounded-100">
                  5
                </span>
              </div>
              <div className="position-relative d-flex items-center mr-15 ml-15 mb-10">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="border-light rounded-8 px-10 py-5 pl-30"
                />
                <i
                  className="icon-search text-light-1 position-absolute"
                  style={{
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></i>
              </div>
            </div>
            <div className="overflow-scroll scroll-bar-1 flex-grow-1">
              {chatList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveChat(item)}
                  className={
                    "border-top-light border-bottom-light py-10 px-10 d-flex items-center cursor-pointer " +
                    (item.id === activeChat?.id ? "bg-light-2" : "bg-white")
                  }
                  style={{ marginTop: "-1px" }}
                >
                  <div className="size-40 flex-center text-light-1 rounded-100 bg-white border-light mr-10 flex-shrink-0">
                    <PersonOutlineOutlinedIcon />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex justify-between items-center mb-10">
                      <div className="text-16 fw-500 lh-1">{item.name}</div>
                      <div className="text-10 text-light-1 lh-1">
                        {item.time}
                      </div>
                    </div>
                    <div className="text-12 text-light-1 lh-1 text-nowrap overflow-hidden text-truncate w-100">
                      {item.last_message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="bg-white rounded-8 border-light d-flex flex-column h-100">
            {activeChat && (
              <div className="d-flex justify-between items-center px-15 py-15">
                <div className="size-40 flex-center text-light-1 rounded-100 bg-white mr-10 flex-shrink-0">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="d-flex flex-column justify-between h-100">
                  <div className="text-18 fw-500 lh-1">{activeChat.name}</div>
                  <div className="text-12 text-light-1 fw-400 lh-1 mt-10">
                    Booking #B-1234 • Luxury Beach Resort
                  </div>
                </div>
                <div className="flex-grow-1 d-flex justify-end align-items-center">
                  <span className="size-24 flex-center cursor-pointer">
                    {svgIcon.phone}
                  </span>
                  <span className="size-24 flex-center cursor-pointer ml-20">
                    {svgIcon.video_camera}
                  </span>
                  <span className="size-24 flex-center cursor-pointer ml-20">
                    {svgIcon.more_horiz}
                  </span>
                </div>
              </div>
            )}
            <div className="flex-grow-1 overflow-scroll scroll-bar-1 border-top-light border-bottom-light"></div>
            <div className="px-15 py-15">
              <textarea
                className="border-light rounded-8 px-10 py-10"
                name="message"
                id="message"
                rows={3}
                placeholder="Type your message..."
              />
              <div className="d-flex justify-between items-center">
                <button className="border-light rounded-8 size-40 flex-center">
                  {svgIcon.attachment}
                </button>
                <button className="bg-dark-blue text-white rouned-8 text-14 fw-400 px-20 py-10 lh-14">
                  {svgIcon.send_message} Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </VenderDashboardLayout>
  );
};

export default Conversation;
