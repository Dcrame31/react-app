import React from 'react';


const PhotoForm = ({onSubmit, onChange}) => {
    return (
        <>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Upload file</label>
                    <input 
                        placeholder="Photo" 
                        name="file" 
                        onChange={onChange} />
                </div>
                <div className="field">
                    <label>Title</label>
                    <input 
                        placeholder="Title" 
                        name="title" 
                        onChange={onChange} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input 
                        placeholder="Description"
                        name="description" 
                        onChange={onChange} />
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>   
        </>
    );
};

export default PhotoForm;