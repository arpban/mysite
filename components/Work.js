// Components
import Link from 'next/link'
import Card from '../components/Card'
import Button1 from '../components/Button1'



const Work = () => (
	
	<div className="wrap">
		<h1>Work</h1>
		<div className="cards">
			<Card img="../static/img/10.jpeg" loc="/2017/electron-next" />
			<Card img="../static/img/11.jpg" loc="/2017/electron-next" />
			<Card img="../static/img/13.jpeg" loc="/2017/electron-next" />
			<Card img="../static/img/5.jpeg" />
			<Card img="../static/img/9.jpeg" />
		</div>

		<div className="list">
			<ul>
				<li><a>Umbrella Note <span>A simple, beautiful and elegant place for writing</span></a></li>
				<li><a>Popcorncss <span>Collection of beautiful open source UI components</span></a></li>
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

