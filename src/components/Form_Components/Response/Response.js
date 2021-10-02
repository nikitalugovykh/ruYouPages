import React from 'react';
import styled from 'styled-components';

const ResponseArea = styled.div`
    margin-top: 5px;
    background: rgba(118, 118, 128, 0.24);
    border-radius: 10px;
    width: 343px;
    min-height: 120px;
`
const Span = styled.span`
    color: rgba(235, 235, 245, 0.6);
    margin-left: 10px;
`
const ResponseWrapper = styled.div`
    margin-top: 23px;
`

const Response = ({text}) => {
    return ( 
        <ResponseWrapper>
            <Span>{text}</Span>
            <ResponseArea/>
        </ResponseWrapper>
        
     );
}

export default Response;