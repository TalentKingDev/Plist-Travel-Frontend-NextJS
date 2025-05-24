import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DownloadIcon from "@mui/icons-material/Download";

const index = () => {
  const history = [
    {
      date: "Apr 15, 2023",
      invoiceId: "INV-2023-0412",
      description: "Professional Plan - Monthly",
      amount: "$49.99",
      status: "Paid",
    },
    {
      date: "Mar 15, 2023",
      invoiceId: "INV-2023-0311",
      description: "Professional Plan - Monthly",
      amount: "$49.99",
      status: "Paid",
    },
    {
      date: "Feb 15, 2023",
      invoiceId: "INV-2023-0210",
      description: "Professional Plan - Monthly",
      amount: "$49.99",
      status: "Paid",
    },
    {
      date: "Jan 15, 2023",
      invoiceId: "INV-2023-0109",
      description: "Basic Plan - Monthly",
      amount: "$19.99",
      status: "Paid",
    },
    {
      date: "Dec 15, 2022",
      invoiceId: "INV-2022-1208",
      description: "Basic Plan - Monthly",
      amount: "$19.99",
      status: "Paid",
    },
  ];

  return (
    <>
      <div className="d-flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-20 fw-600 ">Payment History</h1>
          <div className="text-14 text-light-1">
            View your past payments and invoices
          </div>
        </div>
        <div className="ms-auto">
          <button className="button border-light text-14 fw-500 rounded-8 py-10 px-15 bg-white">
            <DownloadIcon className="mr-5" />
            Download All Invoices
          </button>
        </div>
      </div>
      <div className="border-light mt-30 bg-white rounded-8 shadow-4 px-20">
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-2 col-12">
            <thead className="text-light-1">
              <tr>
                <th>Date</th>
                <th>Invoice ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.invoiceId}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span className="text-10 fw-500 bg-green-1 text-green-3 rounded-100 px-15 border-green-3">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <MoreHorizIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
