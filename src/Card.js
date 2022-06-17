import React from "react";

const Card = ({title = "Basketball", bottonText= "Button", cardText="Some quick example text to build on the card title and make upthe bulk of the card's content.", cardImage="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => (
    <div className="card" style={{width: "18rem;"}}>
              <img
                src={cardImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {cardText}
                </p>
                <a href="#" className="btn btn-success">{bottonText}</a>
              </div>
            </div>
)

export default Card;