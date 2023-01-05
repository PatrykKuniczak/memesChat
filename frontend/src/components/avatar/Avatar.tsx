import React, { ChangeEvent, useState } from "react";

import {
  AvatarWrapper,
  Button,
  DropdownWrapper,
  DropdownList,
  DropdownListItem,
  EditNicknameModal,
  Input, DeleteAccountModal,
  DeleteAccountModalButtons,
  ButtonPrimary,
  ButtonSecondary
} from "./Avatar.styled";
import {
  UserImage,
  UserName,
} from "../../pages/home/Home.styled";

import IconChevron from '../../assets/icon-chevron.svg'
import user from "../../assets/user.jpg";


const Avatar = () => {
  const [userName, setUserName] = useState('John Doe');
  const [newUserName, setNewUserName] = useState(userName);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  const [showEditNicknameModal, setShowEditNicknameModal] = useState(false)
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false)

  const toggleAvatarDropdown = () => setShowAvatarDropdown(prevState => !prevState)
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewUserName(value)
  }


  return (
    <AvatarWrapper>
      <UserName>{userName}</UserName>
      <UserImage src={user} />
      <Button onClick={toggleAvatarDropdown}>
        <img src={IconChevron} alt="See more."/>
      </Button>
      {showAvatarDropdown &&
          <DropdownWrapper onClick={()=>{
            setShowAvatarDropdown(false)
            }}>
            <DropdownList>
              <DropdownListItem onClick={()=>{
                setShowEditNicknameModal(true)
                }}>Edytuj konto
              </DropdownListItem>
              <DropdownListItem onClick={()=>{
                setShowDeleteAccountModal(true)
              }}>Usuń konto
              </DropdownListItem>
            </DropdownList>
          </DropdownWrapper>
        }
      {showEditNicknameModal &&
      <EditNicknameModal>
        <span>Twój nowy nick:</span>
        <Input type="text" value={newUserName}
          onChange={(e)=>handleNicknameChange(e)} />
        <Input type="submit" value="Zapisz"
          onClick={
            ()=> {
              setUserName(newUserName)
              setShowEditNicknameModal(false)
              setShowAvatarDropdown(false)
            }
          }
         />
      </EditNicknameModal>
      }
      {showDeleteAccountModal &&
        <DeleteAccountModal>
          <>
            <span>Czy na pewno chcesz usunąć konto?</span>
            <DeleteAccountModalButtons>
              <ButtonPrimary
                onClick={
                  ()=> {
                    setShowDeleteAccountModal(false)
                    setShowAvatarDropdown(false)
                  }
                }
                >Tak, usuwam konto
              </ButtonPrimary>
              <ButtonSecondary
                onClick={
                  ()=> {
                    setShowDeleteAccountModal(false)
                    setShowAvatarDropdown(false)
                  }
                }>Anuluj
              </ButtonSecondary>
            </DeleteAccountModalButtons>
          </>
        </DeleteAccountModal>
      }
    </AvatarWrapper>
  )
};

export default Avatar;
