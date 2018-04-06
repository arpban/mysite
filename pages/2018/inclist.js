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
    <Meta category="/work" id="inclist"/>
<P>
Inclist is a tool for investors to view financial results of public companies, all at one place.
<br />
<Link href="https://inclist.co">
  inclist.co
</Link>
</P>
<H2>
The problem. Why i wanted to build this?
</H2>

<P>
whenever I have some extra money, instead of keeping them in bank, I like to invest it in stocks. 
And to analyse a company, I download their annual reports of past 5 years and then use excel sheets to 
analyse the annual and quarterly results.
</P>
<P>
But like most people, I am not a full time investor. I spend most of my time coding and making things.
</P>
<P>
So i wanted to build a market analyst, which would collect all the financial data of companies, 
and make it easier for investors to select and filter out the good companies. 
In other words, I wanted to create a bot which would keep an eye on the market for me.
</P>
<P>
And that's what inclist does. Here you can view all the annual results, quarterly results and balance sheet of public companies. 
</P>

<P>
I started working on this project on 15 Feb 2018 and launched it exactly a month later on 25th March. I used Nodejs at the backend and React at the frontend. 
</P>
<P>
As of now ( 2 April 2018 ) inclist only shows annual and quarterly results of public companies in India. Lets see where it goes ...
</P>

<Image src="/static/essays/2018/inclist/screenshot_landing_compressed.jpg" isWindow/>

<Image src="/static/essays/2018/inclist/demo.gif" isWindow/>

<Image src="/static/essays/2018/inclist/aresults.JPG" isWindow/>

<FootNotes>
  <Note id="1">
    <Link href="https://inclist.co">
      inclist.co
    </Link>
  </Note>
</FootNotes>

</Post>
)
