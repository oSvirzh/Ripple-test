import styled from 'styled-components';

export const ListStyled = styled.ul`
    padding: 0;
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
    }
    .item--second {
        width: 150px;
        height: 50px;
    }
    .item--rounded {
        border-radius: 100%;
    }
`;
