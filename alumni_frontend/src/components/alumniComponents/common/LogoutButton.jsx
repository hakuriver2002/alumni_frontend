import { BiLogOut } from "react-icons/bi";
import useLogout from "../../../hooks/useLogout";


const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto py-5 px-5'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-black cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
