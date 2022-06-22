import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const { singOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create a post</h1>
      <button onClick={() => singOut(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </div>
  );
};

export { Createpost };
