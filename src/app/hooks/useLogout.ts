import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import { logout } from "../auth/authSlice";

export function useLogout() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    return () => {
        dispatch(logout());
        // navigate("/login");
    };
}