interface NotificationBadgeProps {
  value: string;
}

export const NotificationBadge = ({ value }: NotificationBadgeProps ) => {
  return (       
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        { value }
      </div>   
  )
}