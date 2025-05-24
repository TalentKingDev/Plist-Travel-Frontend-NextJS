import VenderDashboardLayout from "../common/layout";

const Conversation = () => {
  return (
    <VenderDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Messaging & Communication</h1>
          <div className="text-15 text-light-1">
            Communicate with customers, agents, and platform administrators.
          </div>
        </div>
      </div>
    </VenderDashboardLayout>
  );
};

export default Conversation;