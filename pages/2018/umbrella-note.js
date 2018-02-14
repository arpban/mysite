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
import {OL, UL, LI} from '../../components/list'

export default () => (
  <Post>
    <Meta category="/work" id="umbrella-note"/>

<P>
    I think we all have to do some kind of writing everyday, whether it is writing letters, journals, notes, poems, books, 
    or writing on blogs. But the problem is, we don't have any perfect application that gets it RIGHT, that's why we still prefer
    to write on paper. We dont have applications that improves that experience. We have great applications like ms word for creating formal documents, we have sublime for writing code,  but for the other type of writing- which we do the most (usually on paper), we don't have any.
</P>

<H2>
How a perfect writing application should be.
</H2>
<OL>
<LI>
the app should be like an extension of users mind, like an extra memory for storing thoughts. user should be able to write at a lightning speed and access data anywhere. 
</LI>
<LI>
Simplicity. it should have the simplicity of a physical notebook.
</LI>
<LI>
all your data should be with you, whenever you need it. user should be able to access any of his/her notebook. even when offline.
</LI>
<LI>
user should be able to carry data files with them in a pendrive or on cloud storage like dropbox.
</LI>
<LI>
Sync data across multiple devices
</LI>
<LI>
Take notes by just speaking. No need to type if you dont want to.
</LI>
<LI>
Helps user while writing by seggesting words from the dictionary.
</LI>
<LI>
And the most important - A beautiful UI.
</LI>
</OL>
<HR />
<P>
In october 2017,  I was learning electron which is a javascript framework for making cross platfrom desktop applications. And I had to make something so I started working on umbrella note. I released v1.0.0 in january 2018 and as I write this post, I am working on v2.0.0.
</P>
<Image src="/static/essays/2018/umbrella-note/1.JPG" isWindow/>
<Image src="/static/essays/2018/umbrella-note/7.JPG" isWindow/>
<P>
with the umbrella note I have tried to achieve all the requirements of a perfect writing application as much as possible. and I am still working. I have kept the application as simple as possible by reducing and refining things. For the desktop application I have put more focus on keyboard shortcuts and thereby reducing the number of visible buttons and options. I have created some really good keybord shortcuts so that you don't ever have to lift your hands off the keyboard. 
</P>
<Image src="/static/essays/2018/umbrella-note/editor-demo.gif" isWindow/>
<P>
I have paid good attention to selecting good fonts, fonts which feel good while writing, fonts which feel quicker than other fonts. I have also created some good themes, so user doesn't get bored with the UI. 
</P>
<Image src="/static/essays/2018/umbrella-note/notebookpage.gif" isWindow/>
<P>
I have created this application by keeping portability in mind. user can always carry their data in their pendrives or store it on cloud storage services like google drive. 
</P>
<P>
Another thing that bugged me with other writing apps is that- what if they shutdown their services. That's why with umbrella note I have programmed it such that it will support each one of it's features even if I shutdown umbrella note website. Once you have the setup, you can use it for lifetime without worrying about loosing data. 
</P>
<P>
I hope I have done a good work in this project. I welcome your feedback. and I will try to improve it as much I could. 
</P>
    <FootNotes>
      <Note id="1">
        I will be releasing Android and iOS apps soon.<br />
        <Link href="https://umbrellanote.com">
          umbrellanote.com
        </Link>
        .
      </Note>
    </FootNotes>
  </Post>
)
