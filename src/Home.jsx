import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-3"> All Items</h1>
      <section className="py-4 contanier">
        <div className="row justify-content-center">
          {data.productData.map((item,index) => (
            <Itemcard
            item={item}
            key={index}
             img={item.img} 
             price={item.price}
             title={item.title}
             desc={item.desc}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
