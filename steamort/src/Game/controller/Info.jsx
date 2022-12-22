import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Platform from "./Platform";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Info = ({ game }) => {
  const divStyle = {
    margin: "8px 18px",
    padding: "5px",
    borderRadius: "5px",
    background: "#1976d2",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  };
  const tagStyle = {
    color: "white",
    margin: "2px",
    fontSize: "12px",
  };
  const titleStyle = {
    color: "white",
    margin: "5px",
    padding: "5px 10px",
  };

  const titleGroup = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const plus = {
    ...titleStyle,
    fontSize: "26px",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const price = { ...titleStyle, margin: "13px" };
  const priceBuyStyle = {
    ...divStyle,
    color: "white",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: "#1976d2",
  };

  const [boxes, setBoxes] = useState({ generes: false, categories: false });

  const [Logged, SetLogged] = useState(false);

  useEffect(() => {
    setBoxes({ generes: false, categories: false });
    let email = sessionStorage.getItem("email");
    if (
      sessionStorage.getItem("Token") === null ||
      sessionStorage.getItem("Token") === undefined
    ) {
      SetLogged(false);
    } else if (sessionStorage.getItem("Token") && email) {
      SetLogged(true);
    }
  }, []);

  const open = (box) => {
    let cat = boxes.categories;
    let gen = boxes.generes;
    switch (box) {
      case "generes":
        setBoxes({ generes: !gen, categories: cat });
        return;
      case "categories":
        setBoxes({ generes: gen, categories: !cat });
        return;
    }
  };
  const openGeneres = () => {
    open("generes");
  };
  const openCategories = () => {
    open("categories");
  };
  const navigate = useNavigate();

  const handleLink = (event) => {
    // console.log(event.srcElement.label); //[deprecated]
    // console.log(event.currentTarget.children[0].innerHTML);
    const gen = event.currentTarget.children[0].innerHTML;
    navigate("/gamesCategories/" + `${gen}`);
    window.location.reload();
  };

  const comprar = () => {
    sessionStorage.setItem("game", game.name);
    if (Logged === true) {
      return navigate("/addPurchase");
    } else {
      return navigate("/login");
    }
  };

  return (
    <div style={{ width: "36%" }}>
      <div
        style={{
          margin: "20px",
          width: "90%",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <img
          src={game.image}
          alt="image"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </div>

      <div style={priceBuyStyle}>
        <h3 style={titleStyle}>Price</h3>
        <h4 style={price}>{game.price_overview.final_formatted}</h4>
        <ShoppingCartIcon onClick={comprar} style={price} />
      </div>

      <div style={divStyle}>
        <div style={titleGroup}>
          <h3 style={titleStyle}>Genres</h3>
          <span style={plus} onClick={openGeneres}>
            {!boxes.generes ? "+" : "-"}
          </span>
        </div>
        {boxes.generes && (
          <div style={{ margin: "8px" }}>
            {game.genres.map((genre) => (
              <Chip
                id={genre.id}
                label={genre.description}
                style={tagStyle}
                size="small"
                variant="outlined"
                onClick={handleLink}
              ></Chip>
            ))}
          </div>
        )}
      </div>
      <div style={divStyle}>
        <div style={titleGroup}>
          <h3 style={titleStyle}>Categories</h3>
          <span style={plus} onClick={openCategories}>
            {!boxes.categories ? "+" : "-"}
          </span>
        </div>
        {boxes.categories && (
          <div style={{ margin: "8px" }}>
            {game.categories.map((category) => (
              <Chip
                label={category.description}
                style={tagStyle}
                size="small"
                variant="outlined"
              ></Chip>
            ))}
          </div>
        )}
      </div>
      <div style={divStyle}>
        <h3 style={titleStyle}>Platforms</h3>
        <div style={{ margin: "8px" }}>
          <Platform
            platforms={{
              windows: game.platforms.windows,
              mac: game.platforms.mac,
              linux: game.platforms.linux,
            }}
          ></Platform>
        </div>
      </div>
      <div style={divStyle}>
        <div style={titleGroup}>
          <h3 style={titleStyle}>Release date</h3>
          <div style={{ margin: "8px" }}>
            <h4 style={titleStyle}>{game.release_date.date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
