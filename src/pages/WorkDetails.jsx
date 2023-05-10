import { useSearchParams } from "react-router-dom";
import works from "../utils/works.json";

export default function WorkDetails() {
	const [searchParams] = useSearchParams();
	const workId = searchParams.get("workId");

	if (!workId || !works[workId]) {
		return <h2>Work not found</h2>;
	}

	return works ? <h1>Work Name: {works[workId]?.title}</h1> : <h2>Loading...</h2>;
}
