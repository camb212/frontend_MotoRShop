import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export default function Card({
  children,
  title,
  description,
  action,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
    >
      {(title || action) && (
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-gray-500 mt-1">
                {description}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
}
