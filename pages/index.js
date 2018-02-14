// Components
import Link from 'next/link'
import Title from '../components/title'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Posts from '../components/Posts'
import SocialMedia from '../components/SocialMedia'

// Layouts
import Page from '../layouts/page'

export default () => (
	<Page>
		<Title />

		<Intro />
		<Work />
		<Posts />
		<SocialMedia />
		<div className="copyright">© Arpit Bansal</div>

		<style jsx>
			{`
				.copyright{
					font-size: 14px;
					padding: 0px 100px 50px;
				}
				@media ( max-width: 700px ){
					.copyright{
						padding: 0px 30px 50px;
					}
				}	
			`}
		</style>
	</Page>
)
