import * as React from 'react'
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill";
import css from "lib/x/tpl";
import dataset from "data/dataset";
import disableAutoCorrect from "lib/x/disableAutoCorrect";
import DocumentTitle from "lib/x/DocumentTitle";
import Head from "next/head";
import SEO from "./_SEO";
import Style from "lib/x/Style";
import SVG from "components/SVG";
import target_blank from "lib/x/target_blank";
import toCamelCase from "utils/toCamelCase";
import toJSX from "utils/svgToJSX";
import Transition from "lib/x/Transition";
import useIconsReducer from "components/useIconsReducer";
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints";
import { px, tw } from "lib/x/cssUnits";
import { Space, EnSpace, EmSpace } from "lib/x/Spaces";
import { Switch, Case } from "lib/x/Switch";

import SVGCheck from "heroicons-0.4.x/solid/Check";
import SVGCode from "heroicons-0.4.x/solid/Code";
import SVGFlag from "heroicons-0.4.x/solid/Flag";
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

const TextRow = ({ children }) => (
	<Reset className="align-top">
		<span className="inline-flex flex-row items-center">{children}</span>
	</Reset>
);

const AbsoluteExternalLinks = () => (
	<Media className="hidden lg:block">
		<nav className="p-4 absolute left-0 top-0">
			<style>
				{css`
					.twemoji .twemoji-eyes {
						animation: cartoon-eyes 500ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
					}

					@keyframes cartoon-eyes {
						0%,
						100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.15);
						}
					}
				`}
			</style>

			<div className="-my-1">
				<a
					href={`https://twitter.com/intent/tweet?text=${encodeURI(
						"Check out Awsicons! 🔥\n\nThanks @username_ZAYDEK for awsicons.dev and @boyney123 for awsicons.dev!\n\nhttps://awsicons.dev"
					)}`}
					{...target_blank}
				>
					<Style className="py-1">
						<p className="twemoji font-medium no-underline hover:underline text-orange-50">
							<TextRow>
								<Style
									className="w-6 h-6 overflow-visible" /* style={{ color: "rgb(29, 161, 242);" }} */
								>
									{/* <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
									{/* 	<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /> */}
									{/* </svg> */}
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path
											fill="#ffcc4d"
											d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
										/>
										<path
											fill="#664500"
											d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819"
										/>
										<Style className="twemoji-eyes origin-center">
											<path
												fill="#dd2e44"
												d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z"
											/>
										</Style>
									</svg>
								</Style>
								<EmSpace />
								Tweet thank you on Twitter!
							</TextRow>
						</p>
					</Style>
				</a>

				<a href="https://github.com/boyney123/awsicons" {...target_blank}>
					<Style className="py-1">
						<p className="twemoji font-medium no-underline hover:underline text-orange-50">
							<TextRow>
								<Style className="w-6 h-6 overflow-visible">
									{/* <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> */}
									{/* 	<path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z" /> */}
									{/* </svg> */}
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path
											fill="#ffcc4d"
											d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
										/>
										<path
											fill="#664500"
											d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
										/>
										<path
											fill="#ffffff"
											d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"
										/>
										<Style className="twemoji-eyes origin-center">
											<path
												fill="#e95f28"
												d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z"
											/>
										</Style>
									</svg>
								</Style>
								<EmSpace />
								Star on GitHub
							</TextRow>
						</p>
					</Style>
				</a>
			</div>
		</nav>
	</Media>
);

