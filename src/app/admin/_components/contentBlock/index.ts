import { ContentBlockContent } from "./contentBlockContent"
import { ContentBlockLayout } from "./contentBlockLayout"
import { ContentBlockParagraph } from "./contentBlockParagraph"
import { ContentBlockTitle } from "./contentBlockTitle"

const contentBlock = {
    layout: ContentBlockLayout,
    content: ContentBlockContent,
    title: ContentBlockTitle,
    paragraph: ContentBlockParagraph,
}

export default contentBlock
