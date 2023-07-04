import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function Detail() {
    return (
        <StDetailBox>
            <StLink to={`/`}> 이전으로 </StLink>
            <p> ID : 어쩌고</p>
            <h2> title </h2>
            <p> content </p>
        </StDetailBox>
    );
}

const StDetailBox = styled.div`
    border: 3px solid palevioletred;
    margin: 0 auto;
    width: 500px;
    height: 250px;
    padding: 25px;
    margin-top: 50px;
    background-color: lavenderblush;
`;

const StLink = styled(Link)`
    color: palevioletred;
    font-size: 15pt;
    display: flex;
    justify-content: flex-end;
`;

export default Detail;
