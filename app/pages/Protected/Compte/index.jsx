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

const Compte = () => {
  return (
    <PageContainer>
      <PageUserDetail>
        <AsideBarUser className="aside-agent-bg">
          <AsideBarUserDetail>
            <div className="photo"></div>
            <UserDetail />
          </AsideBarUserDetail>
        </AsideBarUser>
        <div>
          <RowAction />
          <TabsHeader />
        </div>
      </PageUserDetail>
    </PageContainer>
  );
};

export default Compte;
