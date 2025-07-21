import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";

const RecentBooking = ({ detail = false }) => {
  const data = [
    {
      id: "BK001",
      service: "Hotel Sunshine",
      status: "Paid",
      total: "$600",
      paid: "$600",
      customer_type: "Individual Customer",
      vendor: "Vendor A",
      agent: "Agent X",
      booking_channel: "SaaS Platform",
      location: "New York, USA",
      created_at: "2025-04-16",
    },
    {
      id: "BK002",
      service: "Hotel Sunshine",
      status: "Unpaid",
      total: "$600",
      paid: "$0",
      customer_type: "Business Prospect",
      vendor: "Vendor B",
      agent: "Agent Y",
      booking_channel: "Affiliate Agent",
      location: "Berlin, Germany",
      created_at: "2025-04-16",
    },
    {
      id: "BK003",
      service: "Hotel Sunshine",
      status: "Paid",
      total: "$600",
      paid: "$600",
      customer_type: "Business Customer",
      vendor: "Vendor C",
      agent: "Agent Z",
      booking_channel: "OTA Channel",
      location: "Tokyo, Japan",
      created_at: "2025-04-16",
    },
    {
      id: "BK004",
      service: "Hotel Sunshine",
      status: "Process",
      total: "$600",
      paid: "$300",
      customer_type: "Individual Prospect",
      vendor: "Vendor D",
      agent: "Agent W",
      booking_channel: "Reseller Agent",
      location: "Paris, France",
      created_at: "2025-04-16",
    },
  ];
  

  const statusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-4 text-green-2";
      case "Unpaid":
        return "bg-red-4 text-red-1";
      case "Process":
        return "bg-yellow-4 text-dark-yellow";
      default:
        return "bg-light-2 text-light-1";
    }
  };

  return (
    <div className="overflow-scroll scroll-bar-1 pt-0">
      <table className="table-2 col-12">
      <thead>
        <tr className="text-light-1 fw-600">
          <th>ID</th>
          <th>Service</th>
          <th>Status</th>
          <th>Total</th>
          <th>Paid</th>
          <th>Customer Type</th>
          <th>Vendor</th>
          <th>Agent</th>
          <th>Booking Channel</th>
          <th>Location</th>
          <th>Created At</th>
        </tr>
      </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="align-middle">{index + 1}</td>
              <td className="align-middle fw-600">{row.service}</td>
              <td className="align-middle fw-500">
                <span
                  className={`rounded-100 px-10 text-center text-12 ${statusColor(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="align-middle fw-500">{row.total}</td>
              <td className="align-middle fw-500">{row.paid}</td>
              <td className="align-middle fw-500">{row.customer_type}</td>
              <td className="align-middle fw-500">{row.vendor}</td>
              <td className="align-middle fw-500">{row.agent}</td>
              <td className="align-middle fw-500">{row.booking_channel}</td>
              <td className="align-middle fw-500"><MapPin size={14} />{row.location}</td>
              <td className="align-middle fw-500">{new Date(row.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBooking;
