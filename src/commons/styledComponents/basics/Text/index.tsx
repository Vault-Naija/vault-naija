import { Span } from './Span'
import { Paragraph } from './Paragraph'
import { H1 } from './Heading1'
import { H2 } from './Heading2'
import { H3 } from './Heading3'
import { H4 } from './Heading4'
import { H5 } from './Heading5'

export const Text = () => {
  return <Span />
}

Text.Span = Span
Text.P = Paragraph
Text.H1 = H1
Text.H2 = H2
Text.H3 = H3
Text.H4 = H4
Text.H5 = H5
