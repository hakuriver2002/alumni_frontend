import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetJobList = () => {
	const [loading, setLoading] = useState(false);
	const [jobLists, setJobLists] = useState([]);

	useEffect(() => {
		const getJobLists = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/job-posts?page=1");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				console.log(data);
				setJobLists(data.data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getJobLists();
	}, []);

	return { loading, jobLists };
};
export default useGetJobList;
