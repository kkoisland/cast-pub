import { useIntl } from "react-intl";
import SiteName from "./SiteName";

const Footer = () => {
	const intl = useIntl();

	return (
		<footer className="px-4 py-6">
			<div className="mx-auto flex max-w-4xl items-center justify-between text-sm text-foreground/60">
				<span>{intl.formatMessage({ id: "footer.copyright" })}</span>
				<SiteName />
			</div>
		</footer>
	);
};

export default Footer;
