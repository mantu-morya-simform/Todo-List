import "./Progress.css";

function Progress() {
  return (
    <div className="progress">
      <div className="progress__message">
        <p>Task Done</p>
        <p>Keep it Up</p>
      </div>
      <div className="progress__task__count">
        <p>2/3</p>
      </div>
    </div>
  );
}

export default Progress;
