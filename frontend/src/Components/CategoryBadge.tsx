import React from 'react'

interface badgeProps{
    value : string;
}

export default function CategoryBadge({value}:badgeProps) {
    const styles = {
        badge : "bg-gray-300 text-custom-black text-xs font-medium m-auto px-2.5 py-0.5 rounded-full mb-2 "
    }
  return (
    <span className = {styles.badge}>{value}</span>
  )
}
