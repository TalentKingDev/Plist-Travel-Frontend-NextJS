import { Switch } from "@mui/material";
import { Shield } from "lucide-react";

const Security = () => {
  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <Shield size={18} /> Security Settings
        </div>
        <div className="text-14 text-light-1">
          Configure security and authentication options
        </div>
      </div>

      <div className="col-12 mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">Two-Factor Authentication</div>
          <div className="text-14 lh-12 text-light-1">
            Require two-factor authentication for all admin users
          </div>
        </div>
        <Switch />
      </div>

      <div className="col-12 mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">Strong Password Policy</div>
          <div className="text-14 lh-12 text-light-1">
            Enforce strong password requirements for all users
          </div>
        </div>
        <Switch />
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Session Timeout (minutes)</h1>
        <input
          type="text"
          className="border-light rounded-8 h-45 px-15 text-14 w-full mt-10"
          placeholder="e.g., 30"
        />
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Max Failed Login Attempts</h1>
        <input
          type="text"
          className="border-light rounded-8 h-45 px-15 text-14 w-full mt-10"
          placeholder="e.g., 5"
        />
      </div>

      <div className="col-12 mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">IP Restriction</div>
          <div className="text-14 lh-12 text-light-1">
            Restrict admin access to specific IP addresses
          </div>
        </div>
        <Switch />
      </div>

      <div className="col-12 mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">Enforce SSL</div>
          <div className="text-14 lh-12 text-light-1">
            Force all connections to use HTTPS
          </div>
        </div>
        <Switch />
      </div>

      <div className="col-12 mt-5 d-flex justify-end pt-20 border-top-light">
        <button className="bg-dark-blue text-white rounded-8 text-14 py-5 px-15 w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Security;
