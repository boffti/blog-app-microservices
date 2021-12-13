import axios from 'axios';
import React, { useState } from 'react';

const CommentCreate = ({ postId }) => {
    const [content, setComment] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setComment('');
        window.location.reload();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <input
                        value={content}
                        onChange={e => setComment(e.target.value)}
                        className='form-control' />
                </div>
                <button className='btn btn-outline-warning'>Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;