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
              isShow: true,
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

  const handleChangePageAccess = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.checked;
    let findElement = pageListes.find((el) => el.id == id);
    let update = { ...findElement, [name]: value };
    console.log(update);

    let updateCollection = [...pageListes].map((p) => {
      if (p.id == update.id) {
        return { ...update };
      }
      return p;
    });

    setPageListes((current) => (current = updateCollection));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pageListes);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Enregistrer</button>
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
                <tr key={page.id}>
                  <td>{page.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="isCanAdd"
                      id={page.id}
                      defaultChecked={page.isCanAdd}
                      onChange={handleChangePageAccess}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isCanUpdate"
                      id={page.id}
                      defaultChecked={page.isCanUpdate}
                      onChange={handleChangePageAccess}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isCanDelete"
                      id={page.id}
                      defaultChecked={page.isCanDelete}
                      onChange={handleChangePageAccess}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isShow"
                      id={page.id}
                      defaultChecked={page.isShow}
                      onChange={handleChangePageAccess}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </TablePagesList>
        )}
      </form>
    </>
  );
};

export default ListPageItems;
