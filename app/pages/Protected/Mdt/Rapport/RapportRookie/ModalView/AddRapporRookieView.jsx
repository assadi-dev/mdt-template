import React from "react";
import {
  FormContainer,
  FormControl,
  HeaderModal,
  ModalFooter,
} from "../../../../../../components/Forms/FormView.styled";
import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import { useForm } from "react-hook-form";
import useProcess from "../../../../../../hooks/useProcess";
import ButtonWithLoader from "../../../../../../components/Button/ButtonWithLoader";
import { TextContent } from "../../../../../../components/Modal/PreviewDocument/PreviewDocument.styled";
import MarkdowTextEditor from "../../../../../../components/TextEditor/MarkdowTextEditor";
import AcquisitionSection from "./Form/AcquisitionSection";
import {
  CommentTextContent,
  RapporRookieModalCOntainer,
} from "../RapportRookie.styled";

const AddRapporRookieView = ({ onCloseModal, ...props }) => {
  const { process, toggleProcess } = useProcess();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      idAgent: null,
      mariculeRookie: "",
      nameRookie: "",
      typePatrouille: "",
      comment: "",
      relationCivil: "bad",
      controlRoutier: "bad",
      procedure: "bad",
      conduite: "bad",
      deontologie: "bad",
      respectHierarchie: "bad",
      terrain: "bad",
      callRadio: "bad",
    },
  });

  const handlegetCommentaire = (value) => {
    errors.comment && clearErrors("comment");
    setValue("comment", value);
  };

  const submit = (values) => {
    toggleProcess();
    console.log(values);
  };

  return (
    <RapporRookieModalCOntainer onSubmit={handleSubmit(submit)} {...props}>
      <HeaderModal>
        <h2 className="form-title">Ajouter un rapport</h2>
        <CloseModalBtn className="close-section" onClick={onCloseModal} />
      </HeaderModal>
      <FormContainer className="form-theme-color">
        <FormControl>
          <label htmlFor="">Matricule du Rookie</label>
          <input type="text" {...register("mariculeRookie")} />
        </FormControl>
        <FormControl>
          <label htmlFor="">Nom Prénom du Rookie</label>
          <input type="text" {...register("nameRookie")} />
        </FormControl>
        <FormControl>
          <label htmlFor="">Type de patrouille</label>
          <input type="text" {...register("typePatrouille")} />
        </FormControl>

        <AcquisitionSection />

        <CommentTextContent>
          <p className="mb-1">Commentaire</p>
          <MarkdowTextEditor
            className="theme-text-editor"
            getOutput={handlegetCommentaire}
          />
        </CommentTextContent>

        <ModalFooter>
          <ButtonWithLoader
            isLoading={process}
            className="bg-btn-theme-color"
            type="submit"
          >
            Ajouter
          </ButtonWithLoader>
        </ModalFooter>
      </FormContainer>
    </RapporRookieModalCOntainer>
  );
};

export default AddRapporRookieView;
