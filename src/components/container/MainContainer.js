import React from 'react'
import { MainBox } from '../presenter/MainPresenter'
import InputContainer from './InputContainer'
import ListContainer from './ListContainer'


function MainContainer() {
    return  (
        <MainBox>
            <ListContainer />
            <InputContainer />
        </MainBox>
    )
}

export default MainContainer