import React from 'react';
import '@rmwc/ripple/styles';
import { RippleStyled } from '../Ripple/ripple.component';
import { ListStyled } from './list.styles';

export const List = () => {
    return (
        <ListStyled>
            <RippleStyled color="red">
                <div className="first-item">
                    <p>Red</p>
                </div>
            </RippleStyled>
            <RippleStyled color="green">
                <div className="second-item">
                    <p>Green</p>
                </div>
            </RippleStyled>
        </ListStyled>
    );
};
