// components/posts/PostCard.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PostHeader from './PostHeader';
import PostStats from './PostStats';
import PostActions from './PostActions';
import CommentSection from './CommentSection';

const PostCard = ({
  post,
  onLike,
  onBookmark,
  onShare,
  onComment,
  onDelete,
  onEdit,
  showActions = true,
  isOwner = false
}) => {
  // Destructure post data
  const {
    id,
    title,
    content,
    author,
    createdAt,
    updatedAt,
    likes: initialLikes,
    comments: initialComments,
    shares: initialShares,
    views,
    category,
    readTime,
    imageUrl,
    tags = [],
    isLiked: initialIsLiked = false,
    isBookmarked: initialIsBookmarked = false
  } = post;

  // State untuk UI
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [likeCount, setLikeCount] = useState(initialLikes || 0);
  const [commentCount, setCommentCount] = useState(initialComments || 0);
  const [shareCount, setShareCount] = useState(initialShares || 0);
  const [showComments, setShowComments] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handler untuk like
  const handleLike = async () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    setLikeCount(prev => newLikeStatus ? prev + 1 : prev - 1);

    // Panggil API handler jika ada
    if (onLike) {
      try {
        await onLike(id, newLikeStatus);
      } catch (error) {
        // Rollback jika API gagal
        setIsLiked(!newLikeStatus);
        setLikeCount(prev => newLikeStatus ? prev - 1 : prev + 1);
      }
    }
  };

  // Handler untuk bookmark
  const handleBookmark = async () => {
    const newBookmarkStatus = !isBookmarked;
    setIsBookmarked(newBookmarkStatus);

    if (onBookmark) {
      try {
        await onBookmark(id, newBookmarkStatus);
      } catch (error) {
        setIsBookmarked(!newBookmarkStatus);
      }
    }
  };

  // Handler untuk share
  const handleShare = async () => {
    setShareCount(prev => prev + 1);

    if (onShare) {
      try {
        await onShare(id);
      } catch (error) {
        setShareCount(prev => prev - 1);
      }
    }
  };

  // Handler untuk tambah komentar
  const handleAddComment = async (commentText) => {
    setCommentCount(prev => prev + 1);

    if (onComment) {
      try {
        await onComment(id, commentText);
      } catch (error) {
        setCommentCount(prev => prev - 1);
      }
    }
  };

  // Handler untuk hapus postingan
  const handleDelete = async () => {
    if (!onDelete || !isOwner) return;

    setIsDeleting(true);
    try {
      await onDelete(id);
    } catch (error) {
      setIsDeleting(false);
    }
  };

  // Animasi variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -4,
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Jika sedang dihapus, tampilkan animasi keluar
  if (isDeleting) {
    return (
      <motion.div
        initial={{ opacity: 1, height: 'auto' }}
        animate={{ opacity: 0, height: 0 }}
        exit="exit"
        className="overflow-hidden"
      />
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-6"
      data-post-id={id}
    >
      {/* Header */}
      <PostHeader
        author={author}
        createdAt={createdAt}
        updatedAt={updatedAt}
        category={category}
        onEdit={isOwner ? () => onEdit?.(id) : undefined}
        onDelete={isOwner ? handleDelete : undefined}
      />

      {/* Gambar Utama */}
      {imageUrl && (
        <div className="relative h-72 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Konten */}
      <div className="p-6">
        {/* Title */}
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-3 cursor-pointer"
          whileHover={{ color: "#2563eb" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title}
        </motion.h2>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Content Preview/Full */}
        <div className="mb-6">
          <div className={`text-gray-700 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {content}
          </div>
          {content.length > 150 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 font-medium mt-2 hover:text-blue-700"
            >
              {isExpanded ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya'}
            </motion.button>
          )}
        </div>

        {/* Stats */}
        <PostStats
          likes={likeCount}
          comments={commentCount}
          shares={shareCount}
          views={views}
          readTime={readTime}
        />

        {/* Actions */}
        {showActions && (
          <PostActions
            isLiked={isLiked}
            isBookmarked={isBookmarked}
            onLike={handleLike}
            onBookmark={handleBookmark}
            onShare={handleShare}
            onComment={() => setShowComments(!showComments)}
            showComments={showComments}
          />
        )}
      </div>

      {/* Comment Section */}
      <AnimatePresence>
        {showComments && (
          <CommentSection
            postId={id}
            commentCount={commentCount}
            onAddComment={handleAddComment}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default PostCard;
