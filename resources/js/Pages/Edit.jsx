import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';
import React from 'react'

const Edit = ({post}) => {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body
    });

    const handleTextareaChange = (e) => setData('body', e.target.value);

    const route = useRoute();

    const submit = e => {
        e.preventDefault();
        put(route('posts.update',post));
    }

    return (
        <>
            <Head>
                <title>Edit post</title>
                <meta head-key='description' name="description" content="Edit a new post" />
            </Head>
            <Layout>
                <h1 className='title'>Edit</h1>
                <div className='w-1/2 mx-auto'>
                    <form onSubmit={submit}>
                        <textarea 
                            rows={10} 
                            value={data.body} 
                            onChange={handleTextareaChange}
                            className={`${errors.body ? ' ring-red-500':''}`}
                            placeholder='Write something...'
                        />
                        {!!errors.body && 
                            <p className='error'>{errors.body}</p>
                        }
                        <button
                            disabled={processing} 
                            className={`primary-btn mt-4 ${processing ? 'opacity-50' : ''}`}
                        >
                            Edit post
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Edit