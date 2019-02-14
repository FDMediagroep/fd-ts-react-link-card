import TestRenderer from 'react-test-renderer';
import LinkCard from '../src/LinkCard';
import React from 'react';

describe('LinkCard', () => {
    test('renders correctly', () => {
        let linkCard = TestRenderer.create(<LinkCard cardStyle="default" link='/mijn-nieuws'/>);
        expect(linkCard.toJSON()).toMatchSnapshot();
        linkCard = TestRenderer.create(<LinkCard cardStyle="article" className="class-name" linkText="Beheer uw nieuwsbriefinstellingen" title="Nieuwsbrief" link='/mijn-nieuws'/>);
        expect(linkCard.toJSON()).toMatchSnapshot();
    });
});
