// Syntax
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import { Code } from '../../components/code'
import { UL, LI } from '../../components/list'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta id="attribut-selektoren-css" />

    <P>
      Selbstverständlich freut es jeden Webdesigner, wenn er die HTML-Elemente
      seines Codes direkt ansprechen, und mit CSS gezielt ändern kann. Wenn
      ein Element eine CSS-Klasse oder ein ID-Attribut besitzt, funktioniert
      das natürlich ganz einfach. Aber wie steht es mit einem
      Element mitten in einer Liste?
    </P>

    <P>
      Mit CSS2 und CSS3 können HTML-Attribute als CSS-Selektoren
      hinzugezogen werden, so dass z.B. der Link zu einer bestimmten
      URL seinen eigenen CSS-Stil bekommen kann. Dies läuft über
      sogenannte Attribut-Selektoren.
    </P>

    <P>
      Ich habe hier mal alle Möglichen Arten aufgelistet, die es
      ermöglichen, ein bestimmtes Element mit Hilfe dessen jeweiligen
      Attributes speziell anzupassen, bzw. ihm einen einzigartigen
      CSS-Stil im Code zu verpassen:
    </P>

    <Code language="css" syntax={css}>
      {`E[attr] { display: block; }
E[attr="xyz"] { display: block; }
E[attr~="xyz"] { display: block; }
E[lang|="xyz"] { display: block; }
E[attrˆ="xyz"] { display: block; }
E[attr$="xyz"] { display: block; }
E[attr*="xyz"] { display: block; }`}
    </Code>

    <P>
      Hier finden sie die Beschreibung zu jedem einzelnen
      Attribut-Selektor, der im oberen Teil genannt worden ist. Jede
      Beschreibung bezieht sich jeweils auf
      alle {`"`}E-Elemente{`"`}. Selbstverständlich kann
      dafür jeder Name verwendet werden.
    </P>

    <UL>
      <LI>
        Die E-Elemente, deren
        {' '}
        {`"`}
        attr
        {`"`}
        -Attribut gesetzt ist (gleich, mit welchem Wert)
      </LI>
      <LI>
        Die E-Elemente, deren
        {' '}
        {`"`}
        attr
        {`"`}
        -Attribut exakt den Wert
        {' '}
        {`"`}
        xyz
        {`"`}
        {' '}
        aufweist
      </LI>
      <LI>
        Die E-Elemente, in deren
        {' '}
        {`"`}
        attr
        {`"`}
        -Attribut der Wert
        {' '}
        {`"`}
        xyz
        {`"`}
        {' '}
        enthalten ist
      </LI>
      <LI>
        Jedes E-Element, dessen
        {' '}
        {`"`}
        lang
        {`"`}
        -Attribut einen Bindestrich-geteilten Wert hat
      </LI>
      <LI>
        Die E-Elemente, deren {`"`}attr{`"`}-Attribut mit {`"`}xyz{`"`} beginnt
      </LI>
      <LI>
        Die E-Elemente, deren {`"`}attr{`"`}-Attribut mit {`"`}xyz{`"`} endet
      </LI>
      <LI>
        Die E-Elemente, deren
        {' '}
        {`"`}
        attr
        {`"`}
        -Attribut die Zeichenkette
        {' '}
        {`"`}
        xyz
        {`"`}
        {' '}
        enthält
      </LI>
    </UL>

    <P>Hier ein kurzes Beispiel zur Anwendung solche Attribut-Selektoren:</P>

    <Code language="xml" syntax={xml}>
      {`<h4 lang="de">Deutsche Überschrift</h4>
<h4 lang="fr">Französische Überschrift</h4>
<h4 lang="dk">Dänische Überschrift</h4>`}
    </Code>

    <P>
      Jede Überschrift ist in diesem Fall ein normales h4-Element, welches
      ein lang-Attribut besitzt. Dieses kann dann über den entsprechenden
      CSS-Code angesprochen, und - wie in diesem Fall - eingefärbt werden.
    </P>
  </Post>
)
