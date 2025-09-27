import Navbar from '../../components/Navbar';
interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="w-full h-[100dvh] bg-black">
      {children}
      <div className="w-md absolute">
        <Navbar />
      </div>
    </div>
  );
}

export default HomeLayout;
