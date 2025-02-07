import articles from '@/data/articles.json';
import { Article } from '@/types/article';
import LikeButton from '@/components/LikeButton';
import { InferGetStaticPropsType } from 'next';

// 動的ルートのパスを生成
export async function generateStaticParams() {
    return articles.map((article: Article) => ({
        id: article.id.toString(),
    }));
}

// 型定義: `params` を `InferGetStaticPropsType<typeof generateStaticParams>` で取得
type PageProps = {
    params: Awaited<ReturnType<typeof generateStaticParams>>[number];
};

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