import React from 'react'

function ArticleCard({title, time, content}) {
  return (
    <div className='my-5'>
        <a href='#' className='text-2xl tracking-tighter font-bold'>{title}</a>
        <p className='text-md my-2 text-gray-600 font-thin'>{time}</p>
        <p className='text-lg'>{content}</p>
    </div>
  )
}

export default ArticleCard