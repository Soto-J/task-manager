import OrgControl from "./_components/org-control";

type OrganizationIdLayoutProps = {
  children: React.ReactNode;
};

const OrganizationIdLayout = ({ children }: OrganizationIdLayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
