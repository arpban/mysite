// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Other
import { version } from '../package'

let progress

const stopProgress = () => {
	clearTimeout(progress)
	Progress.done()
}

// Only show progress bar if page
// transition takes longer than 200 milliseconds
Router.onRouteChangeStart = () => {
	progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Log a sweet message in the browser
// Showing the version and GitHub repository
if (global.document) {
	const info = [
		`Version: ${version}`,
		`You can find the code here: https://github.com/leo/site`,
		`Have a great day! :)`
	]

	for (const message of info) {
		console.log(message)
	}
}

export default ({ children }) =>
	<main>
		<Head>
			<link rel="shortcut icon" href="static/waves.png" type="image/x-icon" />
			<link rel="icon" href="static/waves.png" type="image/x-icon" />

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, user-scalable=no"
			/>
			<meta
				name="description"
				content="Arpit bansal. Personal website."
			/>
			<meta name="twitter:site" content="@arp_ban" />
			<meta name="twitter:creator" content="@arp_ban" />
			<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" rel="stylesheet" />
		</Head>

		{children}

		<style jsx global>
			{`
				body {
					font-family: Segoe UI, Lato, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					margin: 0;
					-webkit-font-smoothing: antialiased;
				}

				html,
				body {
					height: 100%;
					color: #1e1e1e;
				}

				main {
					box-sizing: border-box;
					position: relative;
					min-height: 100%;
				}

				#nprogress {
					pointer-events: none;
				}

				#nprogress .bar {
					background: #4492ff;
					position: fixed;
					z-index: 1031;
					top: 0;
					left: 0;
					width: 100%;
					height: 2px;
				}

				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
					opacity: 1.0;
					transform: rotate(3deg) translate(0px, -4px);
				}

				button{
					outline: none;
				}

				p{
					line-height: 25px;
				}

				img{
					max-width: 100%;
				}

				html::-webkit-scrollbar-track {
				    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
				    background-color: transparent;
				}

				html::-webkit-scrollbar {
				    width: 7px;
				    background-color: transparent;
				}

				html::-webkit-scrollbar-thumb {
				    background-color: #cccccc;
				}

			`}
		</style>
	</main>
