import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="LearnCodeOnline" bottonText="MyLCO app" />
          </div>
          <div className="col-4">
              <Card title="New York" cardImage="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" bottonText="Go NY"/>
          </div>
          <div className="col-4">
            <Card title="Pisa" cardImage="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" bottonText="Go Pisa"/>  
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSection;