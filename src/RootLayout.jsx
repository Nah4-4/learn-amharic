import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function RootLayout() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
      <Header />
      <div style={{flex:"1"}}>
        <Outlet />
      </div>
    </div>
  );
}
