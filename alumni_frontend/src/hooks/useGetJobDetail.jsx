import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useGetJobDetail = () => {
    const {jobId} = useParams();
	const [loading, setLoading] = useState(false);
	const [jobDetail, setJobDetail] = useState([]);

	useEffect(() => {
		const getJobDetail = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/job-posts/${jobId}`);
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				console.log(data);
				setJobDetail(data.data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getJobDetail();
	}, []);

	return { loading, jobDetail };
};
export default useGetJobDetail;
