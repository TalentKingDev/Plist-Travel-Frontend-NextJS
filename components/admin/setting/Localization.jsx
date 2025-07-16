import { Checkbox, Switch } from "@mui/material";
import { Languages } from "lucide-react";

const Localization = () => {
  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <Languages size={18} /> Localization & Language
        </div>
        <div className="text-14 text-light-1">
          Configure language and regional settings
        </div>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Default Language</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-5">
          <option value="english">English</option>
          <option value="spanish">Español</option>
        </select>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Default Timezone</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-5">
          <option value="utc">UTC</option>
        </select>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Enabled Languages</h1>
        <div className="row y-gap-10 x-gap-10 mt-5">
          {[
            "English",
            "Spanish",
            "French",
            "German",
            "Japanese",
            "Chinese",
          ].map((lang, index) => (
            <div
              className="col-sm-6 d-flex items-center justify-start"
              key={index}
            >
              <Checkbox className="px-0 py-0" />
              <div className="text-14 lh-12 fw-500">{lang}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Default Currency</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-5">
          <option value="usd">US Dollar (USD)</option>
          <option value="cad">United States Dollar (CAD)</option>
          <option value="eur">Euro (EUR)</option>
          <option value="jpy">Japanese Yen (JPY)</option>
          <option value="aud">Australian Dollar (AUD)</option>
          <option value="gbp">British Pound (GBP)</option>
          <option value="sgd">Singapore Dollar (SGD)</option>
          <option value="hkd">Hong Kong Dollar (HKD)</option>
          <option value="nzd">New Zealand Dollar (NZD)</option>
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

export default Localization;
