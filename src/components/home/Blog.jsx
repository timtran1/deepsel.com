import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function () {
    const ghostContentApiKey = '2e8f07f1755eae40316d990073';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchLatestPosts();
    }, []);

    async function fetchLatestPosts() {
        const apiEndpoint = `/blog/ghost/api/v3/content/posts/?key=${ghostContentApiKey}&limit=3`;

        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            const posts = data.posts;

            // Do something with the posts array
            console.log(posts);
            setPosts(posts);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="news-section">
            <div className="auto-container">

                <div className="sec-title centered">
                    <div className="title">Blog & News</div>
                    <h2>Interested in how we work? <br/> check out our <a href="https://blog.deepsel.com"><span>blog</span></a></h2>
                </div>

                <div className="row clearfix">
                    {posts.map(post =>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12" key={post.id}>
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href={post.url}><img src={post.feature_image} alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <h6><a href={post.url}>{post.title}</a></h6>
                                    <div className="clearfix">
                                        <div className="pull-right">
                                            <div className="">{post.reading_time} min read</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}