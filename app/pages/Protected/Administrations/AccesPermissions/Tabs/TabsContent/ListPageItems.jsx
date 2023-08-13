import React, { useEffect, useState } from "react";
import { HeaderPageSelect, TablePagesList } from "./TabsContent.styled";
import { retrievesAllName, retrievesRoutesByPgeName } from "./helper";
import uniqid from "uniqid";
import { useSelector } from "react-redux";

const ListPageItems = ({ idGrade }) => {
  const pagesNameList = retrievesAllName();

  const [pageSelected, setPageSelected] = useState(pagesNameList[0]);
  const [pageListes, setPageListes] = useState([]);

  useEffect(() => {
    if (!idGrade) return;

    let routes = retrievesRoutesByPgeName(pageSelected);
    setPageListes((current) => (current = routes));
  }, [idGrade, pageSelected]);

  const handleClickPageName = (page) => {
    setPageSelected((current) => (current = page));
  };

  return (
    <>
      <HeaderPageSelect>
        {pagesNameList
          ? pagesNameList.map((page) => (
              <span
                key={uniqid()}
                className={`header-page-btn ${
                  pageSelected == page && "bg-btn-theme-color"
                }`}
                onClick={() => handleClickPageName(page)}
              >
                {page}
              </span>
            ))
          : null}
      </HeaderPageSelect>
      {pageListes.length > 0 && (
        <TablePagesList>
          <thead>
            <tr>
              <th></th>
              <th>Ajouter</th> <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {pageListes.map((page) => (
              <tr key={uniqid()}>
                <td>{page.name}</td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            ))}
          </tbody>
        </TablePagesList>
      )}
    </>
  );
};

export default ListPageItems;
