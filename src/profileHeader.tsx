'use client'
import swarajProfilePicture from './assets/Profile_Photo.png'
import { ProfileHeader } from './sj-js-header-styles/sj-js-profile-header-style'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () =>{
    const authorName = 'Swaraj Trivedi'
    return(
        <>
            <ProfileHeader>
                <img src={swarajProfilePicture} className="profile-picture" alt="Profile Picture: Swaraj Trivedi" />
                <h1  className='profile-header-title'>{authorName}</h1> 
                <MenuIcon className='profile-header-menu-icon' htmlColor='grey'/>
            </ProfileHeader>
        </>
    )
}
export default Header