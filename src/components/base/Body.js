import React from 'react';
import styled from 'styled-components';
//import oc from 'open-color';
import {  media } from '../../lib/styles/styleUtil';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Dropdown from '../../components/common/Dropdown';
import Card from '../../components/common/Card';


// 위치 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    top: 70px;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    height: auto;
`;

// 바디의 내용
const BodyContents = styled.div`
    .Array{
        display : flex;
        padding-bottom:40px;
        padding-top:30px;
    }

    .Card-array{
        display : inline-flex;
    }
    width: 2000px;
    display: inline;
    flex-direction: row;
    align-items: center;

    margin-left: 80px;
    margin-top: 80px;


    padding-right: 1rem;
    padding-left: 2rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;





const Body = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <BodyContents>
                    <div className="Array">
                    <Button>신청하기</Button>
                    <Dropdown></Dropdown>
                    </div>      
                    <div className="Card-array">
                            <Link to={"/classdetail"} style={{ textDecoration: 'none', paddingLeft:'30px' }}><Card></Card></Link>
                            <Link to={"/classdetail"} style={{ textDecoration: 'none', paddingLeft:'100px' }}><Card></Card></Link>
                            <Link to={"/classdetail"} style={{ textDecoration: 'none', paddingLeft:'100px' }}><Card></Card></Link>
                    </div>
                    {children}
                </BodyContents>
            </WhiteBackground>
        </Positioner>
        
    );
};

export default Body ;