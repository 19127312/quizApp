import React, { useState, useRef, useEffect, useContext } from "react";
import * as SC from "./StyledMainPageComponents";
import logo from "../../Assets/logo.png";
import emptyFolder from "../../Assets/emptyFolder.png";
import TabItem from "./TabItem";
import groupIcon from "../../Assets/groupIcon.svg";
import slideIcon from "../../Assets/slideIcon.svg";
import settings from "../../Assets/settings.svg";
import useAuth from "../../Hooks/useAuth";
import AuthContext from '../../Context/AuthProvider'

const Item = [{ id: 1, itemName: "Group", icon: groupIcon }, { id: 2, itemName: "Slide", icon: slideIcon }]
export default function MainPage() {
  const [tab, setTab] = useState(0);
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);

  //{Item.map((item) => TabItem tab={tab} setTab={setTab} item={item} checked={checked==item.id} />)}
  const handleClickTab = (index) => {
    setTab(index);
  };
  const menuRef = useRef()
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpenSetting(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  const handleLogout = () => {
    setAuth({ user: null });
    localStorage.removeItem("user");
  }
  return (
    <SC.StyledPageContainer>
      <SC.StyledLeftTab>

        <SC.StyledLogoContainer>
          <img src={logo} alt="logo" />
          <SC.StyledNameContainer>
            <SC.StyledLogoName>Team Name</SC.StyledLogoName>
            <SC.StyledDescription>Team Description</SC.StyledDescription>
          </SC.StyledNameContainer>
        </SC.StyledLogoContainer>

        <SC.StyledTabItemContainer>
          <TabItem logo={groupIcon} name="Group" clicked={true} />
        </SC.StyledTabItemContainer>

        <SC.StyledSettingContainer>
          <SC.StyledUserContainer>
            <SC.StyledUserName>{auth.user.fullName}</SC.StyledUserName>
            <SC.StyledDescription>{auth.user.email}</SC.StyledDescription>
          </SC.StyledUserContainer>
          <img src={settings} alt="setting" onClick={() => setIsOpenSetting(!isOpenSetting)} />
          {isOpenSetting && <SC.StyledSettingLists ref={menuRef}>
            <SC.StyledSettingBox>
              <SC.StyledSettingItem>Setting</SC.StyledSettingItem>
              <SC.StyledSettingItem onClick={handleLogout}>Log out</SC.StyledSettingItem>
            </SC.StyledSettingBox>
          </SC.StyledSettingLists>}
        </SC.StyledSettingContainer>


      </SC.StyledLeftTab>
      <SC.StyledRightContent>
        <img src={emptyFolder} alt="Login Page " />
      </SC.StyledRightContent>

    </SC.StyledPageContainer>
  );
}
