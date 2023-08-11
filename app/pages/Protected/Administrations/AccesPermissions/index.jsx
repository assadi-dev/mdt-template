import React, { useState, useEffect } from "react";
import {
  AccessPermissionContainer,
  AccessPermisssionHeader,
  FactionSelectedContainer,
} from "./AccesPermission.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  factionsCollections,
  listsFactions,
} from "../../../../config/factions";
import { userFaction } from "../../../../services/utils/user";
import TabListItem from "./Tabs/TabListItem";
import TabContent from "./Tabs/TabsContent";

const AccesPermissions = () => {
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const faction = userFaction();

    let index = listsFactions.findIndex((f) => f.short_name == faction);
    setSelected(index);
  }, []);

  const handleSelected = (index) => {
    if (!listsFactions) return;
    setSelected((current) => (current = index));
  };

  return (
    <AccessPermissionContainer>
      {selected != -1 ? (
        <Tabs
          defaultIndex={selected}
          onSelect={handleSelected}
          selectedTabClassName="faction-selected"
        >
          {/* Tabs  Header */}
          <AccessPermisssionHeader>
            <TabList className="faction-tab-list">
              {listsFactions.map((faction) => (
                <Tab key={faction.id} value={faction.full_name}>
                  <TabListItem src={faction.emblem} />
                </Tab>
              ))}
            </TabList>
            <FactionSelectedContainer>
              <h2 className="title">{listsFactions[selected].full_name}</h2>
            </FactionSelectedContainer>
          </AccessPermisssionHeader>
          {/* End of Header */}
          {/* Tabs Contents */}
          <TabPanel itemID={"lspd"}>
            <TabContent faction={"lspd"} />{" "}
          </TabPanel>
          <TabPanel itemID={"bcso"}>
            <TabContent faction={"bcso"} />{" "}
          </TabPanel>
          <TabPanel itemID={"doj"}>
            <TabContent faction={"doj"} />{" "}
          </TabPanel>
        </Tabs>
      ) : null}
    </AccessPermissionContainer>
  );
};

export default AccesPermissions;
