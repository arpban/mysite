// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <article>
      {children}
    </article>
    
    <style jsx>
      {`
      article {
        padding: 100px 20px;
        word-wrap: break-word;
        hyphens: auto;
        max-width: 620px;
        width: 100%;
        overflow-x: hidden;
      }
      @media(max-width: 550px){
        padding: 0px 20px 100px 20px;
      }
    `}
    </style>

    <style jsx global>
    {`
      main{
        display: flex;
        justify-content: center;
      }
      .tweet {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
      }
    `}
    </style>
  </Page>
)
