import Navbar from "./_components/navbar";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
