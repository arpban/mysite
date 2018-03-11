// Components
import Link2 from '../components/link2'
// Layouts

const Intro = () => (
	
	<div className="wrap">
		<h1>Arpit Bansal</h1>
		<p>A UI designer and Software Developer.</p><p>I spend most of my time working on different projects based on web or native platforms.
		Currently i am working on desktop application called <Link2 href="https://umbrellanote.com">Umbrella Note</Link2> and a virtual stock market analyst.
		 Previously I worked on a open source project called 
		<Link2 href="http://popcorncss.com"> Popcorncss</Link2>  
		, a social media manager called <Link2 href="/2017/postmaker">Postmaker</Link2> and a notes pooling platform called commondrive.</p><p>Currently I am completing my engineering in computer science from
		thapar university. But I am always available to work on any great idea or some freelance work.</p><p> Feel free to contact me on
		 <Link2 href="https://twitter.com/arp_ban"> twitter. </Link2>
		 You can also follow me on  
		<Link2 href="https://instagram.com/arpbansal"> instagram </Link2>, <Link2 href="https://in.pinterest.com/arbansal/">pinterest</Link2> or <Link2 href="/essays"> read my posts </Link2>.
		 You can see all my code on<Link2 href="https://github.com/arpban"> github</Link2>.
		</p>
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
				font-size: 33px;
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

