import { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
export interface Props {
    cardStyle: CardTypes;
    className?: string;
    link: string;
    linkText?: string;
    title?: string;
}
export default class LinkCard extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare const LinkCardStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;