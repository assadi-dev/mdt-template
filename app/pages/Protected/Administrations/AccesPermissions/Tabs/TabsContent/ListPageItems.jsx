import React from "react";
import { TablePagesList } from "./TabsContent.styled";

const ListPageItems = ({ idGrade }) => {
  const styles = { textAlign: "center" };

  console.log(idGrade);

  return (
    <>
      <TablePagesList>
        <thead>
          <tr>
            <th></th>
            <th>Ajouter</th> <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feuille d'heures</td>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td style={styles}>
              <input type="checkbox" name="" id="" />
            </td>
            <td style={styles}>
              <input type="checkbox" name="" id="" />
            </td>
          </tr>
        </tbody>
      </TablePagesList>
    </>
  );
};

export default ListPageItems;
