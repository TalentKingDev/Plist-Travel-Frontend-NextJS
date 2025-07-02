import AgentDashboardLayout from "../../common/layout";
import FormInput from "@/components/common/form/FormInput";
import ImageUploadForm from "@/components/vendor/common/ImageUploadForm";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft />
        </div>
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Create New Banner</h1>
        </div>
      </div>
      <div className="bg-white rounded-8 border-light px-20 py-15">
        <div className="row y-gap-10 x-gap-10 items-center mb-10">
          <div className="col-12">
            <div className="text-20 lh-14 fw-500">Banner Details</div>
            <div className="text-14 lh-14 text-light-1">
              Add a new promotional banner
            </div>
          </div>

          <FormInput
            label="Title"
            placeholder="Enter Page Title"
            gridClass="col-sm-6 mt-10"
          />

          <FormInput
            label="Position"
            type="select"
            options={[
              {
                label: "Home Page",
                value: "home",
              },
              {
                label: "Listing Page",
                value: "listing",
              },
              {
                label: "Category Page",
                value: "category",
              },
            ]}
            placeholder="Select position"
            gridClass="col-sm-6 mt-10"
          />

          <div className="col-12 mt-10">
            <h1 className="text-14 lh-12 fw-500 mb-10">Banner Image</h1>
            <ImageUploadForm />
          </div>

          <FormInput
            label="Link URL"
            placeholder="https://"
            gridClass="col-12 mt-10"
          />

          <FormInput
            label="Status"
            type="select"
            options={[
              {
                label: "Active",
                value: "active",
              },
              {
                label: "Inactive",
                value: "inactive",
              },
            ]}
            placeholder="Select status"
            gridClass="col-12 mt-10"
          />

          <div className="col-12 d-flex justify-end gap-2">
            <button className="border-light rounded-8 py-5 px-15 text-14">
              Cancel
            </button>
            <button className="bg-blue-1 text-white rounded-8 py-5 px-15 text-14">
              Save
            </button>
          </div>
        </div>
      </div>
    </AgentDashboardLayout>
  );
};

export default index;
