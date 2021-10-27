import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";
import "./Footer.css";
import { Link } from "react-router-dom";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const Accordion = ({
  i,
  expanded,
  setExpanded,
  linkHeading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        className="accordion__header"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <p>{linkHeading}</p>
        <div className="accordion__icon">
          {isOpen ? (
            <KeyboardArrowUpRoundedIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownRoundedIcon fontSize="large" />
          )}
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="accordion__section"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  //   const [expanded, setExpanded] = (useState < false) | (1 > 0)
  const [expanded, setExpanded] = useState();

  return (
    <>
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Namoz vaqtlari  "
        i={0}
        link1="Bomdod"
        link2="Peshin"
        link3="Asr"
        link4="Shom"
        link5="Xufton"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Masjid xodimlar"
        i={1}
        link1="Yahyo qori"
        link2="Ilhom qori"
        link3="Nuriddin qori"
        link4="Rahmonberdi qori"
        link5="Abdurashid qori"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Sahifa yaratuvchisi"
        i={2}
        link1="Omar"
      />
 
    </>
  );
};

const accordionIds = [0, 1, 2, 3];