const awsiconsLogo = () => (
	<div className="relative">
		<Style className="h-14 text-orange-50">
			<svg
				fill="currentColor"
				viewBox="0 0 240 56"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23.856 19.2222V30.4883H9.68802V19.2241H3.75201V30.4883V34.5203V47.0001H9.68802V34.5203H23.856V46.9982H29.792V34.5203V30.4883V19.2222H23.856Z"
				/>
				<path d="M46.9706 47.6722C44.2453 47.6722 41.8186 47.0748 39.6906 45.8802C37.5999 44.6482 35.9572 42.9495 34.7626 40.7842C33.5679 38.6188 32.9706 36.0988 32.9706 33.2242C32.9706 30.3122 33.5492 27.7548 34.7066 25.5522C35.9012 23.3495 37.5439 21.6322 39.6346 20.4002C41.7626 19.1682 44.2266 18.5522 47.0266 18.5522C49.7519 18.5522 52.1226 19.1682 54.1386 20.4002C56.1546 21.5948 57.7226 23.2002 58.8426 25.2162C59.9626 27.2322 60.5226 29.4535 60.5226 31.8802C60.5226 32.2535 60.5039 32.6642 60.4666 33.1122C60.4666 33.5228 60.4479 33.9895 60.4106 34.5122H38.7946C38.9812 37.2002 39.8586 39.2535 41.4266 40.6722C43.0319 42.0535 44.8799 42.7442 46.9706 42.7442C48.6506 42.7442 50.0506 42.3708 51.1706 41.6242C52.3279 40.8402 53.1866 39.7948 53.7466 38.4882H59.6826C58.9359 41.1015 57.4426 43.2855 55.2026 45.0402C52.9999 46.7948 50.2559 47.6722 46.9706 47.6722ZM46.9706 23.4242C44.9919 23.4242 43.2372 24.0215 41.7066 25.2162C40.1759 26.3735 39.2426 28.1282 38.9066 30.4802H54.5866C54.4746 28.3148 53.7093 26.5975 52.2906 25.3282C50.8719 24.0588 49.0986 23.4242 46.9706 23.4242Z" />
				<path d="M63.8817 47.0002V19.2242H69.2017L69.7057 24.4882C70.6764 22.6588 72.0204 21.2215 73.7377 20.1762C75.4924 19.0935 77.6017 18.5522 80.0657 18.5522V24.7682H78.4417C76.799 24.7682 75.3244 25.0482 74.0177 25.6082C72.7484 26.1308 71.7217 27.0455 70.9377 28.3522C70.191 29.6215 69.8177 31.3948 69.8177 33.6722V47.0002H63.8817Z" />
				<path d="M94.5815 47.6722C91.9309 47.6722 89.5415 47.0748 87.4135 45.8802C85.3229 44.6482 83.6615 42.9495 82.4295 40.7842C81.1975 38.5815 80.5815 36.0242 80.5815 33.1122C80.5815 30.2002 81.1975 27.6615 82.4295 25.4962C83.6989 23.2935 85.3975 21.5948 87.5255 20.4002C89.6535 19.1682 92.0242 18.5522 94.6375 18.5522C97.2882 18.5522 99.6589 19.1682 101.75 20.4002C103.878 21.5948 105.558 23.2935 106.79 25.4962C108.059 27.6615 108.694 30.2002 108.694 33.1122C108.694 36.0242 108.059 38.5815 106.79 40.7842C105.558 42.9495 103.878 44.6482 101.75 45.8802C99.6215 47.0748 97.2322 47.6722 94.5815 47.6722ZM94.5815 42.5762C96.0002 42.5762 97.3069 42.2215 98.5015 41.5122C99.7335 40.8028 100.723 39.7575 101.47 38.3762C102.216 36.9575 102.59 35.2028 102.59 33.1122C102.59 31.0215 102.216 29.2855 101.47 27.9042C100.76 26.4855 99.7895 25.4215 98.5575 24.7122C97.3629 24.0028 96.0562 23.6482 94.6375 23.6482C93.2189 23.6482 91.8935 24.0028 90.6615 24.7122C89.4669 25.4215 88.4962 26.4855 87.7495 27.9042C87.0029 29.2855 86.6295 31.0215 86.6295 33.1122C86.6295 35.2028 87.0029 36.9575 87.7495 38.3762C88.4962 39.7575 89.4669 40.8028 90.6615 41.5122C91.8562 42.2215 93.1629 42.5762 94.5815 42.5762Z" />
				<path d="M115.673 13.9602C114.553 13.9602 113.62 13.6242 112.873 12.9522C112.164 12.2428 111.809 11.3655 111.809 10.3202C111.809 9.27484 112.164 8.41618 112.873 7.74418C113.62 7.03484 114.553 6.68018 115.673 6.68018C116.793 6.68018 117.708 7.03484 118.417 7.74418C119.164 8.41618 119.537 9.27484 119.537 10.3202C119.537 11.3655 119.164 12.2428 118.417 12.9522C117.708 13.6242 116.793 13.9602 115.673 13.9602ZM112.705 47.0002V19.2242H118.641V47.0002H112.705Z" />
				<path d="M136.837 47.6722C134.112 47.6722 131.666 47.0562 129.501 45.8242C127.373 44.5922 125.693 42.8935 124.461 40.7282C123.266 38.5255 122.669 35.9868 122.669 33.1122C122.669 30.2375 123.266 27.7175 124.461 25.5522C125.693 23.3495 127.373 21.6322 129.501 20.4002C131.666 19.1682 134.112 18.5522 136.837 18.5522C140.272 18.5522 143.146 19.4482 145.461 21.2402C147.813 23.0322 149.325 25.4588 149.997 28.5202H143.781C143.408 26.9895 142.586 25.7948 141.317 24.9362C140.048 24.0775 138.554 23.6482 136.837 23.6482C135.381 23.6482 134.037 24.0215 132.805 24.7682C131.573 25.4775 130.584 26.5415 129.837 27.9602C129.09 29.3415 128.717 31.0588 128.717 33.1122C128.717 35.1655 129.09 36.9015 129.837 38.3202C130.584 39.7015 131.573 40.7655 132.805 41.5122C134.037 42.2588 135.381 42.6322 136.837 42.6322C138.554 42.6322 140.048 42.2028 141.317 41.3442C142.586 40.4855 143.408 39.2722 143.781 37.7042H149.997C149.362 40.6908 147.869 43.0988 145.517 44.9282C143.165 46.7575 140.272 47.6722 136.837 47.6722Z" />
				<path d="M166.627 47.6722C163.976 47.6722 161.587 47.0748 159.459 45.8802C157.368 44.6482 155.707 42.9495 154.475 40.7842C153.243 38.5815 152.627 36.0242 152.627 33.1122C152.627 30.2002 153.243 27.6615 154.475 25.4962C155.744 23.2935 157.443 21.5948 159.571 20.4002C161.699 19.1682 164.069 18.5522 166.683 18.5522C169.333 18.5522 171.704 19.1682 173.795 20.4002C175.923 21.5948 177.603 23.2935 178.835 25.4962C180.104 27.6615 180.739 30.2002 180.739 33.1122C180.739 36.0242 180.104 38.5815 178.835 40.7842C177.603 42.9495 175.923 44.6482 173.795 45.8802C171.667 47.0748 169.277 47.6722 166.627 47.6722ZM166.627 42.5762C168.045 42.5762 169.352 42.2215 170.547 41.5122C171.779 40.8028 172.768 39.7575 173.515 38.3762C174.261 36.9575 174.635 35.2028 174.635 33.1122C174.635 31.0215 174.261 29.2855 173.515 27.9042C172.805 26.4855 171.835 25.4215 170.603 24.7122C169.408 24.0028 168.101 23.6482 166.683 23.6482C165.264 23.6482 163.939 24.0028 162.707 24.7122C161.512 25.4215 160.541 26.4855 159.795 27.9042C159.048 29.2855 158.675 31.0215 158.675 33.1122C158.675 35.2028 159.048 36.9575 159.795 38.3762C160.541 39.7575 161.512 40.8028 162.707 41.5122C163.901 42.2215 165.208 42.5762 166.627 42.5762Z" />
				<path d="M184.358 47.0002V19.2242H189.622L190.07 24.0962C190.929 22.3788 192.18 21.0348 193.822 20.0642C195.502 19.0562 197.425 18.5522 199.59 18.5522C202.95 18.5522 205.582 19.5975 207.486 21.6882C209.428 23.7788 210.398 26.8962 210.398 31.0402V47.0002H204.518V31.6562C204.518 26.2802 202.316 23.5922 197.91 23.5922C195.708 23.5922 193.878 24.3762 192.422 25.9442C191.004 27.5122 190.294 29.7522 190.294 32.6642V47.0002H184.358Z" />
				<path d="M225.678 47.6722C222.168 47.6722 219.275 46.8135 216.998 45.0962C214.72 43.3788 213.414 41.1015 213.078 38.2642H219.07C219.368 39.5335 220.078 40.6348 221.198 41.5682C222.318 42.4642 223.792 42.9122 225.622 42.9122C227.414 42.9122 228.72 42.5388 229.542 41.7922C230.363 41.0455 230.774 40.1868 230.774 39.2162C230.774 37.7975 230.195 36.8455 229.038 36.3602C227.918 35.8375 226.35 35.3708 224.334 34.9602C222.766 34.6242 221.198 34.1762 219.63 33.6162C218.099 33.0562 216.811 32.2722 215.766 31.2642C214.758 30.2188 214.254 28.8188 214.254 27.0642C214.254 24.6375 215.187 22.6215 217.054 21.0162C218.92 19.3735 221.534 18.5522 224.894 18.5522C227.992 18.5522 230.494 19.2988 232.398 20.7922C234.339 22.2855 235.478 24.3948 235.814 27.1202H230.102C229.915 25.9255 229.355 24.9922 228.422 24.3202C227.526 23.6482 226.312 23.3122 224.782 23.3122C223.288 23.3122 222.131 23.6295 221.31 24.2642C220.488 24.8615 220.078 25.6455 220.078 26.6162C220.078 27.5868 220.638 28.3522 221.758 28.9122C222.915 29.4722 224.427 29.9762 226.294 30.4242C228.16 30.8348 229.878 31.3202 231.446 31.8802C233.051 32.4028 234.339 33.1868 235.31 34.2322C236.28 35.2775 236.766 36.8082 236.766 38.8242C236.803 41.3628 235.814 43.4722 233.798 45.1522C231.819 46.8322 229.112 47.6722 225.678 47.6722Z" />
			</svg>
		</Style>
		<div className="absolute left-full inset-y-0">
			<div className="flex flex-row items-center h-full">
				<Style className="-mb-1 w-11 h-11 text-orange-50 opacity-50">
					<SVGFlag />
				</Style>
			</div>
		</div>
	</div>
);


