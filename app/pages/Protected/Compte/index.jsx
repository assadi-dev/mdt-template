import React from "react";
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

const Compte = () => {
  return (
    <PageContainer>
      <PageUserDetail>
        <AsideBarUser className="aside-agent-bg">
          <AsideBarUserDetail>
            <PhotoAgent />

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
