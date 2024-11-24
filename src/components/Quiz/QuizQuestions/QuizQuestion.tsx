function QuizQuestion(){
  return (
    <>
      <div className="my-5">
          <p className="lead font-weight-normal">
            1. What is Git?
          </p>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="A" checked />
            <label className="form-check-label">A Version Control System.</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="B" />
            <label className="form-check-label">A request to fetch data!</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="C" />
            <label className="form-check-label">Graphical Interface Transfer.</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="D" />
            <label className="form-check-label">All of the above.</label>
          </div>
        </div>
    </>
  )
}