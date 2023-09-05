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
import {
  BoldItalicUnderlineToggles,
  ListsToggle,
  MDXEditor,
  UndoRedo,
  toolbarPlugin,
} from "@mdxeditor/editor";

import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { quotePlugin } from "@mdxeditor/editor/plugins/quote";
import { thematicBreakPlugin } from "@mdxeditor/editor/plugins/thematic-break";

const DemandeComptability = () => {
  const [process, setProcess] = useState(false);

  const raisonTextRef = useRef(null);

  const handleChangeText = (value) => {
    console.log(value);
  };

  return (
    <DemandeCompatibiliteContainer>
      <HeadertitlePage> Demande de comptabilité </HeadertitlePage>
      <RowHeaderAction>
        <PreviewBtn className="bg-btn-alt-theme-color">
          Aperçu du document
        </PreviewBtn>
      </RowHeaderAction>
      <DemandeCompatibiliteBody>
        <DemandeCompatibiliteFormContainer>
          <FormContainer className="form-theme-color">
            <div className="form-control">
              <label htmlFor="subject">
                {" "}
                <strong>Objet de la demande</strong>{" "}
              </label>
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
            <MDXEditor
              contentEditableClassName="theme-text-editor"
              markdown="hello world"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <UndoRedo />
                      <BoldItalicUnderlineToggles />
                      <ListsToggle />
                    </>
                  ),
                }),
              ]}
            />

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
