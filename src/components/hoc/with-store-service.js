import React from 'react';
import { StoreServiceConsumer } from '../store-service-context/';

import DataProvider from '../../services/dataProvider';

const dataProvider = new DataProvider('wss://echo.websocket.org')


const withStoreService = () => (Wrapped) => {
   
    return (props) => {
        return (
            <StoreServiceConsumer>
               {
                   (storeService) => {
                        return (<Wrapped {...props}
                                storeService = { storeService }
                                dataProvider = {dataProvider }
                                />)
                   }
               }
            </StoreServiceConsumer>
        )
    }
}

export default withStoreService