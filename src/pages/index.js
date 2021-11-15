import * as React from "react";
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill";
import css from "lib/x/tpl";
import dataset from "data/dataset";
import disableAutoCorrect from "lib/x/disableAutoCorrect";
import DocumentTitle from "lib/x/DocumentTitle";
import SEO from "./_SEO";
import Style from "lib/x/Style";
import SVG from "components/SVG";
import toCamelCase from "utils/toCamelCase";
import toJSX from "utils/svgToJSX";
import Transition from "lib/x/Transition";
import useIconsReducer from "components/useIconsReducer";
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints";
import { px, tw } from "lib/x/cssUnits";
import { EmSpace } from "lib/x/Spaces";
import { Switch, Case } from "lib/x/Switch";

import SVGCheck from "heroicons-0.4.x/solid/Check";
import SVGCode from "heroicons-0.4.x/solid/Code";
import SVGMoon from "heroicons-0.4.x/solid/Moon";
import SVGPaperClip from "heroicons-0.4.x/solid/PaperClip";

import SVGCodeStroke from "heroicons-0.4.x/outline/Code";
import SVGMoonStroke from "heroicons-0.4.x/outline/Moon";

const LOCALSTORAGE_KEY = "awsicons.dev";

const screens = {
	sm: 640 + "px",
	md: 768 + "px",
	lg: 24 + 1024 + 24 + "px",
	xl: 24 + 1280 + 24 + "px",
};

const Reset = Style;
const Media = Style;

const SectionHero = () => (
	<section className="relative">

		{/* NOTE: Use px-* here because of backgrounds. */}
		<header className="px-4 lg:px-6 flex flex-row justify-center bg-theme dark:bg-dark-theme">
			<div className="w-full max-w-screen-xl">
				<div className="h-16" />

				<div className="flex flex-row justify-center">
					<h2 className="text-white text-xl md:text-5xl text-center">
						Dashbird AWS icon variants
					</h2>
				</div>

				<div className="mx-auto text-center">
					<div className="hidden md:block flex-row flex-wrap justify-center items-center align-top mt-4">
						<div className="w-full text-center text-xs text-white">
							<span className="inline">Forked with ♥️ from</span>
							<a href="https://awsicons.dev/" target="_blank" rel="noopener">
								{` awsicons.dev`}
							</a>
						</div>
					</div>
				</div>

				<div className="h-16" />
				<div style={{ height: "var(--search-bar-negative-margin)" }} />
			</div>
		</header>

		{/* Background */}
		<div className="absolute inset-x-0 top-full pointer-events-none">
			<Style className="text-theme dark:text-dark-theme">
				<svg
					fill="currentColor"
					viewBox="0 0 32 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
				</svg>
			</Style>
		</div>

		{/* Background (attached) */}
		<style>
			{css`
				@media (min-width: ${screens.lg}) {
					html {
						background-attachment: fixed, fixed;
						/* https://yoksel.github.io/url-encoder */
						background-image: url("data:image/svg+xml,%3Csvg fill='hsl(27, 87%, 50%)' viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' /%3E%3C/svg%3E"),
							url("data:image/svg+xml,%3Csvg fill='hsl(27, 87%, 50%)' viewBox='0 0 32 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z' /%3E%3C/svg%3E");
						background-repeat: repeat-x, no-repeat;
						background-size: 112px, 100%;
						background-position: 0 0, 0 112px;
					}
				}
				@media (min-width: ${screens.lg}) {
					html.dark {
						background-attachment: fixed, fixed;
						/* https://yoksel.github.io/url-encoder */
						background-image: url("data:image/svg+xml,%3Csvg fill='hsl(27, 87%, 50%)' viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' /%3E%3C/svg%3E"),
							url("data:image/svg+xml,%3Csvg fill='hsl(27, 87%, 50%)' viewBox='0 0 32 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z' /%3E%3C/svg%3E");
						background-repeat: repeat-x, no-repeat;
						background-size: 112px, 100%;
						background-position: 0 0, 0 112px;
					}
				}
			`}
		</style>
	</section>
);

