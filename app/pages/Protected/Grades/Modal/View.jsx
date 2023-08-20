import React from "react";
import FormAddCategory from "./Views/FormAddCategory";
import FormAddGrade from "./Views/FormAddGrade";
import FormDelete from "./Views/FormDelete";
import FormEditGradeCategorie from "./Views/FormEditCategorie";
import FormEditGrade from "./Views/FormEditGrade";

const View = ({ view, data, onCloseModal }) => {
  switch (view) {
    case "add-category":
      return (
        <FormAddCategory
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );
    case "edit-category":
      return (
        <FormEditGradeCategorie
          data={data}
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );
      break;

    case "delete-category":
      if (data) {
        const titleDeleCategorie = `Etes-vous sur de vouloir supprimer la categorie : ${data.name} de la faction ${data.faction} ?`;
        const alertCategorieMessage = `Attention la suppression n'est pas possible si un grade est associé à cette categorie.`;
        return (
          <FormDelete
            data={data}
            text={titleDeleCategorie}
            alertMessage={alertCategorieMessage}
            className="modal-theme-color"
            onCloseModal={onCloseModal}
            onConfirm={data.onConfirmDelete}
          />
        );
      } else {
        return (
          <FormDelete
            data={data}
            text={"Etes-vous sur de vouloir supprimer la categorie"}
            alertMessage={""}
            className="modal-theme-color"
            onCloseModal={onCloseModal}
            onConfirm={data.onConfirmDelete}
          />
        );
      }

    case "add-grade":
      return (
        <FormAddGrade
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );

    case "edit-grade":
      return (
        <FormEditGrade
          data={data}
          className="modal-theme-color"
          onCloseModal={onCloseModal}
        />
      );

    case "delete-grade":
      const titleDeleCategorie = `Etes-vous sur de vouloir supprimer le grade: ${data.name} de la faction ${data.faction} ?`;
      return (
        <FormDelete
          data={data}
          text={titleDeleCategorie}
          alertMessage=""
          className="modal-theme-color"
          onCloseModal={onCloseModal}
          onConfirm={data.onConfirmDelete}
        />
      );

    default:
      break;
  }
};

export default View;
