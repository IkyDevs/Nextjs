// /app/products/loading.tsx
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Sort Skeleton */}
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Bar Skeleton */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
              style={{ animationDelay: `${item * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-200 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-4">
                {/* Category */}
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>

                {/* Title */}
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-4 bg-gray-200 rounded animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                  <div className="h-3 w-12 bg-gray-200 rounded animate-pulse ml-2"></div>
                </div>

                {/* Price */}
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>

                {/* Button */}
                <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
} 
