import AgentDashboardLayout from "../common/layout";
import svgIcon from "@/components/data/svgIcon";

const index = () => {
  return (
    <AgentDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">User Management</h1>
          <div className="text-15 text-light-1">
            Manage user access & permission.
          </div>
        </div>
      </div>

      <div className="px-15">
        <div className="row y-gap-10 justify-between py-10 border-light rounded-8 bg-white">
          <UserAccessAndPermissions />
        </div>
      </div>
    </AgentDashboardLayout>
  );
};

const UserAccessAndPermissions = () => {
  const roles = [
    {
      title: "Administrator",
      role: "Full access to all settings and functions",
    },
    {
      title: "Manager",
      role: "Can manage bookings and content, but not financial settings",
    },
    {
      title: "Booking Agent",
      role: "Can only manage bookings and availability",
    },
    {
      title: "Read Only",
      role: "Can view information but cannot make changes",
    },
  ];

  return (
    <>
      <div className="d-flex justify-between items-center mb-10">
        <div>
          <div className="text-14 fw-500 lh-1">Enable User Management</div>
          <div className="text-14 text-light-1">
            Allow multiple users to access your vendor account
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="form-check form-switch">
            <input
              className="form-check-input border-light"
              type="checkbox"
              role="switch"
              id="flexSwitchCheck"
            />
          </div>
        </div>
      </div>
      <div className="col-12 px-15">
        <div className="border-light rounded-8">
          <div className="d-flex items-center px-15 py-10">
            {svgIcon.users}
            <span className="text-14 fw-500 ml-5">User Accounts</span>
          </div>
          <div className="border-top-light py-10 px-15 py-30 d-flex flex-column items-center">
            <div className="text-14 text-light-1 text-center mb-10">
              Enable user management to add team members
            </div>
            <button className="button border-light rounded-8 text-14 fw-500 text-light-1 py-10 px-15">
              Add User
            </button>
          </div>
        </div>
      </div>
      <div className="text-14 fw-500 lh-1 mt-20">
        Available Permission Roles
      </div>
      {roles.map((role, idx) => (
        <div key={"role_" + idx} className="col-sm-6 px-15">
          <div className="py-15 px-15 d-flex flex-column border-light border-dashed rounded-8">
            <div className="text-14 fw-500 lh-1 mb-10">{role.title}</div>
            <div className="text-14 text-light-1 lh-1">{role.role}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
