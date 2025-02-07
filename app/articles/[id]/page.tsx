import { GetStaticProps, GetStaticPaths } from "next";
import articles from "@/data/articles.json";

export default function ArticleDetail({ article }: { article: { title: string; content: string } }) {
  if (!article) return <p>記事が見つかりません</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

// 静的生成のための関数
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() }
  }));

  return { paths, fallback: false };
};

// 各記事のデータを取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find((a) => a.id.toString() === params?.id);

  return {
    props: { article }
  };
};
