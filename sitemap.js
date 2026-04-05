export default function sitemap() {
    return [
      {
        url: 'https://www.shiokflavour.com',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.shiokflavour.com/#hawker-centres',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: 'https://www.shiokflavour.com/#restaurants',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://www.shiokflavour.com/#flavour-trail',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }