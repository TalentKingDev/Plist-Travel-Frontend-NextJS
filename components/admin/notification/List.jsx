import { Bell } from "lucide-react";

const index = () => {
  const emailCampaigns = [
    {
      title: "New Feature Announcement",
      audience: "All Users",
      sentDate: "2023-10-15",
      status: "Sent",
      opens: 1245,
      clicks: 532,
    },
    {
      title: "Holiday Season Promotion",
      audience: "Customers",
      sentDate: "2023-11-20",
      status: "Scheduled",
      opens: 0,
      clicks: 0,
    },
    {
      title: "System Maintenance Notice",
      audience: "All Users",
      sentDate: "2023-09-05",
      status: "Sent",
      opens: 2800,
      clicks: 105,
    },
    {
      title: "New Vendor Onboarding Guide",
      audience: "Vendors",
      sentDate: "2023-10-10",
      status: "Sent",
      opens: 87,
      clicks: 45,
    },
    {
      title: "Agent Commission Update",
      audience: "Agents",
      sentDate: "2023-11-01",
      status: "Draft",
      opens: 0,
      clicks: 0,
    },
  ];

  return (
    <div className="overflow-scroll scroll-bar-1">
      <div className="d-flex items-center justify-between mb-10 mt-5">
        <div className="position-relative d-flex items-center w-180 sm:w-full">
          <input
            type="text"
            placeholder="Search pages..."
            className="border-light bg-white rounded-8 px-10 py-5 pl-30"
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
        <button className="button border-light px-20 py-10 rounded-8">
          <Bell size={18} className="mr-10" /> View System Notifications
        </button>
      </div>
      <table className="table-2 col-12">
        <thead>
          <tr className="text-light-1 fw-600">
            <th>Title</th>
            <th>Audience</th>
            <th>Send Date</th>
            <th>Status</th>
            <th>Opens</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emailCampaigns.map((row, index) => (
            <tr key={index}>
              <td className="align-middle">{row.title}</td>
              <td className="align-middle">{row.audience}</td>
              <td className="align-middle">{row.sentDate}</td>
              <td className="align-middle">
                <span
                  className={`rounded-100 px-10 text-center text-12 fw-500 ${
                    {
                      Scheduled: "border-light text-dark-1",
                      Sent: "bg-dark-blue text-white",
                      Draft: "bg-light-2 text-dark-1",
                    }[row.status] || "border-light text-dark-1"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="align-middle">{row.opens}</td>
              <td className="align-middle">{row.clicks}</td>
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

export default index;
