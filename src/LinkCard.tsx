import React, { PureComponent } from "react";
import Card, { CardStyle, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle, css } from "styled-components";

export interface Props {
    cardStyle: CardTypes;
    className?: string;
    link: string;
    linkText?: string;
    title?: string;
}

export default class LinkCard extends PureComponent<Props, any> {

    render() {
        return (
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle} className={`fd-link-card${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <TypoGraphy className="fd-link-card-h" textStyle='card-h'><h3>{this.props.title ? this.props.title : 'Beheer'}</h3></TypoGraphy>
                    <a href={this.props.link}>{this.props.linkText ? this.props.linkText : 'Beheer uw nieuwsbriefinstellingen'} <i className="icon-chevron-right"/></a>
                </Card>
            </>
        );
    }
}

const styles = css`
.fd-link-card {
    .fd-link-card-h,
    > a {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    > a {
        display: block;
        font-family: 'ProximaNovaRegular', sans-serif;
        border-top: 1px solid rgba(0,0,0,0.1);
        line-height: 1.2em;
        color: #191919;
        .is-read {
            opacity: 0.6;
        }
        &:hover {
            color: #49a4a2;
            .icon-chevron-right {
                color: #49a4a2;
            }
        }
        text-decoration: none;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
    }

    .icon-chevron-right {
        float: right;
        color: #677381;
        font-size: 0.8125rem;
        margin-top: 4px;
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export const LinkCardStyle = css`
${CardStyle}
${getAllTextStyles(['card-h'])}
${styles}
`;
