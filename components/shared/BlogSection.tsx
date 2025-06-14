"use client"
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useUser } from "@clerk/nextjs"
import type { StaticImageData } from 'next/image'

// --- Types ---
type Post = {
  _id?: string
  id: number
  title: string
  excerpt: string
  imgSrc?: StaticImageData | string
}

// --- Admin User ---
const ADMIN_USER_ID = ["user_2y8oHq8KzzpfbzGW4lWeLu9T96F",
  "user_2xUTyGm8gEB6NITRsoDDTdJPCPT",];

// --- Blog Section ---
export default function BlogSection() {
  const { user } = useUser()
  const isAdmin = !!user && ADMIN_USER_ID.includes(user.id);

  const [posts, setPosts] = useState<Post[]>([])
  const [form, setForm] = useState({ title: '', excerpt: '', imgSrc: '' })
  const [showForm, setShowForm] = useState(false)
  const [imgPreview, setImgPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Fetch posts from API (MongoDB)
  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data?.posts) ? data.posts : []))
      .catch(() => setPosts([]))
    }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, files } = e.target as HTMLInputElement
    if (name === 'imgSrc' && files && files[0]) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgPreview(reader.result as string)
        setForm((prev) => ({ ...prev, imgSrc: reader.result as string }))
      }
      reader.readAsDataURL(file)
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.excerpt.trim()) return
    setLoading(true)
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        excerpt: form.excerpt,
        imgSrc: form.imgSrc || '/assets/images/flaw.jpg',
      }),
    })
    const data = await res.json()
    if (data.success) {
      setPosts([data.post, ...posts])
      setForm({ title: '', excerpt: '', imgSrc: '' })
      setImgPreview(null)
      setShowForm(false)
    }
    setLoading(false)
  }

  async function handleDelete(id: number | string) {
    if (!isAdmin) return
    setLoading(true)
    await fetch('/api/blog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setPosts(posts.filter(post => post._id !== id && post.id !== id))
    setLoading(false)
  }

  // Pagination state for horizontal slider
  const [startIdx, setStartIdx] = useState(0);
  const POSTS_PER_PAGE = 3;

  const visiblePosts = posts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const handleNext = () => {
    if (startIdx + POSTS_PER_PAGE < posts.length) {
      setStartIdx(startIdx + POSTS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIdx - POSTS_PER_PAGE >= 0) {
      setStartIdx(startIdx - POSTS_PER_PAGE);
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 tracking-wide leading-tight text-white">Blog Posts</h2>
        <p className="text-gray-400 mb-12 text-lg">Insights from the EVEPHORIA Team</p>

        {isAdmin && (
          <button
            className="mb-8 px-6 py-2 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? 'Cancel' : 'Add Your Post'}
          </button>
        )}

        {showForm && isAdmin && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 bg-white text-gray-900 rounded-xl p-6 shadow-lg max-w-md mx-auto flex flex-col gap-4"
          >
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Post Title"
              className="border rounded px-3 py-2"
              required
            />
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="Post Excerpt"
              className="border rounded px-3 py-2"
              rows={3}
              required
            />
            <input
              type="file"
              name="imgSrc"
              accept="image/*"
              onChange={handleChange}
              className="border rounded px-3 py-2"
              aria-label="Upload post image"
              title="Upload post image"
            />
            {imgPreview && (
              <img
                src={imgPreview}
                alt="Preview"
                className="w-full h-32 object-cover rounded mb-2"
              />
            )}
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? "Posting..." : "Submit Post"}
            </button>
          </form>
        )}

        {/* Carousel-like horizontal posts */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
              onClick={handlePrev}
              disabled={startIdx === 0}
              type="button"
            >
              &larr; Prev
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
              onClick={handleNext}
              disabled={startIdx + POSTS_PER_PAGE >= posts.length}
              type="button"
            >
              Next &rarr;
            </button>
          </div>
          <div className="flex gap-6 justify-center">
            {visiblePosts.map((post) => (
              <div key={post._id || post.id} className="min-w-[320px] max-w-xs flex-shrink-0">
                <PostCard
                  post={post}
                  onDelete={isAdmin ? handleDelete : undefined}
                  isAdmin={isAdmin}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Post Card ---
function PostCard({
  post,
  onDelete,
  isAdmin,
}: {
  post: Post
  onDelete?: (id: number | string) => void
  isAdmin?: boolean
}) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <div
        className="bg-white text-gray-900 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col animate-fade-up min-w-[320px] max-w-xs h-[420px] justify-between"
      >
        <div className="relative w-full h-48 group">
          {post.imgSrc && (
            <Image
              src={typeof post.imgSrc === 'string' ? post.imgSrc : ''}
              alt={post.title}
              fill
              className="object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-t-2xl"
            />
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 hover:text-red-600 transition-colors">{post.title}</h3>
            <p className="text-sm mb-4 text-gray-600">
              {post.excerpt.length > 100 ? post.excerpt.slice(0, 100) + '...' : post.excerpt}
            </p>
          </div>
          <div className="flex gap-2 mt-auto">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              onClick={() => setShowPopup(true)}
            >
              Read Full Post
            </button>
            {isAdmin && onDelete && (
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                onClick={() => onDelete(post._id || post.id)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-8 relative flex flex-col max-h-[90vh] justify-start">
            <div className="flex justify-end sticky top-0 bg-white z-10">
              <button
                className="text-gray-500 hover:text-red-600 text-2xl font-bold"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            {post.imgSrc && (
              <img
                src={typeof post.imgSrc === 'string' ? post.imgSrc : ''}
                alt={post.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <div className="whitespace-pre-line text-base max-h-[60vh] overflow-y-auto">
              {post.excerpt}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
