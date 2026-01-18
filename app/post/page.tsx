// app/page.jsx
"use client";

import { useState } from 'react';
import PostCard from './components/PostCard';
import { motion } from 'framer-motion';

// Contoh data postingan
const samplePosts = [
  {
    id: 1,
    title: "Pengenalan Next.js 14 dengan Fitur Terbaru",
    content: "Next.js 14 menghadirkan berbagai peningkatan performa dan developer experience. Dengan adanya Server Components secara default, Partial Prerendering, dan Turbopack yang lebih stabil, pengembangan aplikasi web menjadi lebih cepat dan efisien. Dalam artikel ini, kita akan membahas bagaimana memanfaatkan fitur-fitur terbaru tersebut untuk membangun aplikasi yang skalabel.",
    author: {
      id: 101,
      name: "Budi Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
      isVerified: true
    },
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
    likes: 245,
    comments: 42,
    shares: 18,
    views: 1250,
    category: "Teknologi",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop",
    tags: ["NextJS", "React", "Web Development", "JavaScript"],
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 2,
    title: "Tips Optimasi Performa Website dengan Tailwind CSS",
    content: "Tailwind CSS adalah utility-first framework yang sangat populer untuk membangun UI yang responsif dan menarik. Namun, tanpa konfigurasi yang tepat, ukuran bundle CSS bisa membengkak. Artikel ini membahas teknik-teknik optimasi seperti purging unused CSS, menggunakan JIT mode, dan memanfaatkan CDN untuk meningkatkan performa website Anda.",
    author: {
      id: 102,
      name: "Siti Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
      isVerified: true
    },
    createdAt: "2024-01-14T14:20:00Z",
    updatedAt: "2024-01-14T16:45:00Z",
    likes: 189,
    comments: 31,
    shares: 12,
    views: 890,
    category: "Design",
    readTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w-800&auto=format&fit=crop",
    tags: ["Tailwind", "CSS", "Performance", "Frontend"],
    isLiked: true,
    isBookmarked: true
  },
  {
    id: 3,
    title: "Menggunakan Framer Motion untuk Animasi yang Smooth",
    content: "Framer Motion adalah library animasi untuk React yang membuat pembuatan animasi menjadi mudah dan intuitif. Dengan dukungan untuk gesture, variant, dan layout animations, Anda bisa menciptakan pengalaman pengguna yang lebih engaging. Tutorial ini akan mengajarkan Anda dasar-dasar Framer Motion dengan contoh implementasi nyata.",
    author: {
      id: 103,
      name: "Andi Animator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
      isVerified: false
    },
    createdAt: "2024-01-13T09:15:00Z",
    updatedAt: "2024-01-13T09:15:00Z",
    likes: 312,
    comments: 56,
    shares: 25,
    views: 2100,
    category: "Development",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    tags: ["Animation", "Framer", "React", "UI/UX"],
    isLiked: false,
    isBookmarked: false
  }
];

export default function HomePage() {
  const [posts, setPosts] = useState(samplePosts);
  const [loading, setLoading] = useState(false);

  // Handler untuk like
  const handleLike = async (postId: any, isLiked: any) => {
    console.log(`Post ${postId} ${isLiked ? 'liked' : 'unliked'}`);
    // Di sini Anda akan memanggil API like/unlike
    // Contoh: await api.likePost(postId, isLiked);
  };

  // Handler untuk bookmark
  const handleBookmark = async (postId: any, isBookmarked: any) => {
    console.log(`Post ${postId} ${isBookmarked ? 'bookmarked' : 'unbookmarked'}`);
    // Di sini Anda akan memanggil API bookmark/unbookmark
  };

  // Handler untuk share
  const handleShare = async (postId: any) => {
    console.log(`Sharing post ${postId}`);
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this post!',
          url: `/posts/${postId}`,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    }
  };

  // Handler untuk komentar
  const handleComment = async (postId: any, commentText: any) => {
    console.log(`Adding comment to post ${postId}: ${commentText}`);
    // Di sini Anda akan memanggil API add comment
    // Contoh: await api.addComment(postId, commentText);
  };

  // Handler untuk delete
  const handleDelete = async (postId: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus postingan ini?')) {
      console.log(`Deleting post ${postId}`);
      // Di sini Anda akan memanggil API delete
      // Contoh: await api.deletePost(postId);

      // Update UI secara optimistik
      setPosts(prev => prev.filter(post => post.id !== postId));
    }
  };

  // Handler untuk edit
  const handleEdit = (postId: any) => {
    console.log(`Editing post ${postId}`);
    // Navigasi ke halaman edit atau buka modal
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Postingan
          </h1>
          <p className="text-gray-600 text-lg">
            Temukan artikel menarik dan berbagi pengetahuan dengan komunitas
          </p>
        </motion.header>

        {/* Postingan List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {loading ? (
            // Loading Skeleton
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-6"></div>
                <div className="flex justify-between">
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                  <div className="h-8 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            ))
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Belum ada postingan
              </h3>
              <p className="text-gray-500">
                Jadilah yang pertama membuat postingan
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onBookmark={handleBookmark}
              onShare={handleShare}
              onComment={handleComment}
              onDelete={handleDelete}
              onEdit={handleEdit}
              isOwner={post.author.id === 101} // Contoh: user dengan ID 101 adalah pemilik
              />
            ))
          )}
        </motion.div>

        {/* Info Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            Menampilkan {posts.length} postingan • UI siap diintegrasikan dengan API
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
