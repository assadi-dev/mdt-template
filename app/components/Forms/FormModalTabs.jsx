import React from "react";
import { Tab, Tabs } from "react-tabs";
import { TabsFormHeader } from "./FormView.styled";

const FormModalTabs = ({
  tabsListHeader = ["test1", "test2", "test3"],
  children,
  ...props
}) => {
  return (
    <Tabs {...props}>
      <TabsFormHeader className="tab-header-list">
        {tabsListHeader.map((tabsListHeader) => (
          <Tab>{tabsListHeader}</Tab>
        ))}
      </TabsFormHeader>
      {children}
    </Tabs>
  );
};

export default FormModalTabs;
