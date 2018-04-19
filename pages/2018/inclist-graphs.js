// Syntax
import js from 'highlight.js/lib/languages/javascript'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import { H2, H3 } from '../../components/heading'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import Quote from '../../components/quote'
import { Image } from '../../components/figure'

export default () => (
  <Post>
    <Meta category="/essays" id="inclist-graphs"/>
<P>
Today I added support for graphs on inclist. Now users can view charts for different parameters ( like Net profit, EPS over the past years ). This is something that I wanted for a long time. Earlier when I analysed companies, I used excel sheets for generating graphs. I would enter all the financial data of a company in the excel sheet and then I would generate graphs to visualize the past performace of the company. 
</P>
<P>
Now all that work is done automatically and not just that.. It's done for each and every company in india. 
</P>

<Image src="/static/essays/2018/inclist/graphs.gif" isWindow/>

<FootNotes>
  <Note id="1">
    <Link href="https://inclist.co">
      inclist.co
    </Link>
  </Note>
</FootNotes>

</Post>
)
