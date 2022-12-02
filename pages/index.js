import { POSTS } from "../data";

/**
  <div className="col-lg-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">PUT UR TITLE HERE</h5>
        <h6 className="card-subtitle mb-2 text-muted">PUT SOME POST ID HERE</h6>
        <p className="card-text">PUT UR POST BODY HERE</p>
      </div>
    </div>
  </div>
 */
// Bootstrap card

/**
  <form>
    <div className="mb-3">
      <label htmlFor="my-text-input-or-whatever" className="form-label">
        Label for input
      </label>
      <input
        type="text"
        className="form-control"
        id="my-text-input-or-whatever"
      />
    </div>
  </form>
 */
// form and input

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        {/**
         * Put bootstrap cards here, map over POSTS
         */}
      </div>
    </div>
  );
}
