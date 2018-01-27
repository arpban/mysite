import Link from 'next/link'

export default ({loc}) => {
	return (
		<div>
		<Link href={loc}>
			<button><span>View All</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
			</button>
		</Link>
		<style jsx>{`
			button{
				font-size: 14px;
				border: none;
				background: none;
				cursor: pointer;
				display: flex;
			    align-items: center;
			    color: #1e1e1e;
			}
			button:hover{
			   	color: #40aaff;
			}
			span{
				font-size: 14px;
				margin: 0;
				margin-right: 10px;
				color: #1e1e1e;
			}
			svg{
				stroke-width: 1;
			}	
		`}</style>
		</div>
	)
}
