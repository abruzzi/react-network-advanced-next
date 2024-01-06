interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="max-w-3xl m-auto my-4 text-slate-800">{children}</div>;
};

export default Layout;
