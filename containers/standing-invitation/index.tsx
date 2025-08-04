import Layout from "@/components/Layout";
import InvitationContent from "./InvitationContent";
import { PageName } from "@/components/common/PageName";

const StandingInvitation = () => {
  return (
    <Layout>
      <PageName label="Standing Invitation" />
      <InvitationContent />
    </Layout>
  );
};

export default StandingInvitation;
