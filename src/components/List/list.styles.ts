import styled from 'styled-components';

export const ListStyled = styled.ul`
    padding: 0;
    > .first-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
    }
    > .second-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 50px;
    }
`;
