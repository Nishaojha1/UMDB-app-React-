import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  titel,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} />
        <div className="card-body">
          <button type="button" className="btn btn-dark">
            View More
          </button>
          {/* modals */}
          <div className="modal">
            <div className="modal-header">

            </div>
            <div className="modal-body">

            </div>
            <div className="modal-footer">

            </div>
            {/* end of modals */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieBox;
