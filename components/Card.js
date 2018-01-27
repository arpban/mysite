// Components
import Link from 'next/link'
// Layouts

const Card = (props) => (
	<div className="card">
        <Link href={props.loc}>
            <a>
                <div className="cover">
                    <img src={props.img} />
                </div>
                <div className="description">
                    <div className="title">Umbrella Note</div>
                    <div className="summary">it would be able to recognise fonts, colors, create gradients from real world objects.</div>
                </div>
            </a>
        </Link>
		<style jsx>{`
			.card {
	            width: 250px;
	            min-width: 250px;
	            float: left;
	            margin: 20px 7px;
	        }
            a {
                box-shadow: 0 0px 50px rgba(0, 0, 0, 0.1);
                position: relative;
                display: block;
                overflow: hidden;
                transition: 0.18s;
                border-radius: 6px;
            }    
	        a:hover{
                transform: translateY(-2px);
                box-shadow: 0 0px 50px rgba(0, 0, 0, 0.2);
                cursor: pointer;
            }

            .cover {
                position: relative;
                background-color: #959597;
                overflow: hidden;
                height: 200px;
                width: 100%;
            }    

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-style: none;
            }

            .description {
                padding: 15px;
                padding-bottom: 25px;
                color: #1e1e1e;
            }
            .title {
                font-size: 14px;
            }
            .created {
                font-size: 14px;
                color: lightgrey;
                margin-top: 0px;
                font-style: italic;
            }
            .summary {
                height: 55px;
                overflow: hidden;
                margin-top: 1px;
                font-size: 14px;
                color: #898989;
            }
            button {
                border: none;
                margin-top: 10px;
                text-transform: uppercase;
                font-weight: 700;
                padding: 0;
                font-size: 12px;
                color: black;
                background: none;
            }

            @media( max-width: 800px ){
                .card{
                    display: none;
                }
            }

            @media(max-width: 550px ){
                .card{
                    width: 100%;
                    padding: 10px 15px;
                    display: none;
                }
            }

		`}</style>
    </div>
)

export default Card

