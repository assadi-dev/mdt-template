import React, { useState } from "react";
import {
  DemandeCompatibiliteBody,
  DemandeCompatibiliteContainer,
  DemandeCompatibiliteFormContainer,
  FormFooter,
  HeadertitlePage,
  PreviewBtn,
  RowHeaderAction,
} from "./DemandeComptabilite.styled";
import {
  FormContainer,
  SubmitButton,
} from "../../../../components/Forms/FormView.styled";
import { useRef } from "react";
import LexicalMarkdownEditor from "../../../../components/TextEditor/LexicalMarkdownEditor";
import MarkdowTextEditor from "../../../../components/TextEditor/MarkdowTextEditor";

const DemandeComptability = () => {
  const [process, setProcess] = useState(false);

  const handleChangeText = (value) => {
    // console.log(value);
  };

  return (
    <DemandeCompatibiliteContainer>
      {/*   <HeadertitlePage> Demande de comptabilité </HeadertitlePage> */}
      <RowHeaderAction>
        <PreviewBtn className="bg-btn-alt-theme-color">
          Aperçu du document
        </PreviewBtn>
      </RowHeaderAction>
      <DemandeCompatibiliteBody>
        <DemandeCompatibiliteFormContainer>
          <FormContainer className="form-theme-color-alt">
            <div className="form-control">
              <label htmlFor="subject">Objet de la demande</label>
              <input id="subject" type="text" placeholder="Objet:" />
            </div>
            <div className="form-control">
              <label htmlFor="date">Date et heure</label>
              <input id="date" type="text" placeholder="Objet:" />
            </div>
            <div className="form-control">
              <label htmlFor="amount">Montant</label>
              <input id="amount" type="text" placeholder="1000" />
            </div>
            <div className="form-control">
              {" "}
              <label htmlFor="raison">Raison</label>
              <MarkdowTextEditor
                id="raison"
                className="theme-text-editor"
                getOutput={handleChangeText}
              />
            </div>
            <FormFooter>
              <SubmitButton className="bg-btn-alt-theme-color" type="submit">
                Envoyer la demande
              </SubmitButton>
            </FormFooter>
          </FormContainer>
        </DemandeCompatibiliteFormContainer>
      </DemandeCompatibiliteBody>
    </DemandeCompatibiliteContainer>
  );
};

export default DemandeComptability;
