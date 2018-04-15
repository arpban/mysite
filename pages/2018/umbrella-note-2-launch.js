// Syntax
import js from 'highlight.js/lib/languages/javascript'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {OL, UL, LI} from '../../components/list'
import { Image } from '../../components/figure'
import { Ref, FootNotes, Note } from '../../components/footnotes'

export default () => (
  <Post>
    <Meta category="/essays" id="umbrella-note-2-launch"/>
<P>
Yesterday i launched umbrella note 2.0. And it recieved a great response from the community. The website got 7K vistors in just 6 hrs. It landed on the frontpage of hackernews with more than 60 upvotes. And It stayed on top with more than 150 upvotes on subreddit /r/opensource. Github repo got 45 new followers. 50 new mail subscribers. 
</P>
<P>
So what's next 
</P>
<P>
Currently i lauched it only for linux and windows. But almost half of the visitors were macbook users. So first thing, i will fix the issues with macos and build a installer for the apple users. 
</P>
<P>
Next, I think i will be building the complete application with react. As of now it's just plain javascript and a little jquery. 
</P>
<P>
The new features that i will be adding now are - 
</P>
<UL>
<LI>'Medium' like text editor.</LI>
<LI>Dictionary and word suggestor. </LI>
<LI>
Auto backups to different locations on users computer. Keeping user data safe is the biggest priority. 
</LI>
<LI>
Passcode.
</LI>
</UL>
<P>
A lot of people requested for android and ios apps. I will be working on them as soon as possible. 
</P>
<P>
Although i will keep it completely open source and free for almost all of the features. But there will be a pro version. 
</P>
<P>
I want to thank all of you who installed the application and provided valuable feedback.
</P>
<P>
Thank you.
 </P>
<Image src="/static/essays/2018/umbrella-note-2-launch/1.gif" isWindow/>
<FootNotes>
      <Note id="1">
        <Link href="https://umbrellanote.com">
          umbrellanote.com
        </Link>
      </Note>
    </FootNotes>
  </Post>
)
