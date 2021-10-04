import React from 'react';
import styled from 'styled-components';

const ResponseArea = styled.div`
    margin-top: 5px;
    padding: 10px;
    background: rgba(118, 118, 128, 0.24);
    border-radius: 10px;
    width: 343px;
    min-height: 120px;
`
const Span = styled.span`
    color: rgba(235, 235, 245, 0.6);
    margin-left: 10px;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: -0.408px;
`
const Paragraph = styled.p`
    color: #fff;

`
const ResponseWrapper = styled.div`
    margin-top: 23px;
`

const Response = ({text,data}) => {
    return ( 
        <ResponseWrapper>
            <Span>{text}</Span>
            <ResponseArea>
                <Paragraph>{data}</Paragraph>
            </ResponseArea>
        </ResponseWrapper>
        
     );
}

export default Response;