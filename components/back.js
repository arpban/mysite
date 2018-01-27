// Components
import Link from 'next/link'

export default ({ to, outsideCover, insideCover }) => {
  const classes = []

  if (outsideCover) {
    classes.push('outside')
  }

  if (insideCover) {
    classes.push('inside')
  }

  return (
    <div className={classes.join(' ')}>
      <Link href={to || '/'} prefetch>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg></a>
      </Link>

      <style jsx>
        {`
        div {
          position: absolute;
          right: 30px;
          top: 30px;
          height: 50px;
          width: 50px;
        }

        a {
          display: block;
          text-decoration: none;
          color: #1e1e1e;
          height: 100%;
          width: 100%;
        }

        a:hover{
          background: inherit;
          color: #40aaff;
        }

        svg{
            width: 100%;
            height: 100%;
            stroke-width: 0.7;
        }

        .outside {
          display: none;
        }

        .inside {
          right: 15px;
          top: 15px;
        }

        @media (min-width: 835px) {

          a {
            transition: all .2s;
          }

          a:hover {
            transform: scale(1.1);
          }

          .outside {
            display: block;
          }

          .inside {
            display: none;
          }
        }
        @media(max-width: 550px){
          .inside{
            top: -60px;
            right: 20px;
          }
          div{
            top: 25px;
            right: 25px;
          }
        }
      `}
      </style>
    </div>
  )
}
