import { useIntl } from "react-intl";
import SiteName from "./SiteName";
import { SITE_NAME } from "../constants";

const Footer = () => {
	const intl = useIntl();

	return (
		<footer className="px-4 py-6">
			<div className="mx-auto flex max-w-4xl items-center justify-between text-sm text-foreground/60">
				<span>{intl.formatMessage({ id: "footer.copyright" }, { siteName: SITE_NAME })}</span>
				<SiteName className="text-sm" />
			</div>
		</footer>
	);
};

export default Footer;
