import { Send, User } from "lucide-react";

const Conversation = () => {
  const messages = [
    {
      id: 1,
      user: "Sarah Johnson",
      timestamp: "2023-10-14 10:23 AM",
      text: "Hello, I made a payment for my hotel booking but it’s still showing as unpaid in my account. The payment was processed on my credit card. Can you please help?",
      isSupport: false,
    },
    {
      id: 2,
      user: "Alex Support",
      timestamp: "2023-10-14 11:45 AM",
      text: "Hi Sarah, thank you for reaching out. I'm sorry to hear about the payment issue. Let me check this for you. Could you please provide your booking reference number?",
      isSupport: true,
    },
    {
      id: 3,
      user: "Sarah Johnson",
      timestamp: "2023-10-14 06:02 PM",
      text: "Sure, my booking reference is BK-78945. The payment was made on October 13th!",
      isSupport: false,
    },
    {
      id: 4,
      user: "Alex Support",
      timestamp: "2023-10-16 08:56 PM",
      text: "Thank you for providing that information. I can see the payment in our system, but it seems there was a delay in updating your booking status. I've manually updated it now, and you should see the correct status if you refresh your account page. Please let me know if you still see any issues.",
      isSupport: true,
    },
  ];

  return (
    <div className="row y-gap-10 x-gap-10">
      <div className="col-12 d-flex items-center justify-between">
        <div className="d-flex flex-column items-start gap-2">
          <div className="text-18 fw-600 lh-14">
            Ticket #TKT-1002: Payment not processed
          </div>
          <div className="d-flex items-center gap-2">
            <span className="rounded-100 px-15 text-center text-12 fw-500 bg-dark-blue text-white">
              In Progress
            </span>
            <span className="rounded-100 px-15 text-center text-12 fw-500 bg-red-3 text-brown-1">
              High Priority
            </span>
          </div>
        </div>
        <button className="button bg-white border-light rounded-8 text-14 px-20 py-10">
          Actions
        </button>
      </div>
      <div className="col-12">
        <div className="overflow-scroll scroll-bar-1 px-10 h-250">
          <div className="row y-gap-10 x-gap-10 items-center">
            {messages.map((message, index) => (
              <MessageBox
                key={index}
                message={message}
                isSupport={message.isSupport}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-12">
        <textarea
          className="rounded-8 bg-white border-light px-15 py-10"
          rows={2}
          placeholder="Type your reply..."
        />
      </div>
      <div className="col-12 d-flex gap-2">
        <button className="button bg-white border-light rounded-8 text-14 px-20 py-10">
          Add Note
        </button>
        <button className="button bg-white border-light rounded-8 text-14 px-20 py-10">
          Attach File
        </button>
        <select className="form-select ms-auto border-light w-140 rounded-8 text-14 px-20 py-10">
          <option>Select status</option>
        </select>

        <button className="button bg-dark-blue text-white px-20 py-10 rounded-8">
          <Send size={18} className="mr-10" /> Send Reply
        </button>
      </div>
    </div>
  );
};

const MessageBox = ({ message, isSupport = true }) => {
  const otherClass = isSupport
    ? "bg-dark-blue text-white ms-auto"
    : "bg-light-2 text-dark-1";
  return (
    <div
      className={`${otherClass} rounded-8 py-15 px-15 my-2 col-auto d-flex items-start gap-2`}
      style={{ maxWidth: "70%" }}
    >
      <div className="size-30 flex-center rounded-circle bg-white text-light-1">
        <User size={18} />
      </div>
      <div>
        <span
          className={
            "text-14 fw-600 lh-14 mr-10 " +
            (isSupport ? "text-white" : "text-light-1")
          }
        >
          {message.user}
        </span>
        <span className="text-12 text-light-1">{message.timestamp}</span>
        <div className="text-14 lh-14 mt-5">{message.text}</div>
      </div>
    </div>
  );
};

export default Conversation;
