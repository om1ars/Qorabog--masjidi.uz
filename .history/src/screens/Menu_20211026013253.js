import React, { useState } from "react";

const Menu = ({ items }) => {
  const [page, setPage] = useState(1)
  return (
    <div className="section-center">
      {items.slice(())map((menuItem) => {
        const { id, title, img, desc, price, link } = menuItem;
        return (
          <article key={id} className="menu-item">
            <iframe
              src={link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
