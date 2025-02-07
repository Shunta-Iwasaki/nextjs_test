import LikeButton from '@/components/LikeButton';
import articles from '@/data/articles.json';
import { Article } from '@/types/article';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h2>記事一覧</h2>
            <ul>
                {articles.map((article: Article) => (
                    <li key={article.id}>
                        <Link href={`articles/${article.id}`}>
                            {article.title}
                            <img className='size-16' src={article.imgSrc} alt="test" />
                        </Link>
                        <LikeButton />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;