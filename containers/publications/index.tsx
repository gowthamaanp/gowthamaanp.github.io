import { PageName, PageSubHeading } from "@/components/common";
import Layout from "@/components/Layout";
import PublicationsListing from "./PublicationsListing";

const Publications = () => {
  return (
    <Layout>
      <div className="mt-5 mb-10">
        <PageName label="Publications" />
      </div>
      <PublicationsListing />
    </Layout>
  );
};

export default Publications;
