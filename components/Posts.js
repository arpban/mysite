import moment from 'moment'
// Components
import Link from 'next/link'

import posts from '../data/essays'
import Button1 from '../components/Button1'

const parseDate = date => moment(date, 'DD-MM-YYYY')

const PostLink = (props) => (
	<li>
	    <Link href={`/post?title=${props.title}`}>
	      	<a>{props.title}</a>
	    </Link>
  	</li>
)

const preparePosts = () =>
	posts
		.map(post =>
			Object.assign(
				{
					url: `/${parseDate(post.date).year()}/${post.id}`
				},
				post
			)
		)
		.sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

let posts_list = preparePosts().map(post => (
	<li key={post.id}>
		<Link href={post.url} prefetch>
			<a>
				<b>{post.title}</b>
				<span>{parseDate(post.date).format('MMMM Do YYYY')}</span>
			</a>
		</Link>
		<style>{`

			li {
				margin: 25px 0;
				text-decoration: none;
			}

			li:last-child {
				margin-bottom: 0;
			}

			a {
				text-decoration: none;
				display: block;
			}

			b {
				color: #1e1e1e;
				font-size: 16px;
				display: inline-block;
				font-weight: normal;
				line-height: 21px;
			}

			a:hover b{
				color: #40aaff;
				cursor: pointer; 
			}

			span {
				display: block;
				color: #c1c1c1;
				font-size: 13px;
				margin-top: 4px;
			}

		`}</style>
	</li>
))

let latest_posts = []

for(let i=0; i<5; i++){
	latest_posts.push(posts_list[i])
} 


const Posts = () => (
	
	<div className="wrap">
		<h1>Latest Posts</h1>
		<ul>
			{latest_posts}
		</ul>
		<div className="button">
			<Button1 loc="/essays" />
		</div>	

		<style jsx>{`
			div.wrap{
				padding: 25px 100px;
			}
			h1{
				font-size: 30px;
				font-weight: 300;
			}


			.button{
				padding: 25px 0px;
			}

			ul {
				margin: 0;
				padding: 0 0 10px 0;
				list-style: none;
			}
			@media ( max-width: 800px ){
				div.wrap{
					padding: 25px 30px;
				}
			}
		`}</style>
	</div>
)

export default Posts