// <a href="https://github.com/tailwindlabs/awsicons/archive/v0.4.1.zip" {...target_blank}>
const CTAButtons = () => (
	<div className="flex flex-col sm:flex-row w-full sm:w-auto">
		<Reset className="block">
			<a href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...target_blank}>
				<div className="p-5 bg-orange-50 bg-opacity-18.75 dark:bg-opacity-12.5 rounded-3">
					<p className="text-center sm:text-left font-medium text-lg leading-none text-orange-50">
						<TextRow>
							<Style className="w-5 h-5" style={{ filter: "brightness(125%)" }}>
								<svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
									<path
										fill="#1abcfe"
										d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
									/>
									<path
										fill="#0acf83"
										d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
									/>
									<path
										fill="#ff7262"
										d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
									/>
									<path
										fill="#f24e1e"
										d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
									/>
									<path
										fill="#a259ff"
										d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
									/>
								</svg>
							</Style>
							<EnSpace />
							Open in Figma
						</TextRow>
					</p>
				</div>
			</a>
		</Reset>

		<div className="w-3 h-3" />
		<Reset className="block">
			<a href="https://github.com/tailwindlabs/awsicons" {...target_blank}>
				<div className="p-5 bg-orange-50 bg-opacity-18.75 dark:bg-opacity-12.5 rounded-3">
					<p className="text-center sm:text-left font-medium text-lg leading-none text-orange-50">
						<TextRow>
							<Style className="w-5 h-5">
								<svg
									fill="currentColor"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z" />
								</svg>
							</Style>
							<EnSpace />
							Open in GitHub
						</TextRow>
					</p>
				</div>
			</a>
		</Reset>
	</div>
);

