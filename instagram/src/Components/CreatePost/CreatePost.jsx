import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/Timeline/timelineApi";
import InstaModal from "../InstaModal/InstaModal";
import "./CreatePost.scss";
const CreatePost = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    auth_name: "",
    auth_photo: "",
    content: "",
    photo: "",
  });

  // handle input change

  const handleInputchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // create post
  const handleCreatePost = () => {
    dispatch(createPost(input))
    setModal(false)
  };

  return (
    <div className="timeline-create-post">
      {modal && (
        <>
          <InstaModal>
            <div className="modal-content">
              <input
                type="text"
                name="auth_name"
                value={input.auth_name}
                onChange={handleInputchange}
                placeholder="auth-name"
              />
              <input
                type="text"
                name="auth_photo"
                value={input.auth_photo}
                onChange={handleInputchange}
                placeholder="auth-photo"
              />
              <input
                type="text"
                name="content"
                value={input.content}
                onChange={handleInputchange}
                placeholder="post-content"
              />
              <input
                type="text"
                name="photo"
                value={input.photo}
                onChange={handleInputchange}
                placeholder="post-photo"
              />
              <div className="post-btns">
                <button onClick={handleCreatePost}>Create Post</button>
                <button onClick={() => setModal(false)}>Close</button>
              </div>
            </div>
          </InstaModal>
        </>
      )}
      <div className="create-btns">
        <button onClick={() => setModal(!modal)}>
          <i class="bx bx-plus-medical"></i>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
