const CouponList = ({ detail = false }) => {
  const data = [
    {
      code: "SUMMER2023",
      description: "Summer Sale Discount",
      discount: "20%",
      usage: "45/100",
      expiry: "Aug 31, 2023",
    },
    {
      code: "WELCOME50",
      description: "New Customer Discount",
      discount: "$50",
      usage: "32/50",
      expiry: "Dec 31, 2023",
    },
    {
      code: "FLASH25",
      description: "Flash Sale",
      discount: "25%",
      usage: "18/20",
      expiry: "Jul 15, 2023",
    },
  ];

  return (
    <div className="overflow-scroll scroll-bar-1 pt-0">
      <table className="table-2 col-12">
        <thead>
          <tr className="text-light-1 fw-600">
            <th>Code</th>
            <th>Description</th>
            <th>Discount</th>
            <th>Usage</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="align-middle">{row.code}</td>
              <td className="align-middle">{row.description}</td>
              <td className="align-middle">{row.discount}</td>
              <td className="align-middle">{row.usage}</td>
              <td className="align-middle">{row.expiry}</td>
              <td className="align-middle">
                <span className="material-symbols-outlined">more_horiz</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponList;
