import React from 'react'
import "./Feed.css"
import Suggestions from "./Suggestions.js"
import Post from './Post.js'


function Feed({feed}){
    return (
        <div className="feed">
        <div className="feed__left">
        <div className="feed__posts">
            {feed.map((post) => (<Post key={post.id} post={post} postImage={post.image} timestamp={post.created_at}/> ))}

                {/* // user={post.user}
                // 
                // likes={post.likes}
                //  */}
            
        </div>
        </div>
        <div className="feed__right">
        <Suggestions />
        </div>
    </div>
    )
}

export default Feed