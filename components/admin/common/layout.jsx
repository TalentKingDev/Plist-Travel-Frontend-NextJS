import Header from "@/components/header/dashboard-header";
import Sidebar from "./Sidebar";
import Footer from "@/components/footer/Footer";

const AdminDashboardLayout = ({ children }) => {
  return (
    <>
      <div className="header-margin"></div>

      <Header />

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
        </div>

        <div className="dashboard__main">
          <div
            className="dashboard__content bg-light-2 d-flex flex-column justify-between"
            style={{ minHeight: "calc(100vh - 90px)" }}
          >
            <div className="flex-fill">{children}</div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboardLayout;
