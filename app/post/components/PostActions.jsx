"use client";

import { motion } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Send
} from 'lucide-react';

const ActionButton = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  isActive,
  count,
  onClick,
  label,
  activeColor = "text-red-500",
  defaultColor = "text-gray-600"
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-gray-50 transition-colors"
    aria-label={label}
  >
    <div className="relative">
      {isActive && ActiveIcon ? (
        <ActiveIcon className={`w-6 h-6 ${activeColor} fill-current`} />
      ) : (
        <Icon className={`w-6 h-6 ${defaultColor}`} />
      )}
      {count !== undefined && count > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {count > 99 ? '99+' : count}
        </motion.span>
      )}
    </div>
    <span className={`text-xs mt-1 ${isActive ? activeColor : defaultColor}`}>
      {label}
    </span>
  </motion.button>
);

const PostActions = ({
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
  onShare,
  onComment,
  showComments
}) => {
  return (
    <div className="flex items-center justify-around py-3 bg-gray-50 rounded-xl">
      <ActionButton
        icon={Heart}
        activeIcon={Heart}
        isActive={isLiked}
        onClick={onLike}
        label="Suka"
        activeColor="text-red-500"
      />

      <ActionButton
        icon={MessageCircle}
        isActive={showComments}
        onClick={onComment}
        label="Komentar"
        activeColor="text-blue-600"
      />

      <ActionButton
        icon={Share2}
        onClick={onShare}
        label="Bagikan"
      />

      <ActionButton
        icon={Bookmark}
        activeIcon={Bookmark}
        isActive={isBookmarked}
        onClick={onBookmark}
        label="Simpan"
        activeColor="text-yellow-600"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-xl font-medium"
        onClick={onComment}
      >
        <Send className="w-4 h-4" />
        <span>Tulis Komentar</span>
      </motion.button>
    </div>
  );
};

export default PostActions;
