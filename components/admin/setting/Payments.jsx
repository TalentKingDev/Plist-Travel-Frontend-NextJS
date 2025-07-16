import { Switch } from "@mui/material";
import { CreditCard, Link } from "lucide-react";

const Payments = () => {
  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <CreditCard size={18} /> Payment Settings
        </div>
        <div className="text-14 text-light-1">
          Configure payment gateways and options
        </div>
      </div>

      <div className="col-12 d-flex flex-column gap-2">
        <h1 className="text-14 lh-12 fw-500">Payment Gateway</h1>
        <div className="border-light rounded-8 px-15 py-15 d-flex items-center">
          <CreditCard color="#0556b3" size={22} />
          <div className="d-flex flex-column gap-1 ml-20 me-auto">
            <div className="text-16 lh-12 fw-500">Stripe</div>
            <div className="text-14 lh-12 text-light-1">
              Credit card payments via Stripe
            </div>
          </div>
          <Switch />
        </div>
        <div className="border-light rounded-8 px-15 py-15 d-flex items-center">
          <Link color="#0556b3" size={22} />
          <div className="d-flex flex-column gap-1 ml-20 me-auto">
            <div className="text-16 lh-12 fw-500">PayPal</div>
            <div className="text-14 lh-12 text-light-1">
              PayPal and credit card payments
            </div>
          </div>
          <Switch />
        </div>
        <div className="border-light rounded-8 px-15 py-15 d-flex items-center">
          <CreditCard color="#008009" size={22} />
          <div className="d-flex flex-column gap-1 ml-20 me-auto">
            <div className="text-16 lh-12 fw-500">Bank Transfer</div>
            <div className="text-14 lh-12 text-light-1">
              Direct bank transfer payments
            </div>
          </div>
          <Switch />
        </div>
      </div>

      <div className="col-12">
        <h1 className="text-14 lh-12 fw-500">Currency Display Format</h1>
        <select className="form-select rounded-8 border-light justify-between h-45 px-15 text-14 w-full mt-10">
          <option value="usd">Symbol before amount ($100)</option>
        </select>
      </div>

      <div className="col-12">
        <h1 className="text-14 lh-12 fw-500">Default Tax Rate (%)</h1>
        <input
          className="border-light rounded-8 h-45 px-15 text-14 w-full mt-10"
          placeholder="10"
        />
      </div>

      <div className="col-12 pb-20 mb-5 border-bottom-light mt-5 d-flex items-center justify-between">
        <div className="d-flex flex-column gap-2">
          <div className="text-14 lh-12 fw-500">
            Automatic Invoice Generation
          </div>
          <div className="text-14 lh-12 text-light-1">
            Automatically generate invoices for all payments
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

export default Payments;
