const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="grid grid-cols-2 h-screen"
      style={{ gridTemplateColumns: "20rem auto" }}
    >
      <div className="h-full bg-red-500">Side</div>
      {children}
    </div>
  );
};

export default Layout;
