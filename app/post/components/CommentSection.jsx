"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  User,
  MoreVertical,
  Trash2,
  Edit2,
  X,
  Check,
  Clock
} from 'lucide-react';

// Komponen untuk item komentar
const CommentItem = ({
  comment,
  isOwner,
  onDelete,
  onEdit
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleSaveEdit = () => {
    if (editText.trim() && onEdit) {
      onEdit(comment.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-4 hover:bg-gray-50 rounded-xl transition-colors"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {comment.user?.charAt(0) || 'U'}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{comment.user}</span>
              {comment.isAuthor && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                  Penulis
                </span>
              )}
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {comment.time}
              </span>
            </div>

            {/* Action buttons */}
            {isOwner && isHovered && !isEditing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1"
              >
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-600"
                  aria-label="Edit komentar"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onDelete?.(comment.id)}
                  className="p-1.5 hover:bg-red-100 rounded-lg text-red-500"
                  aria-label="Hapus komentar"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditText(comment.text);
                  }}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-200 rounded-lg"
                >
                  <X className="w-4 h-4 inline mr-1" />
                  Batal
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1.5 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
                >
                  <Check className="w-4 h-4 inline mr-1" />
                  Simpan
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700">{comment.text}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Komponen utama CommentSection
const CommentSection = ({
  postId,
  commentCount,
  onAddComment
}) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'John Doe',
      text: 'Artikel yang sangat informatif! Sangat membantu untuk project saya.',
      time: '2 jam yang lalu',
      isAuthor: false
    },
    {
      id: 2,
      user: 'Jane Smith',
      text: 'Terima kasih atas penjelasannya yang detail dan mudah dipahami.',
      time: '5 jam yang lalu',
      isAuthor: false
    },
    {
      id: 3,
      user: 'Anda',
      text: 'Saya setuju dengan poin-poin yang disampaikan!',
      time: 'Baru saja',
      isAuthor: true
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async () => {
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);

    // Optimistic update
    const tempId = Date.now();
    const newCommentObj = {
      id: tempId,
      user: 'Anda',
      text: newComment,
      time: 'Baru saja',
      isAuthor: true
    };

    setComments(prev => [newCommentObj, ...prev]);
    setNewComment('');

    try {
      // Panggil API handler
      if (onAddComment) {
        await onAddComment(newComment);
      }
    } catch (error) {
      // Rollback jika gagal
      setComments(prev => prev.filter(c => c.id !== tempId));
      setNewComment(newComment);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(prev => prev.filter(c => c.id !== commentId));
  };

  const handleEditComment = (commentId, newText) => {
    setComments(prev => prev.map(c =>
      c.id === commentId ? { ...c, text: newText } : c
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="border-t border-gray-200"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Komentar ({commentCount})
          </h3>
        </div>

        {/* Input Komentar Baru */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Tulis komentar Anda..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="3"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitComment();
                  }
                }}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">
                  Tekan Enter untuk mengirim, Shift + Enter untuk baris baru
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim() || isSubmitting}
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    !newComment.trim() || isSubmitting
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Komentar
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Daftar Komentar */}
        <AnimatePresence>
          <div className="space-y-2">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                isOwner={comment.user === 'Anda'}
                onDelete={handleDeleteComment}
                onEdit={handleEditComment}
              />
            ))}
          </div>
        </AnimatePresence>

        {comments.length === 0 && (
          <div className="text-center py-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Belum ada komentar
            </h4>
            <p className="text-gray-500">
              Jadilah yang pertama berkomentar pada postingan ini
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommentSection;
