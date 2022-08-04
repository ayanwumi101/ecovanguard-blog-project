import React, { useEffect, useState } from 'react'
import client from '../../client'
import Post from '../Post/Post';
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'


const Posts = () => {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    client.fetch(
        `*[_type == 'post']{
            title,
            slug,
            body,
            date,
            mainImage{
                asset -> {
                    _id,
                    url
                },
                alt
            },
            "authorName": author -> name,
        }`
    ).then((data) => setPost(data)).catch((console.error));
  }, [])
  console.log(post);
  return (
    <div className={styles.container}>
        <h2>Ecovanguard's Latest Blog Posts</h2>
        <Fade left>
        <div className={styles.posts_container}>
            {post.map((post) => <Post post={post} key={post.slug.current} />)}
        </div>
        </Fade>
    </div>
  )
}

export default Posts