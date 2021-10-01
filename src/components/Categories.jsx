import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="m-8 h-screen flex flex-col lg:flex-row justify-between items-center gap-4 py-2">
            {categories.map((item)=>(
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories
