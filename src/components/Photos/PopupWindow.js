import React from 'react';
import Popup from 'reactjs-popup';


const PopupWindow = () => {
    return (
        <div>
            <Popup trigger={<button> Trigger</button>} position="right center">
                <form className="ui form">
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
            </Popup>
            

        </div>
    );
};

export default PopupWindow;