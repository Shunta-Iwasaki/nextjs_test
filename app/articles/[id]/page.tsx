import articles from '@/data/articles.json';
import{ Article } from '@/types/article';
import LikeButton from '@/components/LikeButton';

export async function generateStaticParams(): Promise<{ id: string}[]> {
    return articles.map((article: Article) => ({
        id: article.id.toString(),
    }));
}

interface PageProps {
    params: {id: string };
}

export default function ArticleDetail({ params }: PageProps) {
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