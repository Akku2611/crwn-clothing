import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return(
        <div className='homepage'>
        <Directory />
        </div>
    )
}
    
       {/* <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1> 
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1> 
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1> 
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1> 
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1> 
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
</div> */}


export default HomePage;