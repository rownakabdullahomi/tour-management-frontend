import { Outlet } from "react-router";
import CommonLayout from "./components/layouts/CommonLayout";
import { generateRoutes } from "./utils/generateRoutes";
import { adminSidebarItems } from "./routes/adminSidebarItems";

function App() {
  console.log(generateRoutes(adminSidebarItems));
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
