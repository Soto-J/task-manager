import { OrganizationProfile } from "@clerk/nextjs";

type OrganizationPageProps = {
  params: {
    organizationId: string;
  };
};

const OrganizationIdPage = ({ params }: OrganizationPageProps) => {
  return (
    <div>
      <h1>Organization Page</h1>
    </div>
  );
};

export default OrganizationIdPage;
