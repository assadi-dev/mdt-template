import React, { useEffect } from "react";
import {
  CivilCasGridContainer,
  CivilCasePageContainer,
  CivilMainSection,
  RowButtonDocument,
} from "./CivilCase.style";
import AsideBarCivil from "./CivilAsideBar";
import { useDispatch, useSelector } from "react-redux";
import RowheaderButton from "./RowheaderButton";
import CivilTabsHeader from "./CivilTabsCase/CivilTabsHeader";
import { Outlet, useParams } from "react-router-dom";
import { TabsBody } from "./CivilTabsCase/CivilTabs.styled";
import { civilNavigation } from "../../../../../../config/options";
import { retrieveOneCivilAsync } from "../../../../../../features/Civils/CivilsAsyncAction";
import AsideBarCivilLoader from "./Loader/AsideBarCivilLoader";
import { removeCivilSelected } from "../../../../../../features/Civils/Civils.slice";

const CivilCase = () => {
  const { idCivil } = useParams();
  const dispatch = useDispatch();
  const { status, error, selected } = useSelector(
    (state) => state.CivilsReducer
  );
  const promiseRef = React.useRef(new AbortController());

  useEffect(() => {
    if (!idCivil) return;

    dispatch(retrieveOneCivilAsync({ idCivil }));

    return () => {
      promiseRef.current?.abort();
      dispatch(removeCivilSelected());
    };
  }, [idCivil]);
  //idCivil

  return (
    <CivilCasePageContainer>
      <CivilCasGridContainer>
        {status == "complete" ? (
          <AsideBarCivil civilData={selected} />
        ) : (
          <AsideBarCivilLoader />
        )}
        <CivilMainSection>
          {status == "complete" && (
            <RowheaderButton status={status} civilData={selected} />
          )}
          <CivilTabsHeader idCivil={idCivil} listeNav={civilNavigation} />
          <TabsBody>
            <Outlet />
          </TabsBody>
        </CivilMainSection>
      </CivilCasGridContainer>
    </CivilCasePageContainer>
  );
};

export default CivilCase;
