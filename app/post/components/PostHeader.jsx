"use client";

import { motion } from 'framer-motion';
import {
  User,
  Calendar,
  Clock,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

const PostHeader = ({
  author,
  createdAt,
  updatedAt,
  category,
  onEdit,
  onDelete
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6 pb-4">
      <div className="flex items-center justify-between">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
          >
            {author?.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              author?.name?.charAt(0) || 'A'
            )}
          </motion.div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{author?.name || 'Anonymous'}</h3>
              {author?.isVerified && (
                <CheckCircle className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatTime(createdAt)}
              </span>
              {updatedAt !== createdAt && (
                <span className="text-xs text-gray-400">
                  (diperbarui)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right side: Category and Actions */}
        <div className="flex items-center gap-3">
          {category && (
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
            >
              {category}
            </motion.span>
          )}

          {(onEdit || onDelete) && (
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </motion.button>

              {showMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-20 overflow-hidden"
                  >
                    {onEdit && (
                      <button
                        onClick={() => {
                          onEdit();
                          setShowMenu(false);
                        }}
                        className="w-full px-4 py-3 text-left flex items-center gap-2 hover:bg-gray-50 text-gray-700"
                      >
                        <Edit className="w-4 h-4" />
                        Edit Postingan
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => {
                          onDelete();
                          setShowMenu(false);
                        }}
                        className="w-full px-4 py-3 text-left flex items-center gap-2 hover:bg-red-50 text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                        Hapus Postingan
                      </button>
                    )}
                  </motion.div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
