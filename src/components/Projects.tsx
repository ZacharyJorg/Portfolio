import React, { useState, useEffect } from "react";

export function Projects() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <button
                type="button"
                className="list-group-item btn btn-primary border border-primary"
              >
                TRY ME!
              </button>
            </ul>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <button
                type="button"
                className="list-group-item btn btn-primary border border-primary"
              >
                TRY ME!
              </button>
            </ul>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <button
                type="button"
                className="list-group-item btn btn-primary border border-primary"
              >
                TRY ME!
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
