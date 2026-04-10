async function getPosts() {
  const res = await fetch("https://yourblog.com/wp-json/wp/v2/posts", {
    next: { revalidate: 60 }
  });

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}