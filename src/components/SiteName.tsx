import { Link } from "react-router-dom";
import { SITE_NAME } from "../constants";

type Props = {
	className?: string;
};

const SiteName = ({ className = "text-2xl" }: Props) => {
	return (
		<Link
			to="/"
			className={`inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-black text-transparent ${className}`}
		>
			{SITE_NAME}
		</Link>
	);
};

export default SiteName;
