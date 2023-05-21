import React from "react";
import "./UnstudyCourse.scss";
import "../../component/LearningItem/LearningItem.scss";
import { Link } from "react-router-dom";
import { imgErr, logo } from "../../constants/images";

function UnstudyCourses(props) {
  return (
    <>
      <div className="Learning-item Course-item">
        <Link to={`/course/${props?.data?.id}`}>
          <div className="img-item">
            <img
              alt="course"
              src={props?.data?.img}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${imgErr}`;
              }}
            />
          </div>
        </Link>
        <Link to={`/course${props?.data?.id}`}>
          <h3>{props?.data?.name}</h3>
        </Link>
        <p>
          <i class="fas fa-users"></i>
          <span>{props.data.userLearning ? props.data.userLearning : 0}</span>
        </p>
        <div
          className="popover-course arrow-left"
          style={{ left: "calc(100%)", right: "unset" }}
        >
          <Link to={`/course/${props?.data?.id}`}>
            <h3 className="popover-course__title">{props?.data?.name}</h3>
          </Link>
          <div className="popover-course__sum">
            <div className="author">
              <img src={logo} alt="Learnit" className="author-img" />
              <Link href="/about" className="user-name">
                LearnIt
              </Link>
            </div>
          </div>
          <p class="course-description">{props?.data?.description}</p>
          <ul className="popover-course__detail-infor">
            <li>
              <p>
                <i class="fab fa-dribbble"></i> Online
              </p>
            </li>
            <li>
              <p>
                <i class="far fa-user"></i> 19791 thành viên
              </p>
            </li>
            <li>
              <p>
                <i class="far fa-clock"></i> Tổng số bài học:
                <strong>24 bài</strong>
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-award"></i> Chứng chỉ hoàn thành khóa học
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UnstudyCourses;
