import React, { useContext, useState, useEffect } from 'react';
import OshanContainer from '../component/comman/OshanContainer';
import { useMediaQuery } from '@chakra-ui/react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Category from '../component/HomePage/Category';


const CartPage = (props) => {


    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const [isNotSmallerScreen] = useMediaQuery("(min-width:1024px)");
    return (
        <>
            <Header />
            <OshanContainer>
                {isNotSmallerScreen && <div class="d-flex align-items-center mt-2 mb-4">
                    <h5 class="m-0">Categorys</h5>
                </div>}
                <Category />
            </OshanContainer>
            <Footer />
        </>
    )

}

export default CartPage;