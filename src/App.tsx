import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IntlProvider } from "./i18n";
import About from "./pages/About";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<IntlProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<ArticleList />} />
					<Route path="/about" element={<About />} />
					<Route path="/articles/:id" element={<ArticleDetail />} />
					<Route path="/articles/:id/:lang" element={<ArticleDetail />} />
				</Route>
			</Routes>
		</IntlProvider>
	);
};

export default App;
