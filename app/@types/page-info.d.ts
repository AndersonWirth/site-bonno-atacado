import type { RichTextContent } from '@graphcms/rich-text-types'

declare module PageInfo {
  export type Home = {
    introduction: {
      raw: RichTextContent
    }
    profilePicture: {
      url: string
    }
    images: {
      name: string
      url: string
    }[]
  }
}
