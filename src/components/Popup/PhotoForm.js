import React from 'react';


const PhotoForm = ({onSubmit}) => {
    return (
        <>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Upload file</label>
                    <input placeholder="Photo"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input placeholder="Title"/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input placeholder="Description"/>
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>   
        </>
    );
};

export default PhotoForm;