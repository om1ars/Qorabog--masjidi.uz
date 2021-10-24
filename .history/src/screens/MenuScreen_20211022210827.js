import React from "react";
import "./MenuScreen.css";
import MenuHeader from "../MenuHeader";
import MenuList from "../MenuList";
import MenuItem from "../MenuItem";
import menuList from "../menuList.json";

function MenuScreen() {
  return (
    <div className="menuScreen">
      {/* <MenuHeader /> */}
      <div className="menuScreen__container">
        <div className="menuScreen__left">
          <MenuList />
        </div>
        <div className="menuScreen__right">
          <h1>Ilova</h1>
          <div className="menuScreen__category">
            <h2>Namoz vaqtlari</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2></h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>At Home Coffee</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Merchandise</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