// NOTE: Matches <DarkTooltip> for dark mode.
const Tooltip = ({ apply, children }) => (
	<div className="rounded-1 shadow-4">
		<Style className="rounded-1 shadow-px-2 dark:shadow-2">
			<div className="px-3 py-2 bg-white dark:bg-cool-gray-800">
				<Style className={apply}>
					<p
						className="font-medium text-cool-gray-800 dark:text-cool-gray-100"
						style={{
							fontSize: px(14),
							letterSpacing: "0.0125em",
						}}
					>
						{children}
					</p>
				</Style>
			</div>
		</Style>
	</div>
);

const DarkTooltip = ({ apply, children }) => (
	<div className="rounded-1 shadow-4">
		<Style className="rounded-1 shadow-2">
			<div className="px-3 py-2 bg-cool-gray-800">
				<Style className={apply}>
					<p
						className="font-medium text-cool-gray-100"
						style={{
							fontSize: px(14),
							letterSpacing: "0.0125em",
						}}
					>
						{children}
					</p>
				</Style>
			</div>
		</Style>
	</div>
);

const MemoSearch = React.memo(
	({ state, dispatch }) => {
		const inputRef = React.useRef(null);

		const media = useLayoutBreakpoints(screens);

		const [inputFocused, setInputFocused] = React.useState(true);
		const [query, setQuery] = React.useState(() => state.search.query.user);

		const [tooltip, setTooltip] = React.useState("");

		// Gets query from ?query=etc (once).
		React.useEffect(() => {
			if (!("URLSearchParams" in window)) {
				// No-op
				return;
			}
			const params = new URLSearchParams(window.location.search);
			setQuery(params.get("query") || "");
		}, []);

		// Sets ?query=etc (on query).
		React.useEffect(() => {
			if (!("URLSearchParams" in window)) {
				// No-op
				return;
			}
			if (!query) {
				window.history.pushState(null, "", "/");
			} else {
				const params = new URLSearchParams(window.location.search);
				params.set("query", query);
				window.history.pushState(null, "", `/?${params}`);
			}
		}, [query]);

		// Forces autofocus.
		React.useEffect(() => {
			if (inputRef.current.autofocus) {
				inputRef.current.focus();
			}
		}, []);

		// Auto-scroll handler.
		const mounted = React.useRef(false);
		React.useEffect(() => {
			if (process.env.NODE_ENV === "production") {
				if (!mounted.current && !query) {
					mounted.current = true;
					return;
				}
				const y =
					document.documentElement.scrollTop +
					(!media.lg ? -16 : 0) +
					inputRef.current.getBoundingClientRect().y;
				window.scrollTo(0, y);
			}
		}, [media.lg, query]);

		// Search handler.
		React.useEffect(() => {
			const id = setTimeout(() => {
				dispatch({
					type: "SEARCH",
					query,
				});
			}, 30);
			return () => {
				clearTimeout(id);
			};
		}, [query, dispatch]);

		// Shortcut handler.
		React.useEffect(() => {
			const handler = (e) => {
				const userPressedShortcut =
					e.keyCode === 27 ||
					e.key === "Escape" || // "esc"
					((e.ctrlKey || e.metaKey) && (e.keyCode === 75 || e.key === "k")) || // cmd-k
					e.keyCode === 191 ||
					e.key === "/"; // "/"
				if (!userPressedShortcut) {
					// No-op
					return;
				}
				// Not focused:
				if (document.activeElement !== inputRef.current) {
					e.preventDefault();
					inputRef.current.focus();
					// Focused:
				} else {
					if (e.keyCode === 27 || e.key === "Escape") {
						e.preventDefault();
						setQuery("");
					}
				}
			};
			document.addEventListener("keydown", handler);
			return () => {
				document.removeEventListener("keydown", handler);
			};
		}, [query]);

		return (
			// NOTE: Use h-full because of the absolute context.
			<Reset className="h-full">
				<form className="relative" onSubmit={(e) => e.preventDefault()}>
					{/* LHS */}
					<div className="absolute left-0 inset-y-0 pointer-events-none">
						<div className="px-8 pr-4 flex flex-row h-full">
							<div className="flex flex-row items-center">
								<Style
									className="w-6 h-6 text-cool-gray-400 dark:text-cool-gray-600"
									style={{ color: inputFocused && "var(--orange-500)" }}
								>
									<Style className="transition duration-200 ease-out">
										<svg
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</Style>
								</Style>
							</div>
						</div>
					</div>

					{/* Search */}
					<Reset className="block w-full h-full bg-transparent focus:outline-none">
						<input
							ref={inputRef}
							className="px-16 text-xl placeholder-cool-gray-400 dark:placeholder-cool-gray-600 text-cool-gray-800 dark:text-cool-gray-200"
							style={{
								paddingLeft: tw(8 + 6 + 4),
								paddingRight: tw(4 + (10 + 1) + (1 + 10 + 1) + (1 + 10) + 8),
							}}
							type="text"
							placeholder={
								!inputFocused ? 'Search (Press "/" to Focus)' : "Search"
							}
							value={query}
							onFocus={(e) => setInputFocused(true)}
							onBlur={(e) => setInputFocused(false)}
							onChange={(e) => setQuery(e.target.value)}
							autoFocus
							aria-label={
								!inputFocused ? 'Search (Press "/" to Focus)' : "Search"
							}
							{...disableAutoCorrect}
						/>
					</Reset>

					{/* RHS */}
					<div className="absolute right-0 inset-y-0">
						<div className="px-8 pl-4 flex flex-row h-full">
							{/* NOTE: Do not use -mx-1 on the parent element. */}
							<div className="-mr-1" />

							{/* Button */}
							<div
								className="group px-1 flex flex-row items-center"
								onFocus={(e) => setTooltip("theme")}
								onBlur={(e) => setTooltip("")}
								onMouseEnter={(e) => setTooltip("theme")}
								onMouseLeave={(e) => setTooltip("")}
							>
								<Reset className="focus:outline-none">
									<Style className="transition duration-200 ease-out">
										<button
											className="p-2 relative text-orange-500 bg-orange-500 bg-opacity-12.5 focus:bg-opacity-25 rounded-full"
											style={{
												color:
													state.controls.theme.darkMode && "var(--orange-50)",
												backgroundColor:
													state.controls.theme.darkMode && "var(--orange-500)",
											}}
											onClick={(e) =>
												dispatch({
													type: "UPDATE_CONTROLS",
													controlType: "theme",
													key: !state.controls.theme.darkMode
														? "darkMode"
														: "lightMode",
													value: true,
												})
											}
											aria-label={`Click to ${
												!state.controls.theme.darkMode
													? "Enable Dark Mode"
													: "Disable Dark Mode"
											}`}
										>
											<Style className="w-6 h-6 overflow-visible">
												{!state.controls.theme.darkMode ? (
													<svg
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
														/>
													</svg>
												) : (
													<svg
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
													</svg>
												)}
											</Style>
											{tooltip === "theme" && (
												<div className="pt-2 absolute right-0 top-full">
													<Tooltip apply="text-left whitespace-pre">
														Click to{" "}
														{!state.controls.theme.darkMode
															? "Enable Dark Mode"
															: "Disable Dark Mode"}
													</Tooltip>
												</div>
											)}
										</button>
									</Style>
								</Reset>
							</div>

							<div className="-ml-1" />
						</div>
					</div>
				</form>
			</Reset>
		);
	},
	(prev, next) => {
		const ok =
			// NOTE: search.query updates search.__results.
			prev.state.search.query === next.state.search.query &&
			prev.state.controls === next.state.controls &&
			prev.dispatch === next.dispatch;
		return ok;
	}
);

