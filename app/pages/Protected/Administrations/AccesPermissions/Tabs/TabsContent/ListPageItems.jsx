import React from "react";

const ListPageItems = ({ idGrade }) => {
  const styles = { textAlign: "center" };

  return (
    <ul>
      <table
        style={{
          width: "100%",
          borderSpacing: "0 15px",
          borderCollapse: "separate",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}></th>{" "}
            <th style={styles}>Ajouter</th> <th style={styles}>Modififer</th>{" "}
            <th style={styles}>Supprimer</th>{" "}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feuille d'heures</td>
            <td style={styles}>
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
      </table>
    </ul>
  );
};

export default ListPageItems;
