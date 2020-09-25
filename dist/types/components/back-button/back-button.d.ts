import { ComponentInterface } from '../../stencil-public-runtime';
import { AnimationBuilder, Color } from '../../interface';
import { ButtonInterface } from '../../utils/element-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML button element that wraps all child elements.
 * @part icon - The back button icon (uses ion-icon).
 * @part text - The back button text.
 */
export declare class BackButton implements ComponentInterface, ButtonInterface {
    el: HTMLElement;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * The url to navigate back to by default when there is no history.
     */
    defaultHref?: string;
    /**
     * If `true`, the user cannot interact with the button.
     */
    disabled: boolean;
    /**
     * The icon name to use for the back button.
     */
    icon?: string | null;
    /**
     * The text to display in the back button.
     */
    text?: string | null;
    /**
     * The type of the button.
     */
    type: 'submit' | 'reset' | 'button';
    /**
     * When using a router, it specifies the transition animation when navigating to
     * another page.
     */
    routerAnimation: AnimationBuilder | undefined;
    componentWillLoad(): void;
    get backButtonIcon(): any;
    get backButtonText(): any;
    get hasIconOnly(): boolean;
    get rippleType(): "bounded" | "unbounded";
    private onClick;
    render(): any;
}
