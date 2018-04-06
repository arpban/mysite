// Components
import Link from 'next/link'
import Card from '../components/Card'
import Button1 from '../components/Button1'



const Work = () => (
	
	<div className="wrap">
		<h1>Work</h1>
		<div className="cards">
			<Card img="../static/essays/2018/inclist/screenshot_landing_compressed.jpg" title="Inclist" summary="View financial results of public companies, all at one place. https://inclist.co" loc="/2018/inclist" />
			<Card img="../static/essays/2018/umbrella-note/screenshot-black.JPG" title="Umbrella Note" summary="Cross platform desktop application for writing and journaling. https://umbrellanote.com" loc="/2018/umbrella-note" />
			<Card img="../static/essays/2017/popcorncss/1.PNG" title="Popcorncss" summary="A single page website featuring a collection of beautiful open source UI components. http://popcorncss.com" loc="/2017/popcorncss" />
			<Card img="../static/essays/2017/postmaker/1.jpg" title="Postmaker" summary="A webapp for managing all your social media in one place." loc="/2017/postmaker" />
			<Card img="../static/essays/2016/rentspace/4.jpg" title="Rentspace" summary="A webapp for finding appartments on rent." loc="/2016/rentspace" />
			<Card img="../static/essays/2017/commondrive/1.JPG" title="Common Drive" summary="A website for pooling notes, ppt's and other study material for students. Kind of like dropbox for colleges and schools." loc="/2017/commondrive" />
		</div>

		<div className="list">
			<ul>
				<li><Link href="/2018/inclist"><a>Inclist <span>View financial results of public companies, all at one place. https://inclist.co </span></a></Link></li>
				<li><Link href="/2018/umbrella-note"><a>Umbrella Note <span>Cross platform desktop application for writing and journaling. https://umbrellanote.com </span></a></Link></li>
				<li><Link href="/2017/popcorncss"><a>Popcorncss<span>A single page website featuring a collection of beautiful open source UI components. http://popcorncss.com</span></a></Link></li>
				<li><Link href="/2017/postmaker"><a>Postmaker <span>A webapp for managing all your social media in one place.</span></a></Link></li>
				<li><Link href="/2016/rentspace"><a>Rentspace <span>A webapp for finding appartments on rent.</span></a></Link></li>
				<li><Link href="/2017/commondrive"><a>Common Drive <span>A website for pooling notes, ppt's and other study material for students. Kind of like dropbox for colleges and schools.</span></a></Link></li>
			</ul>
		</div>
		<div className="button">
			<Button1 loc="/work" />
		</div>
		
		<style jsx>{`
			div.wrap{
				padding: 25px 100px;;
			}
			h1{
				margin-bottom: 0;
				font-size: 30px;
				font-weight: 300;
			}
			.cards{	
				margin: 0px -25px;
				display: flex;
				padding: 25px;
        		overflow: hidden;
        		justify-content: flex-start;
        		align-items: center;
        		flex-wrap: wrap;
			}
			ul{
				display: none;
				list-style: none;
    			padding-left: 0;
			}
			.list a{
				font-size: 16px;
			}
			.button{
				padding: 10px;
			}
			.list a:hover{
				color: #40aaff;
				cursor: pointer; 
			}
			.list a{
				color: #444;
			}
			@media ( max-width: 800px ){
				div.wrap{
					padding: 25px 30px;
				}
				ul{
					display: block;
				}
				.button{
					padding-left: 0;
				}
			}
			@media(max-width: 550px){
				.cards{
					padding: 0;
					margin: 0px -30px;
				}
			}	
		`}</style>
	</div>
)

export default Work

