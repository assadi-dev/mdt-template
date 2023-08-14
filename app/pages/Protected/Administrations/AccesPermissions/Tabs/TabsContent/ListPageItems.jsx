import React, { useEffect, useState } from "react";
import { HeaderPageSelect, TablePagesList } from "./TabsContent.styled";
import {
  fetchAccessRouteLists,
  retrievesAllName,
  retrievesRoutesByPgeName,
} from "./helper";
import uniqid from "uniqid";
import { useSelector } from "react-redux";

const ListPageItems = ({ idGrade }) => {
  const pagesNameList = retrievesAllName();

  const [pageSelected, setPageSelected] = useState(pagesNameList[0]);
  const [pageListes, setPageListes] = useState([]);

  const initAcces = async (signal) => {
    if (!pageListes) return;
    try {
      const routesAccess = await fetchAccessRouteLists(idGrade, signal);
      if (routesAccess.data) {
        const accesData = routesAccess.data;

        let updatePageLists = [...pageListes].map((current) => {
          let findPath = accesData.find(
            (access) => access.path == current.path
          );

          if (findPath) {
            const { isCanAdd, isCanUpdate, isCanDelete, page, path } = findPath;
            return {
              ...current,
              isCanAdd,
              isCanUpdate,
              isCanDelete,
            };
          }

          return current;
        });
        setPageListes((current) => (current = updatePageLists));
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!idGrade) return;
    const controller = new AbortController();
    const signal = controller.signal;
    let routes = retrievesRoutesByPgeName(pageSelected);
    setPageListes((current) => (current = routes));
    pageListes.length > 0 && initAcces(signal);

    return () => {
      controller.abort();
    };
  }, [idGrade, pageSelected, pageListes.length]);

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
              <th>Afficher</th>
            </tr>
          </thead>
          <tbody>
            {pageListes.map((page) => (
              <tr key={uniqid()}>
                <td>{page.name}</td>
                <td>
                  <input
                    type="checkbox"
                    name="isCanAdd"
                    id="isCanAdd"
                    defaultChecked={page.isCanAdd}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="isCanUpdate"
                    id="isCanUpdate"
                    defaultChecked={page.isCanUpdate}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="isCanDelete"
                    id="isCanDelete"
                    defaultChecked={page.isCanDelete}
                  />
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
