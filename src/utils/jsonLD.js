export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post" && post) {
    return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "image": "${post.image?.src || ""}",
      "datePublished": "${post.pubDate || ""}",
      "author": {
        "@type": "Person",
        "name": "${post.author || "Anonymous"}"
      }
      }
    </script>`;
  }

  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Freaky Font",
      "url": "${url || "https://freaky.allbestfonts.com"}"
      }
    </script>`;
}
