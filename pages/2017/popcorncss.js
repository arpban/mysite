// Syntax
import js from 'highlight.js/lib/languages/javascript'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import { Code, InlineCode } from '../../components/code'
import { H2, H3 } from '../../components/heading'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import Quote from '../../components/quote'
import { Image } from '../../components/figure'
import HR from '../../components/hr'

export default () => (
  <Post>
    <Meta category="/work" id="popcorncss"/>
    <P>Popcorncss is a collection of beautiful and open source UI components. <br />Whenever i started a new project, i usually 
    copied some of the components like spinner, navbar, drawer etc from my previous projects and modified them.<br /> So to make that process
    simpler i created this website. I started working on it in june 2017 and launched it in august 2017.  
    </P><P>Here designers and coders could easily select any
    component and use it in their projects. No need to reinvent the wheel from scratch everytime you start a new project. Just build 
     on top of it.</P>
     <Quote by="Picasso">Good artists copy. Great artists steal</Quote>
    <P>Visit <Link href="http://popcorncss.com">popcorncss.com</Link> </P>
    <Image src="/static/essays/2017/popcorncss/2.PNG" isWindow />
    <Image src="/static/essays/2017/popcorncss/5.PNG" isWindow />
    <small>The code view</small>
  </Post>
)
