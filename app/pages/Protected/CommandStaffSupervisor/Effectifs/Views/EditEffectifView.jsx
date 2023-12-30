import React, { useState } from "react";
import FormEffectif from "./Forms/FormEffectif";
import { EffectModalCOntainer } from "../Effectifs.styled";
import { HeaderModal } from "../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FormModalTabs from "../../../../../components/Forms/FormModalTabs";
import { Tabsheader } from "./ListOfEffectifsView";
import FormEOW from "./Forms/FormEOW";
import {
  extractIdgrade,
  objectCredential,
  save_eow,
  update_effectif,
} from "./helpers";
import { toastError, toastSuccess } from "../../../../../services/utils/alert";
import useProcess from "../../../../../hooks/useProcess";
import { useSelector, useDispatch } from "react-redux";
import { edit_an_effectif } from "../../../../../features/Effectifs/Effectifs.slice";
import { hydrateUser } from "../../../../../features/Authenticate/Athenticate.slice";
import { agent_iri } from "../../../../../services/api/instance";

const EditEffectifView = ({ payload, onCloseModal, ...props }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const id = payload?.id;
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();
  const authenticateUser = useSelector((state) => state.AuthenticateReducer);

  const save_effectif = async (values) => {
    try {
      toggleProcess();
      const gradeId = extractIdgrade(values.grade);

      await update_effectif(id, values);
      values.grade = values.gradeLabel;

      delete values.gradeLabel;
      const payload = values;
      dispatch(edit_an_effectif(payload));

      if (authenticateUser.idAgent == id) {
        let updateUserCredential = objectCredential({ ...values, gradeId });
        dispatch(hydrateUser(updateUserCredential));
      }

      onCloseModal();
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
    } finally {
      toggleProcess();
    }
  };

  const handleSaveEow = async (values) => {
    try {
      toggleProcess();
      values.agent = `${agent_iri}${payload.id}`;
      await save_eow(values);
      toastSuccess();
    } catch (error) {
      toastError();
    } finally {
      toggleProcess();
    }
  };

  return (
    <EffectModalCOntainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Modifier l'Effectif</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormModalTabs tabsListHeader={Tabsheader} className="form-tab-select">
        <TabPanel>
          <FormEffectif
            defaultValues={payload}
            onSave={save_effectif}
            process={process}
          />
        </TabPanel>
        <TabPanel>
          <div> Formation </div>
        </TabPanel>
        <TabPanel>
          <FormEOW onSubmitValues={handleSaveEow} process={process} />
        </TabPanel>
      </FormModalTabs>
    </EffectModalCOntainer>
  );
};

export default EditEffectifView;
