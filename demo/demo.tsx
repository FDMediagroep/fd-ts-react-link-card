import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import LinkCard from '../src/LinkCard';
import uniqid from 'uniqid';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1ded0;
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div>
            <LinkCard
                link="/mijn-nieuws"
                linkText="Beheer uw nieuwsbriefinstellingen"
                title="Nieuwsbrief"
            />
        </div>
    </>,
    document.getElementById('root'));
