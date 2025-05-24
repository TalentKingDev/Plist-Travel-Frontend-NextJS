import CreditCardIcon from "@mui/icons-material/CreditCard";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";

const SubscriptionPlan = () => {
  const currentPlan = 2;
  const subscriptionPlans = [
    {
      id: 1,
      title: "Basic",
      value: "basic",
      description: "For new vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-light-2 text-dark-1">
          <CreditCardIcon />
        </div>
      ),
      price: 19.99,
      services: ["Up to 5 listings", "Standard support", "Basic analytics"],
    },
    {
      id: 2,
      title: "Professional",
      value: "professional",
      description: "For established vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-blue-2 text-blue-1">
          <StarOutlineIcon />
        </div>
      ),
      price: 49.99,
      services: [
        "Up to 25 listings",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
      ],
      isPopular: true,
    },
    {
      id: 3,
      title: "Premium",
      value: "premium",
      description: "For power vendors",
      icon: (
        <div className="size-40 flex-center rounded-full bg-purple-2 text-purple-1">
          <ElectricBoltIcon />
        </div>
      ),
      services: [
        "Unlimited listings",
        "24/7 premium support",
        "Advanced analytics & reports",
        "Featured listings",
        "Priority search placement",
      ],
      price: 99.99,
    },
  ];

  return (
    <>
      <div className="row y-gap-20 justify-between">
        <div className="text-20 fw-600 col-auto">Subscription Plan</div>
        <div className="col-sm-auto d-flex justify-end items-center">
          <div className="text-14 fw-500 mr-10">Monthly</div>
          <div className="form-check form-switch mt-5">
            <input
              className="form-check-input border-light"
              type="checkbox"
              role="switch"
              id="serviceActive"
            />
          </div>
          <div className="text-14 fw-500 mr-20">
            Yearly
            <span className="text-green-2 text-14 fw-400 ml-5">(Save 20%)</span>
          </div>
        </div>
      </div>
      <div className="row y-gap-20">
        {subscriptionPlans.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              className={
                "rounded-8 bg-white px-15 py-15 h-100 " +
                (item.id == currentPlan ? "border-blue-1" : "border-light")
              }
            >
              <div className="d-flex flex-wrap items-center">
                <div className="d-flex items-center">
                  {item.icon}
                  <h3 className="ml-10 text-24 lh-1 fw-600">{item.title}</h3>
                </div>
                {item.isPopular && (
                  <div className="text-white px-10 rounded-100 bg-blue-1 text-10 fw-500 ms-auto">
                    Popular
                  </div>
                )}
              </div>
              <div className="text-12 lh-1 text-light-1 mt-5">
                {item.description}
              </div>
              <div className="d-flex items-end mt-20">
                <h1 className="text-30 fw-600 mr-5">${item.price} </h1>
                <div className="text-14 text-light-1 mb-5">/ month</div>
              </div>
              {item.services.map((service, idx) => (
                <div
                  className="d-flex items-center text-14 gap-2 mt-5"
                  key={"service" + idx}
                >
                  <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
                  {service}
                </div>
              ))}
              <button
                className={
                  "text-14 py-10 px-20 rounded-8 w-100 mt-20 " +
                  (item.id == currentPlan
                    ? "bg-blue-1 text-white"
                    : "fw-500 border-light text-dark-1")
                }
              >
                {item.id == currentPlan
                  ? "Current Plan"
                  : item.id > currentPlan
                  ? "Upgrade"
                  : "Select Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubscriptionPlan;
