import FormInput from "@/components/common/form/FormInput";
import { Checkbox } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const index = () => {
  const [scheduleLater, setScheduleLater] = useState(false);

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12 mt-10">
        <h1 className="text-20 lh-14 fw-600">Notification Composer</h1>
        <div className="text-14 text-light-1 lh-14">
          Create and send notifications to users
        </div>
      </div>

      <FormInput
        type="text"
        label="Notification Title"
        placeholder="Enter notification title"
        gridClass="col-12"
      />

      <FormInput
        type="textarea"
        label="Message"
        placeholder="Enter notification message"
        gridClass="col-12"
      />

      <div className="col-12">
        <h1 className="text-14 lh-12 fw-500">Target Audience</h1>
        <select className="form-select w-full border-light rounded-8 text-14 px-20 py-10 mt-10">
          <option>Select audience</option>
        </select>
      </div>

      <div className="col-12">
        <h1 className="text-14 lh-12 fw-500">Delivery Channels</h1>
        <div className="d-flex gap-2 items-center mt-5">
          <Checkbox className="px-0 py-0" />
          <div className="text-14 lh-14 fw-500">Push Notification</div>
        </div>
        <div className="d-flex gap-2 items-center mt-5">
          <Checkbox className="px-0 py-0" />
          <div className="text-14 lh-14 fw-500">Email</div>
        </div>
        <div className="d-flex gap-2 items-center mt-5">
          <Checkbox className="px-0 py-0" />
          <div className="text-14 lh-14 fw-500">SMS</div>
        </div>
        <div className="d-flex gap-2 items-center mt-5">
          <Checkbox className="px-0 py-0" />
          <div className="text-14 lh-14 fw-500">In-App Notification</div>
        </div>
      </div>

      <div className="col-12">
        <h1 className="text-14 lh-12 fw-500">Scheduling</h1>
        <div className="d-flex gap-2 items-center mt-5 mb-5">
          <Checkbox
            className="px-0 py-0"
            onClick={() => setScheduleLater(true)}
          />
          <div className="text-14 lh-14 fw-500">Schedule for later</div>
        </div>
        {scheduleLater && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              slotProps={{
                textField: {
                  sx: {
                    width: "100%",
                    "& .MuiPickersInputBase-root": { height: 45 },
                  },
                },
              }}
            />
          </LocalizationProvider>
        )}
      </div>

      <div className="col-12 mt-5 d-flex justify-end gap-3 mb-10">
        <button className="border-light rounded-8 text-14 py-5 px-15 w-full">
          Save as Draft
        </button>
        <button className="bg-dark-blue text-white rounded-8 text-14 py-5 px-15 w-full">
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default index;
