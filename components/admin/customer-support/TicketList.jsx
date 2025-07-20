import { User } from "lucide-react";

const TicketList = () => {
  const tickets = [
    {
      ticket_id: "TKT-1001",
      customer_name: "John Smith",
      customer_email: "john@example.com",
      issue: "Booking cancellation issue",
      status: "Open",
      priority: "High",
      last_updated: "2023-10-16",
    },
    {
      ticket_id: "TKT-1002",
      customer_name: "Sarah Johnson",
      customer_email: "sarah@example.com",
      issue: "Payment not processed",
      status: "In Progress",
      priority: "High",
      last_updated: "2023-10-16",
    },
    {
      ticket_id: "TKT-1003",
      customer_name: "Michael Brown",
      customer_email: "michael@example.com",
      issue: "Unable to update profile",
      status: "Open",
      priority: "Medium",
      last_updated: "2023-10-13",
    },
    {
      ticket_id: "TKT-1004",
      customer_name: "Emily Davis",
      customer_email: "emily@example.com",
      issue: "Hotel amenities not as described",
      status: "In Progress",
      priority: "Medium",
      last_updated: "2023-10-15",
    },
    {
      ticket_id: "TKT-1005",
      customer_name: "David Wilson",
      customer_email: "david@example.com",
      issue: "Refund request for cancellation",
      status: "Resolved",
      priority: "High",
      last_updated: "2023-10-14",
    },
  ];

  return (
    <div className="overflow-scroll scroll-bar-1 pt-0">
      <table className="table-2 col-12">
        <thead>
          <tr className="text-light-1 fw-600">
            <th>Id</th>
            <th>Customer</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((row, index) => (
            <tr key={index}>
              <td className="align-middle">{row.ticket_id}</td>
              <td className="align-middle">
                <div className="d-flex items-center gap-3">
                  <User size={18} className="text-light-1" />
                  <div className="d-flex flex-column items-start">
                    <div className="text-14 fw-600 lh-14">
                      {row.customer_name}
                    </div>
                    <div className="text-14 text-light-1 lh-14">
                      {row.customer_email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="align-middle">{row.issue}</td>
              <td className="align-middle">
                <span
                  className={`rounded-100 px-15 text-center text-12 fw-500 ${
                    {
                      Open: "bg-red-4 text-red-1",
                      "In Progress": "bg-dark-blue text-white",
                      Resolved: "bg-light-2 text-dark-1",
                    }[row.status] || "bg-gray-4 text-gray-3"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="align-middle">
                <span
                  className={`rounded-100 px-15 text-center text-12 fw-500 ${
                    {
                      Medium: "bg-yellow-4 text-brown-1",
                      High: "bg-red-3 text-brown-1",
                    }[row.priority] || "bg-gray-4 text-gray-3"
                  }`}
                >
                  {row.priority}
                </span>
              </td>
              <td className="align-middle">{row.last_updated}</td>
              <td className="align-middle">
                <span className="material-symbols-outlined">more_horiz</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
