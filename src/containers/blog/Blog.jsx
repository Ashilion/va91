import React from 'react'
import "./blog.css"
import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './import'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>
        Découvrez les dernières nouveautés
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021" title="Résultats Finale départementale EA/PO - 25/06/2023 - La Norville"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2021" title="Qualifiés à la finale EA/PO du 25 juin 2023" />
          <Article imgUrl={blog03} date="Sep 26, 2021" title="LIFA Equip'Athlé Minimes - 29/05/2023 - Ivry-surSeine" />
          <Article imgUrl={blog04} date="Sep 26, 2021" title="Match intercomités et journée de qualification BE/MI du 18/05/2023" />
          <Article imgUrl={blog05} date="Sep 26, 2021" title="3ème journée de qualification EA/PO" />
        </div>
        

      </div>
    </div>
  )
}

export default Blog