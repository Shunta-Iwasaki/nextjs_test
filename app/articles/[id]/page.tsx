import articles from "@/data/articles.json";

type PageProps = {
    params: { id: string };
};

export default function ArticleDetail({ params }: PageProps) {
    const article = articles.find((a) => a.id.toString() === params.id);

    if (!article) {
        return <div>記事が見つかりませんでした。</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}