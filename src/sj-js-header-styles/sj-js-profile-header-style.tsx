import styled from 'styled-components'

export const ProfileHeader = styled.div`
  border: red solid;
  display: flex;
  flex-direction: row;
  padding: 6px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .profile-picture{
    height: 4em;
  }
  .profile-header-title {
    font-family: 'Times New Roman', Times, serif;
    font-weight: bolder;
  }
  .profile-header-menu-icon{
    padding: 4px;
    margin-right: 12px;
    font-size: 34px;
    align-items: center;
    border-radius: 8%;
    
  }
  .profile-header-menu-icon:hover{
    cursor: pointer;
    background-color: rgba(205, 199, 202, 0.8);
  }
  
`