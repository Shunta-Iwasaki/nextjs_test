import articles from '@/data/articles.json';
import{ Article } from '@/types/article';
import LikeButton from '@/components/LikeButton';

export async function generateStaticParams() {
    return articles.map((article: Article) => ({
        id: article.id.toString(),
    }));
}

interface ArticleDetailProps {
    params: {id: string };
}

export default async function ArticleDetail({ params }: ArticleDetailProps) {
    const article = articles.find((a) => a.id.toString() === params.id);

    if (!article) {
        return <div>記事が見つかりませんでした。</div>
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <div>{article.content}</div>
            <LikeButton />
        </div>
    )
}