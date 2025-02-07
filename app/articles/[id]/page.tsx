import articles from '@/data/articles.json';
import { Article } from '@/types/article';
import LikeButton from '@/components/LikeButton';
import { Metadata } from 'next';

// 動的ルートのパスを生成
export async function generateStaticParams() {
    return articles.map((article: Article) => ({
        id: article.id.toString(),
    }));
}

// Next.js の props の型定義
interface PageProps {
    params: { id: string };
}

export default function ArticleDetail({ params }: PageProps) {
    // 記事を検索
    const article = articles.find((a) => a.id.toString() === params.id);

    if (!article) {
        return <div>記事が見つかりませんでした。</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <div>{article.content}</div>
            <LikeButton />
        </div>
    );
}