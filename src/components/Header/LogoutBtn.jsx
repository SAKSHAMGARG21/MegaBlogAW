import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSilce.js";



function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout());
        }).catch((err) => {
            console.log("Error", err);
        })
    }
    return (
        <button
            className="inline-block px-6 py-2 bg-purple-600 duration-200 hover:bg-[#8741c9] rounded-full"
            onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutBtn;