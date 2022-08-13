import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description1,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description1}</p>
        <footer>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default BlogItem;
