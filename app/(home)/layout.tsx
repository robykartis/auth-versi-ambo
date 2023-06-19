import NavbarHome from "@/components/NavbarHome";

function LayoutHome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarHome />
      {children}
    </div>
  );
}

export default LayoutHome;
