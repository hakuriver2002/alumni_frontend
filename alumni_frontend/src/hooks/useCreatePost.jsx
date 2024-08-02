import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const useCreatePost = () => {
    const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

    const createPost = async ({ text, img }) => {
        setLoading(true);
		try {
			const res = await fetch("/api/posts/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text, img }),
			});

			const data = await res.json();
			if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }
            return data;
		} catch (error) {
			toast.error(error.message);
		} finally {
            toast.success("Post created successfully");
			setLoading(false);
		}
    };
    return {loading, createPost };
}
export default useCreatePost;