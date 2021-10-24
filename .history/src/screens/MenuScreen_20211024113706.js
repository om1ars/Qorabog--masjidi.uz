import React from "react";
import "./MenuScreen.css";
import MenuHeader from "../MenuHeader";
import MenuList from "../MenuList";
import MenuItem from "../MenuItem";
import menuList from "../menuList.json";
import { Add } from "../Add";

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
            <h2>Ilm olish uchun manbalar</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image, time }) => (
                  <MenuItem type={type} image={image} time={time} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Navoz vaqtlari</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>O'zbekcha manbalar
            </h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>S.Y. </h2>
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
      <Add />
    </div>
  );
}

export default MenuScreen;