const MemoIcon = React.memo(({ variant, copyAsJSX, icon, dispatch }) => {
	const buttonRef = React.useRef(null);

	const handleClick = (e) => {
		// No-op {icon.name}:
		const selection = document.getSelection();
		if (selection.rangeCount) {
			const range = selection.getRangeAt(0);
			if (
				!range.collapsed &&
				buttonRef.current.contains(range.startContainer)
			) {
				// No-op
				return;
			}
		}

		try {
			const svg = document.getElementById(icon.name);
			const clonedSVG = svg.cloneNode(true);

			clonedSVG.removeAttribute("id");
			clonedSVG.classList.remove(...clonedSVG.classList);
			clonedSVG.classList.add(...["w-6", "h-6"]);
			clonedSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");

			// Remove unsorted attributes:
			const sortedAttrs = [...clonedSVG.attributes].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			for (const each of sortedAttrs) {
				clonedSVG.removeAttributeNode(each);
			}
			// Add sorted attributes:
			for (const each of sortedAttrs) {
				clonedSVG.setAttributeNode(each);
			}

			copyToClipboardPolyfill(
				!copyAsJSX ? clonedSVG.outerHTML : toJSX(clonedSVG.outerHTML)
			);
			buttonRef.current.focus();
		} catch (error) {
			console.error(`MemoIcon.handleClick: ${error}`);
		}

		dispatch({
			type: "SHOW_TOAST",
			key: "clipboard",
			value: icon.name,
		});
	};

	return (
		// NOTE: Use h-full because of the absolute context.
		<Reset className="block w-full h-full focus:outline-none">
			<button
				ref={buttonRef}
				className="group relative"
				onClick={handleClick}
				aria-label={`Click to Copy ${icon.name} as ${
					!copyAsJSX ? "SVG" : "JSX"
				}`}
			>
				{/* New */}
				{icon.new && (
					<div className="p-4 absolute right-0 top-0 pointer-events-none">
						<div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
					</div>
				)}

				{/* Icon */}
				<div className="flex flex-row justify-center items-center h-full">
					<Style className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform scale-0 group-hover:scale-100 group-focus:scale-100">
						{/* NOTE: Use duration-300 not duration-200. */}
						<Style className="transition duration-300 ease-out">
							<div className="w-20 h-20 bg-transparent bg-orange-500 dark:bg-orange-600 bg-opacity-12.5 dark:bg-opacity-100 rounded-full" />
						</Style>
					</Style>
				</div>
				<div className="absolute inset-0">
					<div className="flex flex-row justify-center items-center h-full">
						<Style className=" text-cool-gray-800 dark:text-cool-gray-200 group-hover:text-orange-600 group-focus:text-orange-600 dark:group-hover:text-orange-50 dark:group-focus:text-orange-50">
							<SVG id={icon.name} svg={icon.svg} />
						</Style>
					</div>
				</div>

				{/* Name */}
				<div className="p-4 absolute inset-x-0 bottom-0">
					<div className="-mx-2 -my-1 flex flex-row justify-center">
						<Reset className="subpixel-antialiased">
							<p
								className="px-2 py-1 tracking-wide leading-tight text-cool-gray-600 dark:text-cool-gray-400 cursor-text select-text truncate"
								style={{ fontSize: px(13) }}
							>
								{!copyAsJSX ? icon.name : toCamelCase(icon.name)}
							</p>
						</Reset>
					</div>
				</div>
			</button>
		</Reset>
	);
});

