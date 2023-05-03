import { useRouteError } from "react-router-dom";

export default function ErrorPage(children) {
	const error = useRouteError();

	if (!error) return children;

	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
}
