import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === '/blog/staking-with-axelar');
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <form>
            <h3>Factors affecting Rewards</h3>
            <br></br><label>1 - Validator commission</label>
            <br></br><label>2 - Base Inflation</label>
            <br></br><label>3 - Chains supported</label>
            <br></br><label>4 - Total Staked Amount</label>
            <br></br><label>5 - Slashing</label>
            <br></br>
            <br></br><label>How many tokens do you wanna delegate:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <br></br>
              <br></br>
              <label>Assuming validator supports 7 chains and base inflation is 8% </label>

              <br></br>
              <br></br>
              <label className='calc'>Total staked is 100 million : {(name == '' ? 'NA' : (name / 100000000) * (1000000000 * 0.15))} AXL per year or {((((name / 100000000) * (1000000000 * 0.15)) / name) * 100)} % APY</label>
              <br></br>
              <br></br>
              <label className='calc'>Total staked is 50 million : {(name == '' ? 'NA' : (name / 50000000) * (1000000000 * 0.15))} AXL per year or {((((name / 50000000) * (1000000000 * 0.15)) / name) * 100)} % APY</label>
              <br></br>
              <br></br>
              <label className='calc'>Total staked is 25 million : {(name == '' ? 'NA' : (name / 25000000) * (1000000000 * 0.15))} AXL per year or {((((name / 25000000) * (1000000000 * 0.15)) / name) * 100)} % APY</label>
              <br></br>
            </label>
          </form>

          <p className='blog-desc'>{blog.description1}</p>
          <p className='blog-desc'>{blog.description2}</p>
          <p className='blog-desc'>{blog.description3}</p>
          <p className='blog-desc'>{blog.description4}</p>
          <p className='blog-desc'>{blog.description5}</p>

          <Link  className='blog-goBack' to={{ pathname: "https://brightlystake.com/#footer" }} target="_blank" >For queries click here</Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
