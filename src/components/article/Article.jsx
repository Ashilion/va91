import React from 'react'
import './article.css'
import { motion } from 'framer-motion'

const Article = ({imgUrl, date, title,delay=0}) => {
  return (
    <motion.div className="gpt3__blog-container_article" initial={{ opacity: 0 , x:-300 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:delay}}>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p> Read Full Article</p>
      </div>
    </motion.div>
  )
}

export default Article