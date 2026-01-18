"use client";

import { motion } from 'framer-motion';
import { Eye, Clock } from 'lucide-react';

const StatItem = ({ icon: Icon, value, label, color = "text-gray-600" }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-1.5"
  >
    <Icon className={`w-4 h-4 ${color}`} />
    <span className={`text-sm font-medium ${color}`}>{value}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </motion.div>
);

const PostStats = ({
  likes,
  comments,
  shares,
  views,
  readTime
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-4">
      <div className="flex items-center gap-6">
        <StatItem
          icon={Eye}
          value={views?.toLocaleString() || '0'}
          label="dilihat"
          color="text-blue-600"
        />

        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1"
          >
            <span className="text-lg font-bold text-gray-900">{likes}</span>
            <span className="text-sm text-gray-600">Suka</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1"
          >
            <span className="text-lg font-bold text-gray-900">{comments}</span>
            <span className="text-sm text-gray-600">Komentar</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1"
          >
            <span className="text-lg font-bold text-gray-900">{shares}</span>
            <span className="text-sm text-gray-600">Share</span>
          </motion.div>
        </div>
      </div>

      {readTime && (
        <div className="flex items-center gap-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{readTime} min baca</span>
        </div>
      )}
    </div>
  );
};

export default PostStats;
