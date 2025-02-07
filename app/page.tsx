import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>私のHP</h1>
      <h2 className="mt-2">自己紹介</h2>
      <div className="flex gap-1 mb-2">
        <FeatureCard title="私のあああ" content="はろーわーるど" textColor="#ff2020" />
        <FeatureCard title="I'm aaa" content="HELLO WORLD" textColor="blue" />
      </div>
      <Link href="/articles">記事一覧へ</Link>
    </div>
  );
}
