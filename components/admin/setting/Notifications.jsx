import { Switch } from "@mui/material";
import { BellRing } from "lucide-react";

const Notifications = () => {
  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <BellRing size={18} /> Notification Settings
        </div>
        <div className="text-14 text-light-1">
          Configure system notifications and alerts
        </div>
      </div>

      <div className="col-12 mt-5 border-bottom-light mb-20 pb-20">
        <div className="text-18 lh-14 fw-500 mb-10">Email Notifications</div>
        {[
          "New Bookings",
          "New User Registrations",
          "Payment Confirmations",
          "Refund Requests",
          "Support Tickets",
        ].map((notification, index) => (
          <div className="d-flex items-center justify-between h-30" key={index}>
            <div className="text-14 lh-12 fw-500">{notification}</div>
            <Switch />
          </div>
        ))}
      </div>

      <div className="col-12 mt-5 border-bottom-light mb-20 pb-20">
        <div className="text-18 lh-14 fw-500 mb-10">System Alerts</div>
        {[
          "Security Alerts",
          "Performance Issues",
          "System Errors",
          "System Updates",
        ].map((alert, index) => (
          <div className="d-flex items-center justify-between h-30" key={index}>
            <div className="text-14 lh-12 fw-500">{alert}</div>
            <Switch />
          </div>
        ))}
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Alert Email Recipients</h1>
        <input
          type="text"
          className="border-light rounded-8 h-45 px-15 text-14 w-full mt-10"
          placeholder="Enter email addresses separated by commas"
        />
        <div className="text-12 lh-12 text-light-1 mt-5">
          Separate multiple email addresses with commas
        </div>
      </div>
    </div>
  );
};

export default Notifications;
