import React from "react";
import {
  AddBtn,
  BodyContainer,
  BodyGridForm,
  ContentContainer,
  HeaderGridForm,
} from "../../Civils.styled";
import { HeaderModal } from "../../../../../../../components/Forms/FormView.styled";
import { CloseBtnContainer } from "../../../../../../../components/Modal/Modal.styled";
import CloseModalBtn from "../../../../../../../components/Modal/CloseModalBtn";
import CivilForm from "./CivilForm";
import useProcess from "../../../../../../../hooks/useProcess";
import { useDispatch } from "react-redux";

const EncodeCivilForm = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    try {
      toggleProcess();
      console.log(values);
      //dispatch()
    } catch (error) {
    } finally {
      toggleProcess();
    }
  };

  return (
    <ContentContainer {...props}>
      <HeaderModal>
        <h2 className="form-title">Encoder un civil </h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
        <CloseBtnContainer />
      </HeaderModal>
      <BodyContainer>
        <CivilForm
          process={process}
          submitValues={handleSubmit}
          labelSubmit="Encoder"
        />
      </BodyContainer>
    </ContentContainer>
  );
};

export default EncodeCivilForm;
