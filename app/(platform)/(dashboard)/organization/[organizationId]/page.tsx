import { OrganizationProfile } from "@clerk/nextjs";

type OrganizationPageProps = {
  params: {
    organizationId: string;
  };
};

const OrganizationIdPage = ({ params }: OrganizationPageProps) => {
  return (
    <main>
      <h1>Organization Page</h1>
    </main>
  );
};

export default OrganizationIdPage;
