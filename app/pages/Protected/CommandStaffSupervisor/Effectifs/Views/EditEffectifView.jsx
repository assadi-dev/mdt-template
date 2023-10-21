import React, { useState } from "react";
import FormEffectif from "./Forms/FormEffectif";
import { EffectModalCOntainer } from "../Effectifs.styled";
import { HeaderModal } from "../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FormModalTabs from "../../../../../components/Forms/FormModalTabs";
import { Tabsheader } from "./ListOfEffectifsView";
import FormEOW from "./Forms/FormEOW";

const EditEffectifView = ({ payload, onCloseModal, ...props }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <EffectModalCOntainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Modifier l'Effectif</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormModalTabs tabsListHeader={Tabsheader} className="form-tab-select">
        <TabPanel>
          <FormEffectif defaultValues={payload} />
        </TabPanel>
        <TabPanel>
          <div> Formation </div>
        </TabPanel>
        <TabPanel>
          <FormEOW />
        </TabPanel>
      </FormModalTabs>
    </EffectModalCOntainer>
  );
};

export default EditEffectifView;
