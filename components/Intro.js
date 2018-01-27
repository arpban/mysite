// Components
// import Link from 'next/link'
// Layouts

const Intro = () => (
	
	<div className="wrap">
		<h1>Arpit Bansal</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, velit vel blandit fermentum, justo velit ultrices nulla, at gravida dui metus vel dui. Mauris id finibus dolor, non cursus turpis.🌊🌊🌊 </p>
		<style jsx>{`
			div.wrap{
				padding: 100px 100px 25px;
			}
			p{
				line-height: 25px;
				max-width: 600px;
				width: 85%;
			}
			h1{
				font-size: 30px;
				font-weight: 300;
			}
			@media ( max-width: 800px ){
				div.wrap{
					padding: 100px 30px 25px;
				}
			}
			@media(max-width: 550px){
				div.wrap{
				}
			}	
		`}</style>
	</div>	
)

export default Intro

