import React from 'react'
import MiniDrawer from "../utils/SideBar/Sidebar";
import ProgressMobileStepper from "../utils/Progress Bars/Progress-bar"
import CustomCard1 from "../utils/Crads/CustomCard1"

const Home = ()=> {
    return (
        <div className='home-wrapper'>
            <MiniDrawer/>
            <ProgressMobileStepper/>
            <CustomCard1/>
        </div>
    )
}

export default Home
