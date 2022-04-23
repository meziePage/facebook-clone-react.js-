import React, { useState } from 'react'
import "./MessageSender.css"
import {Avatar} from "@material-ui/core"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useStateValue} from "./StateProvider"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import db from "./firebase"



function MessageSender() {
        const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");



const handleSubmit = (e) => {
    e.preventDefault();

db.collection("post").add({
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
});

    setInput("");
    setImageUrl("");
}

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="messageSender__input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`what's on your mind, ${user.displayName}`} />
                      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__button">
            <div className="messageSender__option">
<VideocamIcon style={{ color: "red"}} />
<h5>Live Video</h5>
</div>

<div className="messageSender__option">
<PhotoLibraryIcon style={{ color: "green"}} />
<h5>Photo/Video</h5>
</div>

<div className="messageSender__option">
<InsertEmoticonIcon style={{ color: "orange"}} />
<h5>Feeling/Activity</h5>
</div>
            </div>
        </div>
    )
}

export default MessageSender
