import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
          <i className="fa-regular fa-calendar mr-2"></i>
          {post.date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm group-hover:underline">
            Read More <i className="fa-solid fa-arrow-right ml-1"></i>
          </span>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-blue-500 transition"><i className="fa-solid fa-share-nodes"></i></button>
            <button className="text-gray-400 hover:text-red-500 transition"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;