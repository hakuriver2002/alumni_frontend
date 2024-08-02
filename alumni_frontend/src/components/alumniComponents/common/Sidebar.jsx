import logo from "../../../assets/logo_tdtu.png"

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCommentDots } from "react-icons/fa6";
import { useAuthContext } from "../../../context/authContext";
import LogoutButton from "./LogoutButton";
import useGetProfile from "../../../hooks/useGetProfile";

const Sidebar = () => {
	const {authUser} = useAuthContext();

	const {loading, profile} = useGetProfile();
	// console.log(profile?.data?.admin.firstName);
	
	return (
		<div className='md:flex-[2_2_0] w-18 max-w-52'>
			<div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
				<Link to='/alumni' className='flex justify-center md:justify-start'>
					<img
					src={logo}
					class="px-3 w-15 h-36 rounded-full fill-white"
					alt={"Alumni TDTU"}
					/>
				</Link>
				<ul className='flex flex-col gap-3 mt-4'>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/alumni'
							className='flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<MdHomeFilled className='w-8 h-8' />
							<span className='text-lg hidden md:block'>Home</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/alumni/notifications'
							className='flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<IoNotifications className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Notifications</span>
						</Link>
					</li>

					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/alumni/profile/`}
							className='flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<FaUser className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Profile</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/alumni/chat`}
							className='flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<FaCommentDots className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Chat</span>
						</Link>
					</li>
				</ul>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;