const Sponsors = () => (
	<div className="relative">
		{/* Center (<= xl) */}
		<Media className="block xl:hidden">
			<div className="py-6 absolute inset-x-0 bottom-full">
				<Style className="text-center">
					<p
						className="font-bold tracking-wide leading-none text-orange-50 opacity-87.5"
						style={{ fontSize: "0.6875rem" }}
					>
						<TextRow>
							awsicons.DEV IS SPONSORED BY
							<EnSpace />
							&middot;
							<EnSpace />
							UNAFFILIATED WITH TAILWIND LABS
						</TextRow>
					</p>
				</Style>
			</div>
		</Media>

		{/* LHS */}
		<Media className="hidden xl:block">
			<div className="py-6 absolute left-0 bottom-full">
				<p
					className="font-bold tracking-wide leading-none text-orange-50 opacity-87.5"
					style={{ fontSize: "0.6875rem" }}
				>
					awsicons.DEV IS SPONSORED BY
				</p>
			</div>
		</Media>

		{/* RHS */}
		<Media className="hidden xl:block">
			<div className="py-6 absolute right-0 bottom-full">
				<p
					className="font-bold tracking-wide leading-none text-orange-50 opacity-87.5"
					style={{ fontSize: "0.6875rem" }}
				>
					UNAFFILIATED WITH TAILWIND LABS
				</p>
			</div>
		</Media>
	</div>
);

