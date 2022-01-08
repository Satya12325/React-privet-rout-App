import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Button from "@mui/material/Button";

export default function Login() {
  const [Auth, { handleSignIn }] = useContext(AuthContext);

  if (Auth) {
    return <Redirect to="/dashbord" />;
  }
  return (
    <div>
      <h5>Plese Login to Visit </h5>
      <div>
        <Button size="medium" onClick={handleSignIn}>
          Login
        </Button>
      </div>
    </div>
  );
}
