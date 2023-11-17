type PlatformLayout = {
  children: React.ReactNode;
};

const ClerkLayout = ({ children }: PlatformLayout) => {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
