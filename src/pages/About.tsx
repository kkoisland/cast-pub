import { useIntl } from "react-intl";
import { SITE_NAME } from "../constants";

const About = () => {
	const intl = useIntl();

	return (
		<div className="mx-auto max-w-2xl px-4 py-8">
			<div className="rounded-lg border border-foreground/10 p-8">
				<p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase">
					{SITE_NAME}
				</p>
				<h1 className="mt-4 text-2xl font-medium">
					{intl.formatMessage({ id: "about.heading" })}
				</h1>
				<div className="mt-6 space-y-4 text-foreground/80">
					<p>{intl.formatMessage({ id: "about.body" })}</p>
				</div>
				<div className="mt-8 border-t border-foreground/10 pt-6">
					<p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase">
						{intl.formatMessage({ id: "about.author" })}
					</p>
					<a
						href="https://www.kkoisland.com"
						target="_blank"
						rel="noreferrer"
						className="mt-2 inline-block text-sm hover:text-accent"
					>
						kkoisland.com →
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
