import FormInput from "@/components/common/form/FormInput";
import { Switch } from "@mui/material";
import { Settings } from "lucide-react";

const General = () => {
  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12 border-bottom-light pb-20 mb-10">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <Settings size={18} /> General Settings
        </div>
        <div className="text-14 text-light-1">
          Manage global settings and configurations for the platform.
        </div>
      </div>

      <FormInput label="Site Name" placeholder="Site Name" gridClass="col-12" />
      <FormInput label="Site URL" placeholder="Site URL" gridClass="col-12" />
      <FormInput
        label="Admin Email"
        placeholder="Admin Email"
        gridClass="col-12"
      />
      <FormInput
        label="Support Email"
        placeholder="Support Email"
        gridClass="col-12"
      />

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Date Format</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-5">
          <option value="en-US">MM/DD/YYYY</option>
          <option value="en-GB">DD/MM/YYYY</option>
          <option value="ja-JP">YYYY/MM/DD</option>
          <option value="nl-NL">DD-MM-YYYY</option>
          <option value="en-CA">YYYY-MM-DD</option>
          <option value="de-DE">DD.MM.YYYY</option>
          <option value="ru-RU">DD.MM.YYYY</option>
          <option value="hu-HU">YYYY.MM.DD</option>
        </select>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Time Format</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-5">
          <option value="12-hour">12-hour (AM/PM)</option>
          <option value="24-hour">24-hour</option>
        </select>
      </div>

      <div className="col-12 pb-20 mb-5 border-bottom-light mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">Auto-detect User Language</div>
          <div className="text-14 lh-12 text-light-1">
            Automatically detect and set language based on user's browser
          </div>
        </div>
        <Switch />
      </div>

      <div className="col-12 mt-5 d-flex justify-end">
        <button className="bg-dark-blue text-white rounded-8 text-14 py-5 px-15 w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default General;
