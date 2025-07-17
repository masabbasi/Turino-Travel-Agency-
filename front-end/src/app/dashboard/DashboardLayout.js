import AuthProvider from "@providers/AuthProvider";
import Dashboard from "@template/Dashboard";

function DashboardLayout() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default DashboardLayout;
