import { PlayOptions, WaitingAnimationEventName } from '../../core/waapi.js';
import { AnimationDefinition } from '../types/index.js';
export type PlayOptionsWithArgs<Args = void> = PlayOptions & {
    args: Args;
};
export interface BaseAnimationHandle<Args = void> {
    /**
     * A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play). It's similar to GSAP's `play()`.
     */
    play(...opts: Args extends void ? [PlayOptions?] : [PlayOptionsWithArgs<Args>]): BaseAnimationHandle<Args>;
    /**
     * A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse). It's similar to GSAP's `reverse()`.
     */
    reverse(): BaseAnimationHandle<Args>;
    /**
     * A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel). It's similar to GSAP's `kill()`.
     */
    cancel(): BaseAnimationHandle<Args>;
    /**
     * A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).
     */
    finish(): BaseAnimationHandle<Args>;
    /**
     * A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause). It's similar to GSAP's `pause()`.
     */
    pause(): BaseAnimationHandle<Args>;
    /**
     * A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime). It's similar to GSAP's `seek()`.
     *
     * If you pass function, you can get [endTime](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming#return_value) from its argument.
     */
    setTime(time: number | ((endTime: number) => number)): BaseAnimationHandle<Args>;
    /**
     * A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate). It's similar to GSAP's `timeScale()`.
     *
     * If you pass function, you can get current [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate) from its argument.
     */
    setPlaybackRate(rate: number | ((prevRate: number) => number)): BaseAnimationHandle<Args>;
    /**
     * A getter of Promise that will be resolved in specified timing.
     *
     * - `finished`: resolved when animation is finished and its playback direction is normal.
     * - `reverseFinished`: resolved when animation is finished and its playback direction is reversed.
     */
    waitFor(event: WaitingAnimationEventName): Promise<BaseAnimationHandle<Args>>;
}
/**
 * Handle of {@link useAnimation}.
 * @typeParam Args - argument type
 */
export interface AnimationHandle<Args = void> extends BaseAnimationHandle<Args> {
    /**
     * You have to pass this callback to ref of element you want to control.
     */
    (ref: Element | null): void;
}
/**
 * A basic hook to use Web Animations API. See {@link AnimationHandle}.
 * @typeParam Args - argument type
 */
export declare const useAnimation: <Args = void>(...args: AnimationDefinition<Args>) => AnimationHandle<Args>;
