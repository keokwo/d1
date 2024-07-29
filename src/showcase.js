export const showcase = [
  {
    name: 'OpenAI / ChatGPT',
    slug: 'openai',
    thumbnail: require('@/img/showcase/thumbnails/openai.com.png').default,
    // video: require('@/videos/showcase/openai.com.mp4').default,
    description: 'Marketing website & chat interface',
  },
  {
    name: 'Syntax',
    slug: 'syntax',
    thumbnail: require('@/img/showcase/thumbnails/syntax.tailwindui.com.png').default,
    // video: require('@/videos/showcase/syntax.tailwindui.com.mp4').default,
    description: 'Documentation website',
    isTemplate: true,
    dark: {
      thumbnail: require('@/img/showcase/thumbnails/syntax.tailwindui.com-dark.png').default,
      // video: require('@/videos/showcase/syntax.tailwindui.com-dark.mp4').default,
    },
  },
]
