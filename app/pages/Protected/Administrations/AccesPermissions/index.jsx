import React, { useState, useEffect } from "react";
import {
  AccessPermissionContainer,
  AccessPermisssionHeader,
} from "./AccesPermission.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  factionsCollections,
  listsFactions,
} from "../../../../config/factions";
import { userFaction } from "../../../../services/utils/user";

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
          <AccessPermisssionHeader>
            <TabList className="faction-tab-list">
              {listsFactions.map((faction) => (
                <Tab key={faction.id} value={faction.full_name}>
                  {faction.full_name}
                </Tab>
              ))}
            </TabList>
            <div>{listsFactions[selected].full_name}</div>
          </AccessPermisssionHeader>
        </Tabs>
      ) : null}
    </AccessPermissionContainer>
  );
};

export default AccesPermissions;
