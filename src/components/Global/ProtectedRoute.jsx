import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load aunthenticated user
  const { isAuthenticated } = useUser();

  // 2. if there is no aunthenticated user, redirect to landing page
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate],
  );

  return children;
}
export default ProtectedRoute;
