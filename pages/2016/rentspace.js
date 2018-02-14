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
    <Meta category="/work" id="rentspace" />
    <P>Rentspace is a directory of apartments available on rent.</P>
    <P>This was a design project i did in december 2016.</P>
    <Image src="/static/essays/2016/rentspace/1.JPG" isWindow/>
    <small>The landing page</small>
    <Image src="/static/essays/2016/rentspace/2.JPG" isWindow/>
    <Image src="/static/essays/2016/rentspace/3.JPG" isWindow/>
    <small>search bar</small>
    <FootNotes><small>I have created only the frontend for this project. If you are interested in collaborating
    for the backend, feel free to contact me.</small></FootNotes> 
  </Post>
)
