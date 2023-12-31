import React, { useEffect, useState } from "react";
import {
  HeaderPageSelect,
  RowStartEnd,
  SubmitButton,
  TablePagesList,
} from "./TabsContent.styled";
import {
  fetchAccessRouteLists,
  retrievesAllName,
  retrievesRoutesByPgeName,
  updatePermission,
} from "./helper";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { updateAccess } from "../../../../../../features/UserPermissions/UserPermissions.slice";
import { userIdGrade } from "../../../../../../services/utils/user";
import {
  toastError,
  toastSuccess,
} from "../../../../../../services/utils/alert";
import SpinnerButton from "../../../../../../components/Shared/Loading/SpinnerButton";

const ListPageItems = ({ idGrade }) => {
  const pagesNameList = retrievesAllName();
  const dispatch = useDispatch();

  const [pageSelected, setPageSelected] = useState(pagesNameList[0]);
  const [pageListes, setPageListes] = useState([]);
  const [process, setProcess] = useState(false);

  const toggleProcess = () => {
    setProcess((current) => (current = !current));
  };

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
            const { isCanAdd, isCanUpdate, isCanDelete, isShow, page, path } =
              findPath;
            return {
              ...current,
              isCanAdd,
              isCanUpdate,
              isCanDelete,
              isShow,
            };
          }

          return current;
        });
        setPageListes((current) => (current = updatePageLists));
      }
    } catch (error) {}
  };

  /**
   * Fix difference des path avec la meme taille
   */
  const diff = pageListes
    ? JSON.stringify(Object.values([...pageListes.map((page) => page.path)]))
    : [];

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
  }, [idGrade, pageSelected, diff]);

  const handleClickPageName = (page) => {
    setPageSelected((current) => (current = page));
  };

  const handleChangePageAccess = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.checked;
    let findElement = pageListes.find((el) => el.id == id);
    let update = { ...findElement, [name]: value };

    let updateCollection = [...pageListes].map((p) => {
      if (p.id == update.id) {
        return { ...update };
      }
      return p;
    });

    setPageListes((current) => (current = updateCollection));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleProcess();
    try {
      const data = { idGrade, body: { access: pageListes } };
      const res = await updatePermission(data);
      toastSuccess();
      if (userIdGrade() == idGrade) dispatch(updateAccess(res.data));
    } catch (error) {
      toastError();
    }
    toggleProcess();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RowStartEnd>
          <SubmitButton type="submit" className="bg-btn-alt-theme-color">
            Enregistrer {process && <SpinnerButton />}
          </SubmitButton>
        </RowStartEnd>

        <HeaderPageSelect className="header-tab-select-container">
          {pagesNameList
            ? pagesNameList.map((page) => (
                <span
                  key={uniqid()}
                  className={`header-page-btn ${
                    pageSelected == page && "bg-selected-theme-color"
                  }`}
                  onClick={() => handleClickPageName(page)}
                >
                  {page}
                </span>
              ))
            : null}
        </HeaderPageSelect>
        {pageListes.length > 0 && (
          <TablePagesList className="table-page-access">
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
