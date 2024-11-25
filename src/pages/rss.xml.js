import rss from '@astrojs/rss';

export async function GET(context) {
  const blog = await Promise.all(
    Object.values(await import.meta.glob('./blog/*.md')).map(post => post())
  );
  return rss({
    title: 'Niko Lazaris - your friendly neighborhood dev',
    description: 'With great blogs come great RSS feeds',
    site: context.site,
    items: blog.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}