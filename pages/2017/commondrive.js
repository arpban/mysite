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
    <Meta category="/work" id="commondrive" />
    <P>
    	Common drive was a notes and study material pooling platform for students.
 	</P>
 	<P>In college, most of the us maintained folders for each semester and then subfolders for each subject on our computers. And when the exams came everyone would ask others for notes, ppts and other study material they had. so i wanted to create a single place where everyone could pool their notes, books and ppt's.</P>
 	<P>The code for this project could be found here: 
		<Link href="https://github.com/arpban/commondrive"> https://github.com/arpban/commondrive</Link>
	</P>
	<Image src="/static/essays/2017/commondrive/1.JPG" isWindow/>
	<Image src="/static/essays/2017/commondrive/2.JPG" isWindow/>
  </Post>
)
