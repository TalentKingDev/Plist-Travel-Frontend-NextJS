import { User } from "lucide-react";

const BasicInfo = () => {
  return (
    <>
      <div className="row y-gap-10 bg-white px-10 py-15 rounded-8">
        <div className="col-12">
          <div className="text-20 fw-600 lh-14">Basic Infomation</div>
          <div className="text-14 text-light-1 lh-1">
            Manage your personal information
          </div>
        </div>
        <div className="col-md-2 col-sm-12 d-flex flex-column justify-center items-center">
          <User size={50} />
          <button className="button border-light text-14 rounded-8 text-12 py-10 px-15 mt-10">
            Change Photo
          </button>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="row y-gap-10 x-gap-10 items-center">
            <div className="col-md-6 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">First Name</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Last Name</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Email Address</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="text"
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h1 className="text-13 lh-14 fw-500">Phone Number</h1>
              <input
                className="border-light rounded-8 py-5 px-15 w-full mt-5"
                type="tel"
                placeholder="+1 (123) 456 7890"
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-10">
          <button className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15">
            Save Changes
          </button>
        </div>
      </div>

      <div className="row y-gap-10 bg-white px-10 py-15 rounded-8 mt-20">
        <div className="col-12">
          <div className="text-20 fw-600 lh-14">Account Settings</div>
          <div className="text-14 text-light-1 lh-1">
            Manage your account preferences
          </div>
        </div>
        <div className="col-12 mt-10">
          <div className="text-14 fw-600 lh-14">Email Notifications</div>
          <div className="text-14 text-light-1 lh-1">
            Receive email notifications for bookings and updates
          </div>
        </div>
        <div className="col-12 mt-10">
          <div className="text-14 fw-600 lh-14">SMS Notifications</div>
          <div className="text-14 text-light-1 lh-1">
            Receive SMS alerts for important updates
          </div>
        </div>
        <div className="col-12 mt-10">
          <div className="text-14 fw-600 lh-14">Two-Factor Authentication</div>
          <div className="text-14 text-light-1 lh-1">
            Add an extra layer of security to your account
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