const SectionApp = ({ state, dispatch }) => {
	const media = useLayoutBreakpoints(screens);

	return (
		<section>
			<div
				className="px-0 lg:px-6 flex flex-row justify-center items-start"
				style={{ marginTop: "calc(-1 * var(--search-bar-negative-margin))" }}
			>
				{/* NOTE: Do not use w-full max-w-screen-xl because of px-*. */}
				<main
					className="z-10"
					style={{
						width: "100%",
						maxWidth: 1152,
					}}
				>
					{/* Search */}
					<div className="mt-0 lg:-mt-4 pt-0 lg:pt-4 sticky top-0 z-10">
						<Media className="hidden lg:block">
							<div
								className="-mx-6 absolute inset-x-0 top-0 pointer-events-none"
								style={{ zIndex: -1 }}
							>
								<div className="h-4 " />
								<div style={{ height: "calc(var(--search-bar-height) / 2)" }} />
							</div>
						</Media>
						<Style className="rounded-t-0 lg:rounded-t-6 shadow-2 dark:shadow-none">
							<div
								className="box-content bg-white dark:bg-cool-gray-900 border-b border-transparent dark:border-cool-gray-800"
								style={{ height: "var(--search-bar-height)" }}
							>
								<MemoSearch state={state} dispatch={dispatch} />
							</div>
						</Style>
					</div>

					<style>
						{css`
							#app-grid {
								display: grid;
								grid-template-columns: repeat(
									auto-fill,
									minmax(calc(160px - 1px), 1fr)
								);
								gap: 1px;
							}

							#app-grid > * {
								outline: 1px solid var(--cool-gray-200);
							}
							.dark #app-grid > * {
								outline: 1px solid var(--cool-gray-800);
							}
						`}
					</style>

					{/* Icons */}
					<Style className="rounded-0 lg:rounded-6 shadow-none lg:shadow-2">
						<div
							className="bg-white dark:bg-cool-gray-900 overflow-hidden"
							style={{
								marginTop: "calc(-1 * var(--search-bar-height))",
								paddingTop: "var(--search-bar-height)",
								minHeight: media.lg ? "100vh" : `calc(100vh - ${tw(4 + 24)})`,
							}}
						>
							<div id="app-grid">
								{state.search.__results.length < dataset.length && (
									<DocumentTitle
										title={`awsicons – ${state.search.__results.length} result${
											state.search.__results.length === 1 ? "" : "s"
										}`}
									/>
								)}
								{state.search.__results.map((each, x) => (
									<article key={each.name + x} className="pb-full relative">
										<div className="absolute inset-0">
											<MemoIcon
												variant={Object.keys(state.controls.variant).find(
													(each) => state.controls.variant[each] === true
												)}
												copyAsJSX={state.controls.copyAs.jsx}
												icon={each}
												dispatch={dispatch}
											/>
										</div>
									</article>
								))}
							</div>
						</div>
					</Style>
				</main>
			</div>

			<Media className="hidden lg:block">
				<div className="h-24" />
			</Media>
		</section>
	);
};

