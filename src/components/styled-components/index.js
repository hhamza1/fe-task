import styled from 'styled-components';



export const ScoreBar = styled.div`
    background-color: #FF6000;
    border-radius: 3px;
    height: 6px;
    width: ${props => props.width * 10}%;
`;


export const ScoreBarBg = styled(ScoreBar)`
    width: 100%;
    background-color: #ebebeb;
`;

export const Button = styled.div`
    background: #FF6000;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 12px 0 rgba(255, 96, 0, 0.5);
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    transition: all 0.5s ease-in-out;
    margin-top: 20px;


    &:active {
        box-shadow: none; 
    }
`;


export const WatchListButton = styled(Button)`
        &::after {
            content: '+ add to watchlist'
        }
        & .remove {
            background: #f24545;
        }

        & .remove::after{
            content: '- remove from watchlist'
        }
    }
`;