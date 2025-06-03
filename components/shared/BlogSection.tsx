import Image from 'next/image'
import Link from 'next/link'
import tip from '../../public/assets/images/flaw.jpg';
import roi from '../../public/assets/images/roi.jpg';
import fut from '../../public/assets/images/fut.jpg';
import type { StaticImageData } from 'next/image';

type Post = {
  id: number
  title: string
  excerpt: string
  imgSrc: StaticImageData | string
}

const posts: Post[] = [
  {
    id: 1,
    title: '5 Tips for Flawless Corporate Events',
    excerpt: 'Discover the insider secrets to planning seamless corporate gatherings that leave a lasting impression.',
    imgSrc: tip,
  },
  {
    id: 2,
    title: 'Maximizing ROI with Hybrid Conferences',
    excerpt: 'Learn how to blend in‑person and virtual experiences to boost engagement—and your bottom line.',
    imgSrc: roi,
  },
  {
    id: 3,
    title: 'The Future of Event Tech in 2025',
    excerpt: 'From AI chatbots to VR showrooms—see what’s next in event technology and how to stay ahead.',
    imgSrc: fut,
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 tracking-wide leading-tight text-white">Blog Posts</h2>
        <p className="text-gray-400 mb-12 text-lg">Insights & inspiration from the EVEPHORIA team</p>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12">
        {/*  <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-white rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>*/}
        </div>
      </div>
    </section>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <div
      className="bg-white text-gray-900 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col animate-fade-up"
    >
      <div className="relative w-full h-48 group">
        <Image
          src={post.imgSrc}
          alt={post.title}
          fill
          className="object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-t-2xl"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 hover:text-red-600 transition-colors">{post.title}</h3>
        <p className="text-sm mb-4 text-gray-600">{post.excerpt}</p>
        
      </div>
    </div>
  )
}
