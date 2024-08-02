import { useState } from "react";

import Posts from "../../../components/alumniComponents/common/Posts"
import CreatePost from "./CreatePost";
import Sidebar from "../../../components/alumniComponents/common/Sidebar";

const SocialPage = () => {
	const [feedType, setFeedType] = useState("forYou");

	return (
		<>
		<div className="flex w-full">
			{/* Sidebar Alumni */}
			<Sidebar/>
			<h1>Hello Social Page</h1>

		</div>
		</>
	);
};
export default SocialPage;


// <div className="flex w-full">
		// 	<Sidebar/>
		// 	<div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
		// 		{/* Header */}
		// 		<div className='flex w-full border-b border-gray-700'>
		// 			<div
		// 				className={
		// 					"flex justify-center flex-1 p-3 hover:bg-slate-400 transition duration-300 cursor-pointer relative"
		// 				}
		// 				onClick={() => setFeedType("forYou")}
		// 			>
		// 				For you
		// 				{feedType === "forYou" && (
		// 					<div className='absolute bottom-0 w-10  h-1 rounded-full bg-blue-300'></div>
		// 				)}
		// 			</div>
		// 			<div
		// 				className='flex justify-center flex-1 p-3 hover:bg-slate-400 transition duration-300 cursor-pointer relative'
		// 				onClick={() => setFeedType("following")}
		// 			>
		// 				Following
		// 				{feedType === "following" && (
		// 					<div className='absolute bottom-0 w-10  h-1 rounded-full bg-blue-300'></div>
		// 				)}
		// 			</div>
		// 		</div>

		// 		{/*  CREATE POST INPUT */}
		// 		<CreatePost />

		// 		{/* POSTS */}
		// 		<Posts feedType={feedType} />
		// 	</div>
		// </div>