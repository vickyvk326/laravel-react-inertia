import React, { use, useEffect, useState } from "react";
import Layout from '../Layouts/Layout';
import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Home = ({ posts }) => {
  
  const route = useRoute();
  const {flash} = usePage().props;
  const [message,setmessage] = useState(flash.message || null);

  const {component} = usePage();
  
  useEffect(()=>{
    const timer = setTimeout(() => {
      setmessage(null);
    }, 2500);

    return () => clearTimeout(timer);
  },[message]);
  
  return (
    <Layout>
      <Head title={component} />
      <h1 className="title">Posts</h1>

      {!!message && (
        <div className="absolute top-24 right-6 bg-rose-500 text-sm text-white rounded-sm" role="alert">
          <p className="p-1">{message}</p>
        </div>
      )}

      <div>
        {!!posts.data && posts.data.map((post,i) => (
            <div key={post.id} className="p-4 border-b">
                <div className="text-sm text-slate-500">
                    <span>Posted on {new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className=" text-[16px]">{i+1}. {post.body}</p>
                {/* <Link href={`/posts/${post.id}`} className="text-[14px] font-medium text-blue-600 hover:underline">Read more...</Link> */}
                <Link href={route('posts.show',post)} className="text-[14px] font-medium text-blue-600 hover:underline">Read more...</Link>
            </div>
        ))}
        
        {/* Pagination */}
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