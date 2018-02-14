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
    <Meta category="/work" id="postmaker" />
    <P>Postmaker was my software engineering project in 3rd year. Here i wanted to build a beautiful and simpler version of 
    social media management services like Hootsuite, buffer etc. <br />I think these services work great but they lack 
    the simplicity. They don't care about the writing experience. I wanted to create something where a user can get a 
    good writing experience and then simply post on all the social networks.</P>
    <Image src="/static/essays/2017/postmaker/2.JPG" isWindow />
    <small>The landing page</small>
    <Image src="/static/essays/2017/postmaker/3.JPG" isWindow />
    <small>Login</small>
    <Image src="/static/essays/2017/postmaker/5.JPG" isWindow />
    <small>user writes the post in the main editor, then application takes the user through a 
    series of questions for every individual social network to modify the post for the respective network.</small>
    <FootNotes><small>I have suspended this project for a while. If you are interested to work on this project, contact me.</small></FootNotes>
  </Post>
)
