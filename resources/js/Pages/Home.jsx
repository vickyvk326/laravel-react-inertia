import React from "react";
import Layout from '../Layouts/Layout';
import { Link } from "@inertiajs/react";

const Home = ({ posts }) => {
console.log(posts);
    
  return (
    <Layout>
      <h1 className="title">Posts</h1>
      <div>
        {!!posts.data && posts.data.map((post,i) => (
            <div key={post.id} className="p-4 border-b cursor-pointer">
                <div className="text-sm text-slate-500">
                    <span>Posted on {new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <Link href={`/posts/${post.id}`}>{i+1}. {post.body}</Link>
            </div>
        ))}
        <div className="py-12 px-4">
            {!!posts.links && posts.links.map(link=>(
                <Link
                key={link.label}
                disabled={link.active}
                href={link.url}
                preserveScroll
                className={`mx-1 h-9 w-9 min-w-max px-1 text-wrap inline-flex items-center justify-center rounded-full text-center ${link.active ? 'text-blue-500 bg-blue-100' : link.url ? 'hover:bg-blue-100 text-gray-700' : 'opacity-50 cursor-default'}`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />              
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home;