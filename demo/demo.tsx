import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import LinkCard from '../src/LinkCard';

const GlobalStyles = createGlobalStyle`
    .content-area {
        padding: 1rem 0;
        &.overview {
            background-color: #f1ded0;
        }
        &.persoonlijk {
            background-color: #ffffff;
        }
    }
    div {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LinkCard
            cardStyle="default"
            link="/mijn-nieuws"
            linkText="Beheer uw nieuwsbriefinstellingen"
            title="Nieuwsbrief"
        />
    </div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LinkCard
            cardStyle="article"
            link="/mijn-nieuws"
            linkText="Beheer uw nieuwsbriefinstellingen"
            title="Nieuwsbrief"
        />
    </div>
</>,
document.querySelector('.article aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div>
        <LinkCard
            cardStyle="persoonlijk"
            link="/mijn-nieuws"
            linkText="Beheer uw nieuwsbriefinstellingen"
            title="Nieuwsbrief"
        />
    </div>
</>,
document.querySelector('.persoonlijk aside'));
