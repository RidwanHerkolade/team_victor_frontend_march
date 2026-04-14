export const useUser = () => {
  //   const navigate = useNavigate();

  const token = localStorage.getItem("truemind_token");
  const user = JSON.parse(localStorage.getItem("truemind_user") || "null");
  const isAuthenticated = !!token;
  console.log(user);

  return {
    token,
    user,
    isAuthenticated,
  };
};
