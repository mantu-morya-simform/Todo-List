import "./Progress.css";

type ProgressProps = {
  completedCount: number;
  totalCount: number;
};

function Progress({ completedCount, totalCount }: ProgressProps) {
  return (
    <div className="progress">
      <div className="progress__message">
        <p>Task Done</p>
        <p>Keep it Up</p>
      </div>
      <div className="progress__task__count">
        <p>
          {completedCount}/{totalCount}
        </p>
      </div>
    </div>
  );
}

export default Progress;