const MemoToast = React.memo(
	({ state, dispatch }) => (
		<Transition
			on={
				state.__toast.visible &&
				state.__toast.key +
					(!state.__toast.value ? "" : "-" + state.__toast.value)
			}
			from="transition duration-300 ease-out opacity-0 transform scale-90"
			to="transition duration-75 ease-out opacity-100 transform scale-100"
		>
			<div className="px-4 sm:px-6 py-4 fixed left-0 bottom-0 opacity-0 transform scale-90 z-30">
				<DarkTooltip>
					<span className="flex flex-row">
						<span
							className="flex flex-row items-center"
							style={{ height: px(14 * 1.5) }}
						>
							<Switch on={state.__toast.key}>
								<Case case="localStorage">
									<Style
										// className="text-green-300"
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										{/* <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> */}
										{/* 	<path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /> */}
										{/* </svg> */}
										<SVGCheck />
									</Style>
								</Case>
								<Case case="variant:solid">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<svg
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M2.166 4.99836C5.06114 4.96236 7.84481 3.87682 10 1.94336C12.155 3.87718 14.9387 4.96308 17.834 4.99936C17.944 5.64936 18 6.31936 18 7.00036C18 12.2254 14.66 16.6704 10 18.3174C5.34 16.6694 2 12.2244 2 6.99936C2 6.31736 2.057 5.64936 2.166 4.99836Z"
											/>
										</svg>
									</Style>
								</Case>
								<Case case="variant:outline">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<svg
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 2.94336C14.3567 5.05797 17.4561 6.15127 20.618 5.98336C20.867 6.94736 21 7.95736 21 8.99936C21 14.5914 17.176 19.2894 12 20.6214C6.824 19.2894 3 14.5904 3 8.99936C2.99918 7.98191 3.12754 6.96847 3.382 5.98336C6.5439 6.15127 9.64327 5.05797 12 2.94336Z"
											/>
										</svg>
									</Style>
								</Case>
								<Case case="copyAs:jsx">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<SVGCode />
									</Style>
								</Case>
								<Case case="copyAs:svg">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<SVGCodeStroke />
									</Style>
								</Case>
								<Case case="theme:darkMode">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<SVGMoon />
									</Style>
								</Case>
								<Case case="theme:lightMode">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<SVGMoonStroke />
									</Style>
								</Case>
								<Case case="clipboard">
									<Style
										style={{
											width: "1em",
											height: "1em",
										}}
									>
										<SVGPaperClip />
									</Style>
								</Case>
							</Switch>
						</span>
						<EmSpace />
						<span>
							<Switch on={state.__toast.key}>
								<Case case="localStorage">
									Synced Preferences from localStorage
								</Case>
								<Case case="variant:solid">Enabled Solid Icons</Case>
								<Case case="variant:outline">Enabled Outline Icons</Case>
								<Case case="copyAs:jsx">Enabled Copy as JSX</Case>
								<Case case="copyAs:svg">Enabled Copy as SVG</Case>
								<Case case="theme:darkMode">Enabled Dark Mode</Case>
								<Case case="theme:lightMode">Disabled Dark Mode</Case>
								<Case case="clipboard">
									Copied `
									{!state.controls.copyAs.jsx
										? state.__toast.value
										: toCamelCase(state.__toast.value)}
									` as {!state.controls.copyAs.jsx ? "SVG" : "JSX"}
								</Case>
							</Switch>
						</span>
					</span>
				</DarkTooltip>
			</div>
		</Transition>
	),
	(prev, next) => {
		const ok =
			prev.state.controls.copyAs === next.state.controls.copyAs &&
			prev.state.__toast === next.state.__toast;
		return ok;
	}
);

