import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";

const Menu = ({ items }) => {
  const [page, setPage] = useState(1)
  return (
    <div className="section-center">
      {items.slice((page -1) *4, (page-1) *4 +4).map((menuItem) => {
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
      <Pagination
      
      style={{
        padding: 20,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }} count={(items.length / 4).toFixed(0)}
      />
    </div>
  );
};

export default Menu;