const SectionHero = () => (
	<section className="relative">
		<AbsoluteExternalLinks />

		{/* NOTE: Use px-* here because of backgrounds. */}
		<header className="px-4 lg:px-6 flex flex-row justify-center bg-theme dark:bg-dark-theme">
			<div className="w-full max-w-screen-xl">
				<div className="h-16" />

				<div className="flex flex-row justify-center">
					<h2 className="text-white text-xl md:text-5xl text-center">Quickly Find & Copy AWS Icons</h2>
				</div>

				<div className="flex flex-row justify-center">
					<p className="text-white text-xs md:text-xl text-center mt-6 md:mt-0">Open source SVG icon library with over {Math.floor(dataset.length / 100) * 100}+ icons
</p>
				</div>

				<div className="h-2" />


				<div className="mx-auto text-center">
					<div className="hidden md:block flex-row flex-wrap justify-center items-center align-top mt-4">
						{/* <a
							href="https://github.com/boyney123/awstools#adding-a-resource"
							target="_blank"
							rel="noreferrer"
							type="button"
							class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-lg bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Add icon to list
							<svg
								class="ml-3 -mr-1 h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
								></path>
							</svg>
						</a> */}
						<a
							href="https://awstools.dev?ref=awsicons.dev"
							target="_blank"
							rel="noreferrer"
							type="button"
							class="inline-flex ml-3 items-center px-6 py-3 text-base font-medium rounded-md text-white border border-orange border-dashed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Checkout awstools.dev
							<svg
								class="ml-3 -mr-1 h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								></path>
							</svg>
						</a>
						<div className="w-full text-center text-xs mt-4 text-white">
							Contribute within seconds. Build by{" "}
							<a
								href="https://twitter.com/boyney123"
								target="_blank"
								rel="noopener"
							>
								@boyney123
							</a>
						</div>
						<div className="w-full text-center text-xs text-white">
						<span className="inline">Forked with ♥️ from</span>
							<a
								href="https://heroicons.dev?ref=awsicons.dev"
								target="_blank"
								rel="noopener"
							>
								{` heroicons.dev`}
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
