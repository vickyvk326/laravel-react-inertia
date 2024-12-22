import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        body: ''
    });

    const handleTextareaChange = (e) => setData('body', e.target.value);

    const submit = e => {
        e.preventDefault();
        post('/posts');
    }

    return (
        <>
            <Head>
                <title>Create post</title>
                <meta head-key='description' name="description" content="Create a new post" />
            </Head>
            <Layout>
                <h1 className='title'>Create</h1>
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
                            Create post
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Create