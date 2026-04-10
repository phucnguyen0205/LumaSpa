async function getPost(slug: string) {
  const res = await fetch(
    `https://yourblog.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = await res.json();
  return data[0];
}

export default async function PostPage({ params }: any) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}