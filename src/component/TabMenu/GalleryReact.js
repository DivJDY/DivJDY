import React, { useState } from "react";
import "../TabMenu/tab.css";
import Menu from "./menu";

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-2 ml-3 main-heading">Live Spaces</h1>
      <div className="d-flex  ml-3">
        <p className="  text-justify">
          Collection guides can provide valuable overviews of pictorial holdings
          in libraries, archives, and museums. In addition to summarizing each
          collection at a repository, guides can outline relationships among
          collections and highlight special attractions. Repositories with
          limited resources may rely on guides as their sole access tool. But
          even repositories with online catalogs may need guides to orient new
          users to the full scope of available resources. The introductions to
          guides can convey acquisition themes and general history to assist
          researchers in understanding the nature of the collections.
        </p>
      </div>
      <hr />

      <div className="menu-tabs container pt-2">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Trending")}
          >
            Trending
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Most Popular")}
          >
            Most Popular
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Latest Show")}
          >
            Latest Show
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("In Temple")}
          >
            In Temple
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <div className="menu-items container-fluid mt-2">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-1">
              {items.map((elem) => {
                const { id, name, image, description, category } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4  mb-5 mt-2">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      {/* menu items description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h2> Category : {category}</h2>

                            {/* <a href="photos">
                              <button className="btn btn-primary">
                                Purchase
                              </button>
                            </a> */}
                          </div>
                          {/* <p>* Prices may vary on selected date.</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
