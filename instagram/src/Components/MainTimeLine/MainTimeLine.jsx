import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, makeDislike, makeLike, makeLove } from "../../features/Timeline/timelineSlice";
import { formatDistanceToNow } from "date-fns";
import "./MainTimeLine.scss";
import { deletePost } from "../../features/Timeline/timelineApi.js";
const MainTimeLine = () => {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();
  // handle delete post

  return (
    <div className="timeline-content">
      {[...posts].length > 0
        ? [...posts]
            .reverse()
            .map(
              (
                {id, auth_name, auth_photo, photo, content, post_time, reactions},
                index
              ) => {
                return (
                  <div className="timeline-auth" key={index}>
                    <div className="timeline-detailes">
                      <div className="auth-profile">
                        <img src={auth_photo} alt="" />
                        <div className="auth-content">
                          <h5>{auth_name}</h5>
                          <span>{formatDistanceToNow(post_time)} ago</span>
                        </div>
                      </div>
                      <button
                        className="btn-close"
                        onClick={() => dispatch(deletePost(id))}
                      >
                        <i class="bx bx-x"></i>
                      </button>
                    </div>
                    <div className="timeline-posts">
                      <div className="post-content">
                        <p>{content}</p>
                        {photo && (
                          <img
                            style={{ height: "350px", objectFit: "cover" }}
                            src={photo}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="post-reaction">
                        <div className="reaction-items" onClick={() => dispatch(makeLove(id))}>
                          <i class="bx bx-heart"></i>
                          <span>{reactions.love}</span>
                        </div>
                        <div className="reaction-items" onClick={() => dispatch(makeLike(id))}>
                          <i class="bx bx-like"></i>
                          <span>{reactions.like}</span>
                        </div>
                        <div className="reaction-items" onClick={() => dispatch(makeDislike(id))}>
                          <i class="bx bx-dislike"></i>
                          <span>{reactions.dislike}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )
        : "No Posts"}
    </div>
  );
};

export default MainTimeLine;

//video link toolkit p2 https://www.youtube.com/watch?v=23ULCfwvKrs
