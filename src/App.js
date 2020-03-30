import React from "react";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

export default function App({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => setOpen(a => !a);
  let backDrop;
  if (open) {
    backDrop = <BackDrop handleClick={handleDrawer} />;
  }
  return (
    <div>
      <ToolBar handleClick={handleDrawer} />
      <SideDrawer open={open} />
      {backDrop}
      <main style={{ marginTop: "56px" }}>{children}</main>
    </div>
  );
}
