import { notFound } from "next/navigation";
import articles from "@/data/articles.json";

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(), // 🔥 id を string に変換
  }));
}

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id.toString() === params.id);

  if (!article) {
    notFound(); // 🔥 記事が見つからない場合は 404 ページを表示
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
