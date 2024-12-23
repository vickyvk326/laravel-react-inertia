import { useForm } from '@inertiajs/react';
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy';
import Layout from '@/Layouts/Layout';

const Show = ({post}) => {
    const route = useRoute();

    const {delete:destroy} = useForm();
    const {get} = useForm();

    const submitDelete = e => {
        e.preventDefault();
        // destroy(`/posts/${post.id}`)
        destroy(route('posts.destroy',post))
    }

    console.log(useForm());
    
    const submitEdit = e => {
        e.preventDefault();
        // post(`/posts/${post.id}`)
        get(route('posts.edit',post))
    }
    
    
  return (
    <Layout>
        <div className="p-4 border-b cursor-pointer">
            <div className="text-sm text-slate-500">
                <span>Posted on {new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className=" text-[16px]">{post.body}</p>
            <div className='flex items-center justify-end gap-1'>
                <form onSubmit={submitDelete}>
                    <button className='text-white bg-red-500 rounded-md px-2 py-1'>Delete</button>
                </form>
                <form onSubmit={submitEdit}>
                    <button className='text-white bg-green-500 rounded-md px-2 py-1'>Update</button>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Show