import React from 'react';
import {Anchor, grommet, Grommet, Header, Nav} from 'grommet';

const HeaderBar = () => {
    return (
        <Grommet theme={grommet}>
            <Header>
                <Nav direction="row">
                    <Anchor label="Home" href="/" />
                </Nav>
            </Header>
        </Grommet>
    )
};

export default HeaderBar