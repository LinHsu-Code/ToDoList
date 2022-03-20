import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
export default function TaskDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasklist);

  const index = tasks.findIndex((task) => task.id === params.id);
  //return <h2>Deatil: {params.id}</h2>;
  return (
    <main>
      <div className="detail-container">
        <dl>
          <div>
            <dt>Description:</dt>
            <dd>{tasks[index].description}</dd>
          </div>
          <div>
            <dt>Category:</dt>
            <dd>{tasks[index].category}</dd>
          </div>
          <div>
            <dt>Content:</dt>
            <dd>{tasks[index].content}</dd>
          </div>
        </dl>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </main>
  );
}
