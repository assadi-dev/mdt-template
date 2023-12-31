import React, { useEffect, useRef } from "react";
import {
  AsideBarUser,
  AsideBarUserDetail,
  PageContainer,
  PageUserDetail,
  Row,
  RowAction,
} from "../../../components/PageContainer";
import UserDetail from "./UserDetail";
import TabsHeader from "./Tabs/TabContent/TabsHeader";
import { Outlet } from "react-router-dom";
import { TabsContentContainer } from "./Compte.styled";

import PhotoAgent from "./Tabs/TabContent/PhotoAgent";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./helper";
import { hydrateUser } from "../../../features/Authenticate/Athenticate.slice";

const Compte = () => {
  const { idAgent, photo, gender } = useSelector(
    (state) => state.AuthenticateReducer
  );

  const dispatch = useDispatch();

  const initUserData = async (signal) => {
    const res = await fetchUserData(idAgent, signal);
    // console.log(res.data);
    dispatch(hydrateUser(res.data));
  };

  const promiseUserRef = useRef(new AbortController());

  useEffect(() => {
    if (!idAgent) return;

    const signal = promiseUserRef.current?.signal;
    initUserData(signal);

    return () => {
      promiseUserRef.current?.abort();
    };
  }, [idAgent]);

  return (
    <PageContainer>
      <PageUserDetail>
        <AsideBarUser className="aside-agent-bg">
          <AsideBarUserDetail>
            <PhotoAgent photo={photo} gender={gender} />
            <UserDetail />
          </AsideBarUserDetail>
        </AsideBarUser>
        <div>
          <RowAction />
          <TabsHeader />
          <TabsContentContainer>
            <Outlet />
          </TabsContentContainer>
        </div>
      </PageUserDetail>
    </PageContainer>
  );
};

export default Compte;
