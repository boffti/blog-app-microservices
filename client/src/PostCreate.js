import React, { useState } from 'react'
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState(''); 

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {"title":title})
            .then(res => console.log(res.data));
        setTitle('');
        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Title" />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
};

    export default PostCreate;