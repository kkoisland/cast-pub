import { IntlProvider } from "react-intl";
import { Route, Routes } from "react-router-dom";
import ja from "./i18n/ja";
import en from "./i18n/en";
import ArticleList from "./pages/ArticleList";

const locale = navigator.language.startsWith("ja") ? "ja" : "en";
const messages = locale === "ja" ? ja : en;

const App = () => {
	return (
		<IntlProvider locale={locale} messages={messages}>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/about" element={<div>About</div>} />
				<Route path="/articles" element={<ArticleList />} />
			</Routes>
		</IntlProvider>
	);
};

export default App;
