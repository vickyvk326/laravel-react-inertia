import { useForm } from '@inertiajs/react'
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
            <h1 className='title'>Create</h1>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={submit}>
                    <textarea 
                        rows={10} 
                        value={data.body} 
                        onChange={handleTextareaChange} 
                    ></textarea>
                    {!!errors.body && 
                        <span className='text-red-500'>{errors.body}</span>
                    }
                    <button 
                        type='submit' 
                        disabled={processing} 
                        className={`primary-btn mt-4 ${processing ? 'opacity-50' : ''}`}
                    >
                        Create post
                    </button>
                </form>
            </div>
        </>
    )
}

export default Create