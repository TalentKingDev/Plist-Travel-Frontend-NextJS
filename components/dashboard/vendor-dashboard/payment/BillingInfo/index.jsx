import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Radio from "@mui/material/Radio";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FormInput from "@/components/common/form/FormInput";

const index = () => {
  const [activeMethod, setActiveMethod] = useState(1);
  const paymentMethods = [
    {
      id: 1,
      name: "Visa",
      end: "4242",
      expire: "04/2025",
      default: true,
    },
    {
      id: 2,
      name: "Mastercard",
      end: "5678",
      expire: "08/2025",
    },
  ];
  return (
    <>
      <h1 className="text-20 fw-600 ">Billing Information</h1>
      <div className="text-14 text-light-1">
        Manage your payment methods and billing details
      </div>
      <div className="col-12 mt-10">
        <div className="border-light rounded-8 shadow-4 bg-white px-20 py-20">
          <div className="d-flex items-center">
            <CreditCardIcon className="text-blue-1 mr-10" />
            <h2 className="text-24 fw-600 mb-0">Payment Methods</h2>
          </div>
          <div className="text-14 text-light-1 mb-15">
            Manage your saved payment methods
          </div>
          {paymentMethods.map((method, index) => (
            <div
              className="border-light d-flex items-center rounded-8 px-15 py-15 mt-10"
              key={index}
            >
              <Radio
                checked={activeMethod === method.id}
                onChange={() => setActiveMethod(method.id)}
                name="payment-method"
                value={method.id}
              />
              <div className="size-40 flex-center border-light rounded-8 mr-10">
                <CreditCardIcon className="text-18" />
              </div>
              <div>
                <div className="text-14 fw-500 lh-1">
                  {method.name} ending in {method.end}
                </div>
                <div className="text-12 text-light-1 lh-1 mt-10">
                  Expires {method.expire}
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-end mt-20">
            <button className="button rounded-8 bg-white border-light text-14 fw-500 px-30 py-10">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 mt-10">
        <div className="border-light rounded-8 shadow-4 bg-white px-20 py-20">
          <div className="d-flex items-center">
            <ShieldOutlinedIcon className="text-blue-1 mr-10" />
            <h2 className="text-24 fw-600 mb-0">Billing Address</h2>
          </div>
          <div className="text-14 text-light-1 mb-15">
            Your billing address information
          </div>
          <div className="row y-gap-10 x-gap-10">
            <FormInput
              label="Full Name"
              name="full-name"
              type="text"
              gridClass="col-sm-6"
              placeholder="John Doe"
            />
            <FormInput
              label="Company Name (Optional)"
              name="company-name"
              type="text"
              gridClass="col-sm-6"
              placeholder="Acme Travel LLC"
            />
            <FormInput
              label="Address Line 1"
              name="address-line-1"
              type="text"
              gridClass="col-sm-6"
              placeholder="123 Main Street"
            />
            <FormInput
              label="Address Line 2"
              name="address-line-2"
              type="text"
              gridClass="col-sm-6"
              placeholder="Suite 101"
            />
            <FormInput
              label="City"
              name="city"
              type="text"
              gridClass="col-sm-6"
              placeholder="San Francisco"
            />
            <FormInput
              label="State/Province"
              name="state"
              type="text"
              gridClass="col-sm-6"
              placeholder="California"
            />
            <FormInput
              label="Zip/Postal Code"
              name="postal-code"
              type="text"
              gridClass="col-sm-6"
              placeholder="94107"
            />
            <FormInput
              label="Country"
              name="country"
              type="text"
              gridClass="col-sm-6"
              placeholder="United States"
            />
          </div>
          <div className="d-flex justify-end mt-20">
            <button className="button rounded-8 bg-dark-4 text-14 text-white fw-400 px-30 py-10">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 mt-10">
        <div className="border-light rounded-8 shadow-4 bg-white px-20 py-20">
          <div className="d-flex items-center">
            <MonetizationOnOutlinedIcon className="text-blue-1 mr-10" />
            <h2 className="text-24 fw-600 mb-0">Tax Information</h2>
          </div>
          <div className="text-14 text-light-1 mb-15">
            Your tax and business information
          </div>
          <div className="row y-gap-10 x-gap-10">
            <FormInput
              label="Tax ID / VAT Number"
              name="tax-id"
              type="text"
              gridClass="col-sm-6"
              placeholder="US123456789"
            />
            <FormInput
              name="business-type"
              label="Business Type"
              type="text"
              gridClass="col-sm-6"
              placeholder="LLC"
            />
          </div>
          <div className="d-flex justify-end mt-20">
            <button className="button rounded-8 bg-dark-4 text-14 text-white fw-400 px-30 py-10">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
