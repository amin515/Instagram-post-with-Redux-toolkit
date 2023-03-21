import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../features/Timeline/timelineSlice";
import "./MainTimeLine.scss";
const MainTimeLine = () => {
  const posts = useSelector(getAllPosts);
  return (
    <div className="timeline-content">
      {[...posts]
        .reverse()
        .map(({ auth_name, auth_photo, photo, content, post_time }, index) => {
          return (
            <div className="timeline-auth" key={index}>
              <div className="timeline-detailes">
                <div className="auth-profile">
                  <img src={auth_photo} alt="" />
                  <div className="auth-content">
                    <h5>{auth_name}</h5>
                    <span>{post_time} minute ago</span>
                  </div>
                </div>
              </div>
              <div className="timeline-posts">
                <div className="post-content">
                  <p>{content}</p>
                  <img
                    style={{ height: "350px", objectFit: "cover" }}
                    src={photo}
                    alt=""
                  />
                </div>
                <div className="post-reaction">
                  <div className="reaction-items">
                    <i class="bx bx-heart"></i>
                    <span>10</span>
                  </div>
                  <div className="reaction-items">
                    <i class="bx bx-like"></i>
                    <span>10</span>
                  </div>
                  <div className="reaction-items">
                    <i class="bx bx-dislike"></i>
                    <span>10</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainTimeLine;


//video link toolkit p2 https://www.youtube.com/watch?v=23ULCfwvKrs
