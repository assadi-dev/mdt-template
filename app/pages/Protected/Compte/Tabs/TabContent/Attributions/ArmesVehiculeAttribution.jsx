import React from "react";
import {
  ActionRow,
  AttributionPageContainer,
  SelectTabButton,
} from "./AttributionStyled";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FormModalTabs from "../../../../../../components/Forms/FormModalTabs";
import { useSelector } from "react-redux";
import ArmesTabContent from "./ArmesTabContent";
import VehicleTabContent from "./VehicleTabContent";

const ArmesVehiculeAttribution = () => {
  const { idAgent } = useSelector((state) => state.AuthenticateReducer);

  return (
    <AttributionPageContainer>
      <FormModalTabs
        tabsListHeader={["Armes", "Véhicule"]}
        className="form-tab-select"
      >
        <TabPanel>
          <ArmesTabContent idAgent={idAgent} />
        </TabPanel>
        <TabPanel>
          <VehicleTabContent idAgent={idAgent} />
        </TabPanel>
      </FormModalTabs>
    </AttributionPageContainer>
  );
};

export default ArmesVehiculeAttribution;
