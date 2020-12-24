import React from 'react';
import '@rmwc/ripple/styles';
import { RippleStyled } from '../Ripple/ripple.component';
import { ListStyled } from './list.styles';

export const List = () => {
    return (
        <ListStyled>
            <RippleStyled>
                <div className="item">
                    <p>Red</p>
                </div>
            </RippleStyled>
            <RippleStyled color="green">
                <div className="item item--second">
                    <p>Green</p>
                </div>
            </RippleStyled>
            <RippleStyled color="orange">
                <div className="item item--rounded">
                    <p>Orange rounded</p>
                </div>
            </RippleStyled>
            <RippleStyled unbounded color="aqua">
                <div className="item">
                    <p>Aqua unbounded</p>
                </div>
            </RippleStyled>
        </ListStyled>
    );
};
