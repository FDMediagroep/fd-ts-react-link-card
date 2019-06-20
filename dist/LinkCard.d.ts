import { CardTypes } from "@fdmg/fd-card";
export interface Props {
    cardStyle: CardTypes;
    className?: string;
    link: string;
    linkText?: string;
    title?: string;
}
export default function LinkCard(props: Props): JSX.Element;
export declare const LinkCardStyle: import("styled-components").FlattenSimpleInterpolation;