const Layout = () => {
	const [state, dispatch] = useIconsReducer();

	// Auto-hide toast.
	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				dispatch({
					type: "HIDE_TOAST",
				});
			}, 2.1e3);
			return () => {
				clearTimeout(id);
			};
		}, [dispatch]),
		[state.__toast]
	);

	// Gets localStorage (once).
	React.useEffect(
		React.useCallback(() => {
			const localStoragePrefs = JSON.parse(
				localStorage.getItem(LOCALSTORAGE_KEY)
			);
			if (!localStoragePrefs) {
				// No-op
				return;
			}
			dispatch({
				type: "RESTORE_PREFERENCES",
				localStoragePrefs,
			});
		}, [dispatch]),
		[]
	);

	// Sets localStorage.
	React.useEffect(() => {
		const id = setTimeout(() => {
			localStorage.setItem(
				LOCALSTORAGE_KEY,
				JSON.stringify(
					state,
					(key, value) => {
						if (key.startsWith("__")) {
							return undefined;
						}
						return value;
					},
					"\t"
				)
			);
			// Sets themePreference for layout dark mode.
			localStorage.setItem(
				"themePreference",
				!state.controls.theme.darkMode ? "light" : "dark"
			);
		}, 100);
		return () => {
			clearTimeout(id);
		};
	}, [state]);

	// (prefers-color-scheme: dark)
	React.useEffect(
		React.useCallback(() => {
			// See public/scripts/layout-dark-mode.js.
			const themePreferenceDark = () => {
				const ok =
					"themePreference" in localStorage &&
					localStorage.themePreference === "dark";
				return ok;
			};
			const prefersColorShemeDark = () => {
				const ok =
					window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches;
				return ok;
			};
			if (themePreferenceDark() || prefersColorShemeDark()) {
				dispatch({
					type: "UPDATE_CONTROLS",
					controlType: "theme",
					key: "darkMode",
					value: true,
				});
			}

			// Media listener:
			const media =
				window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
			if (!media) {
				// No-op
				return;
			}
			const handler = () => {
				dispatch({
					type: "UPDATE_CONTROLS",
					controlType: "theme",
					key: !media.matches ? "lightMode" : "darkMode",
					value: true,
				});
			};
			media.addListener(handler);
			return () => {
				media.removeListener(handler);
			};
		}, [state, dispatch]),
		[]
	);

	// Sets html.dark.
	const mounted = React.useRef(false);
	React.useEffect(() => {
		// No-op the mounted effect:
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		const html = document.documentElement;
		if (!state.controls.theme.darkMode) {
			html.classList.remove("dark");
		} else {
			html.classList.add("dark");
		}
	}, [state.controls.theme.darkMode]);

	return (
		<>
			{React.useMemo(
				() => (
					<>
						<SEO />

						<style>
							{css`
								html {
									--search-bar-height: ${tw(18)};
									--search-bar-negative-margin: ${tw(18 + 6)};
								}
							`}
						</style>

						<SectionHero />
					</>
				),
				[]
			)}

			<SectionApp state={state} dispatch={dispatch} />

			<MemoToast state={state} dispatch={dispatch} />
		</>
	);
};

export default Layout;
