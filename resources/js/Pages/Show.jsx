import { useForm } from '@inertiajs/react';
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Show = ({post}) => {
    const route = useRoute();

    const {delete:destroy} = useForm();

    const submit = e => {
        e.preventDefault();
        // destroy(`/posts/${post.id}`)
        destroy(route('posts.destroy',post))
    }
    
  return (
    <div className="p-4 border-b cursor-pointer">
        <div className="text-sm text-slate-500">
            <span>Posted on {new Date(post.created_at).toLocaleTimeString()}</span>
        </div>
        <p className=" text-[16px]">{post.body}</p>
        <div className='flex items-center justify-end'>
            <form onSubmit={submit}>
                <button className='text-white bg-red-500 rounded-md px-2 py-1'>Delete</button>
            </form>
        </div>
    </div>
  )
}

export default Show