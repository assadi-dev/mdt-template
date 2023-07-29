import React, { useState } from "react";
import {
  DropDownSubItemsList,
  SibartItemRow,
  SideBarItemsContainer,
} from "./Sidebar.styled";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { dropDownAnimation, menuItemAnimation } from "./AnimationSidebar";

const SidebarItems = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((current) => (current = !current));
  };

  if (item.childrens) {
    return (
      <>
        <SibartItemRow onClick={toggleOpen}>{item.name}</SibartItemRow>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={dropDownAnimation}
              animate="show"
              initial="hidden"
              exit="hidden"
            >
              <DropDownSubItemsList>
                {item.childrens.map((child, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemAnimation}
                    animate="show"
                    initial="hidden"
                    exit="hidden"
                    custom={index}
                  >
                    <SidebarItems key={index} item={child} />{" "}
                  </motion.div>
                ))}
              </DropDownSubItemsList>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  } else {
    return (
      <AnimatePresence>
        {item.path ? (
          <SibartItemRow>
            <NavLink
              to={item.path}
              className={(e) => (e.isActive ? "sidebar-selected" : "")}
            >
              {item.name}
            </NavLink>
          </SibartItemRow>
        ) : (
          <SibartItemRow>{item.name}</SibartItemRow>
        )}
      </AnimatePresence>
    );
  }
};

export default SidebarItems;
