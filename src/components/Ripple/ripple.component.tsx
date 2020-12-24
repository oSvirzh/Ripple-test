import React from 'react';
import styled from 'styled-components';
import { Ripple } from '@rmwc/ripple';
import { IRippleProps } from './ripple.model';

export const RippleStyled = styled(Ripple)`
    &::before,
    &::after {
        background-color: ${(props: IRippleProps) => props.color};
    }
`;
