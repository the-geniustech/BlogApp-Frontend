import { useUser } from "../features/authentication/useUser";
import AppLayout from "./AppLayout";
import Spinner from "./Spinner";

function ProtectedRoute() {
  const { isLoadingUser } = useUser();

  return isLoadingUser ? (
    <div className="flex justify-center items-center bg-gray-50 h-screen">
      <Spinner />
    </div>
  ) : (
    <AppLayout />
  );
}

export default ProtectedRoute;
