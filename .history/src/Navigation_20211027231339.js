import * as React from "react";
// import { motion } from "framer-motion";
import { MenuLink } from "./MenuLink";
import FindAStore from "./FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const [showMenuCategories, setShowMenuCategories] = React.useState(false);

  return (
    <>
      {showMenuCategories ? (
        <ul variants={variants}>
          <MenuLink
            link="Menu"
            goBackIcon
            onClick={() => {
              setShowMenuCategories(false);
            }}
            width="60%"
          />
          <Link style={{textDecoration: 'none', color: 'black'}} to="/courses">
            <MenuLink
              link="Kurslar"
              path="/menu/featured"
              onClick={() => {
                setShowMenuCategories(false);
                toggle();
              }}
            />
          </Link>

          <Link style={{textDecoration: 'none', color: 'black'}} to="/menu">
            <MenuLink
              link="Namoz vaqtlari"
              onClick={() => {
                setShowMenuCategories(false);
                toggle();
              }}
            />
          </Link>
        </.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <Link style={{textDecoration: 'none', color: 'black'}} to="/">
            {" "}
            <MenuLink link="Bosh sahifa" />
          </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/quran">
            {" "}
            <MenuLink link="Qur'on" />
          </Link>
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
         
          </motion.div>
          <motion.div variants={variants2}>
            <FindAStore />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};
