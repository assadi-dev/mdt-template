import React from "react";
import FormEffectif from "./Forms/FormEffectif";
import { EffectModalCOntainer } from "../Effectifs.styled";
import { HeaderModal } from "../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../components/Modal/CloseModalBtn";

const EditEffectifView = ({ payload, onCloseModal, ...props }) => {
  return (
    <EffectModalCOntainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Modifier l'Effectif</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormEffectif defaultValues={payload} />
    </EffectModalCOntainer>
  );
};

export default EditEffectifView;
