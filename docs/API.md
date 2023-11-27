# API

## Table of contents

### Functions

- [TransitionGroup](API.md#transitiongroup)
- [useAnimation](API.md#useanimation)
- [useAnimationFunction](API.md#useanimationfunction)
- [useTransitionAnimation](API.md#usetransitionanimation)
- [useScrollTimeline](API.md#usescrolltimeline)
- [useViewTimeline](API.md#useviewtimeline)

### Interfaces

- [TypedKeyframeEffectOptions](interfaces/TypedKeyframeEffectOptions.md)
- [TransitionGroupProps](interfaces/TransitionGroupProps.md)
- [BaseAnimationHandle](interfaces/BaseAnimationHandle.md)
- [AnimationHandle](interfaces/AnimationHandle.md)
- [AnimationFunctionHandle](interfaces/AnimationFunctionHandle.md)
- [AnimationFunctionOptions](interfaces/AnimationFunctionOptions.md)
- [TransitionAnimationHandle](interfaces/TransitionAnimationHandle.md)
- [TransitionAnimationOptions](interfaces/TransitionAnimationOptions.md)
- [ScrollTimelineOpts](interfaces/ScrollTimelineOpts.md)
- [ViewTimelineOpts](interfaces/ViewTimelineOpts.md)
- [AnimationOptions](interfaces/AnimationOptions.md)
- [TimelineDefinition](interfaces/TimelineDefinition.md)

### Type Aliases

- [TypedKeyframe](API.md#typedkeyframe)
- [TypedEasing](API.md#typedeasing)
- [GetKeyframeFunction](API.md#getkeyframefunction)
- [AnimatableCSSProperties](API.md#animatablecssproperties)
- [PlayOptions](API.md#playoptions)
- [WaitingAnimationEventName](API.md#waitinganimationeventname)
- [PlayOptionsWithArgs](API.md#playoptionswithargs)
- [ComputedTimingContext](API.md#computedtimingcontext)
- [AnimationFunction](API.md#animationfunction)
- [TransitionAnimationDefinition](API.md#transitionanimationdefinition)
- [AnimationDefinition](API.md#animationdefinition)
- [ScrollTimelineAxis](API.md#scrolltimelineaxis)
- [ViewTimelineInset](API.md#viewtimelineinset)

## Functions

### TransitionGroup

▸ **TransitionGroup**(`«destructured»`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TransitionGroupProps`](interfaces/TransitionGroupProps.md) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/react/components/TransitionGroup.tsx:74](https://github.com/inokawa/react-animatable/blob/b843664/src/react/components/TransitionGroup.tsx#L74)

___

### useAnimation

▸ **useAnimation**<`Args`\>(`...args`): [`AnimationHandle`](interfaces/AnimationHandle.md)<`Args`\>

A basic hook to use Web Animations API. See [AnimationHandle](interfaces/AnimationHandle.md).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`AnimationDefinition`](API.md#animationdefinition)<`Args`\> |

#### Returns

[`AnimationHandle`](interfaces/AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:104](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useAnimation.ts#L104)

___

### useAnimationFunction

▸ **useAnimationFunction**<`Args`\>(`onUpdate`, `options?`): [`AnimationFunctionHandle`](interfaces/AnimationFunctionHandle.md)<`Args`\>

Same as [useAnimation](API.md#useanimation), but it drives function not React element. See [AnimationFunctionHandle](interfaces/AnimationFunctionHandle.md).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onUpdate` | [`AnimationFunction`](API.md#animationfunction)<`Args`\> |
| `options?` | [`AnimationFunctionOptions`](interfaces/AnimationFunctionOptions.md) |

#### Returns

[`AnimationFunctionHandle`](interfaces/AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:69](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useAnimationFunction.ts#L69)

___

### useTransitionAnimation

▸ **useTransitionAnimation**(`keyframes`): [`TransitionAnimationHandle`](interfaces/TransitionAnimationHandle.md)

A hook to compose multiple [useAnimation](API.md#useanimation) and plays them when element enter/update/exits.
This hook must be used under [TransitionGroup](API.md#transitiongroup) component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | `Object` |
| `keyframes.enter?` | [`TransitionAnimationDefinition`](API.md#transitionanimationdefinition) |
| `keyframes.update?` | [`TransitionAnimationDefinition`](API.md#transitionanimationdefinition) |
| `keyframes.exit?` | [`TransitionAnimationDefinition`](API.md#transitionanimationdefinition) |

#### Returns

[`TransitionAnimationHandle`](interfaces/TransitionAnimationHandle.md)

#### Defined in

[src/react/hooks/useTransitionAnimation.ts:38](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useTransitionAnimation.ts#L38)

___

### useScrollTimeline

▸ **useScrollTimeline**(`opts?`): [`TimelineDefinition`](interfaces/TimelineDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ScrollTimelineOpts`](interfaces/ScrollTimelineOpts.md) |

#### Returns

[`TimelineDefinition`](interfaces/TimelineDefinition.md)

#### Defined in

[src/react/hooks/useScrollTimeline.ts:11](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useScrollTimeline.ts#L11)

___

### useViewTimeline

▸ **useViewTimeline**(`opts?`): [`TimelineDefinition`](interfaces/TimelineDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ViewTimelineOpts`](interfaces/ViewTimelineOpts.md) |

#### Returns

[`TimelineDefinition`](interfaces/TimelineDefinition.md)

#### Defined in

[src/react/hooks/useViewTimeline.ts:16](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useViewTimeline.ts#L16)

## Type Aliases

### TypedKeyframe

Ƭ **TypedKeyframe**: `Pick`<`Keyframe`, ``"composite"`` \| ``"easing"`` \| ``"offset"``\> & { `[key: `--${string}`]`: `string` \| `number`;  } & [`AnimatableCSSProperties`](API.md#animatablecssproperties)

Strictly typed [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

#### Defined in

[src/core/waapi.ts:17](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L17)

___

### TypedEasing

Ƭ **TypedEasing**: `Exclude`<`CSSProperties`[``"animationTimingFunction"``], `CSSProperties`[``"all"``] \| `undefined`\>

#### Defined in

[src/core/waapi.ts:22](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L22)

___

### GetKeyframeFunction

Ƭ **GetKeyframeFunction**<`Args`\>: `Args` extends `void` ? (`prev`: `CSSStyleDeclaration`) => [`TypedKeyframe`](API.md#typedkeyframe)[] : (`prev`: `CSSStyleDeclaration`, `args`: `Args`) => [`TypedKeyframe`](API.md#typedkeyframe)[]

A function to define keyframe dynamically
- `prev`: current style
- `args`: any argument passed from play

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/core/waapi.ts:32](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L32)

___

### AnimatableCSSProperties

Ƭ **AnimatableCSSProperties**: `Omit`<`CSSProperties`, ``"offset"`` \| ``"float"``\> & { `cssOffset?`: `CSSProperties`[``"offset"``] ; `cssFloat?`: `CSSProperties`[``"float"``] ; `d?`: `string`  }

#### Defined in

[src/core/waapi.ts:4](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L4)

___

### PlayOptions

Ƭ **PlayOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `restart?` | `boolean` | If true, plays from the start. It's similar to GSAP's `restart()`. |

#### Defined in

[src/core/waapi.ts:79](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L79)

___

### WaitingAnimationEventName

Ƭ **WaitingAnimationEventName**: ``"finish"`` \| ``"reverseFinish"``

#### Defined in

[src/core/waapi.ts:150](https://github.com/inokawa/react-animatable/blob/b843664/src/core/waapi.ts#L150)

___

### PlayOptionsWithArgs

Ƭ **PlayOptionsWithArgs**<`Args`\>: [`PlayOptions`](API.md#playoptions) & { `args`: `Args`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimation.ts:38](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useAnimation.ts#L38)

___

### ComputedTimingContext

Ƭ **ComputedTimingContext**: `Required`<{ [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]\> }\>

Non nullable [ComputedEffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming)

#### Defined in

[src/react/hooks/useAnimationFunction.ts:32](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useAnimationFunction.ts#L32)

___

### AnimationFunction

Ƭ **AnimationFunction**<`Args`\>: `Args` extends `void` ? (`ctx`: [`ComputedTimingContext`](API.md#computedtimingcontext)) => `void` : (`ctx`: [`ComputedTimingContext`](API.md#computedtimingcontext), `args`: `Args`) => `void`

An argument of [useAnimationFunction](API.md#useanimationfunction).
In this callback you can update any state or ref in JS.
- `ctx`: current animation state
- `args`: any argument passed from play

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimationFunction.ts:42](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useAnimationFunction.ts#L42)

___

### TransitionAnimationDefinition

Ƭ **TransitionAnimationDefinition**: [keyframe: TypedKeyframe \| TypedKeyframe[] \| GetKeyframeFunction, options?: TransitionAnimationOptions]

#### Defined in

[src/react/hooks/useTransitionAnimation.ts:28](https://github.com/inokawa/react-animatable/blob/b843664/src/react/hooks/useTransitionAnimation.ts#L28)

___

### AnimationDefinition

Ƭ **AnimationDefinition**<`Args`\>: [keyframe: TypedKeyframe \| TypedKeyframe[] \| GetKeyframeFunction<Args\>, options?: AnimationOptions]

#### Type parameters

| Name |
| :------ |
| `Args` |

#### Defined in

[src/react/types/index.ts:12](https://github.com/inokawa/react-animatable/blob/b843664/src/react/types/index.ts#L12)

___

### ScrollTimelineAxis

Ƭ **ScrollTimelineAxis**: ``"block"`` \| ``"inline"`` \| ``"y"`` \| ``"x"``

#### Defined in

[src/react/types/index.ts:29](https://github.com/inokawa/react-animatable/blob/b843664/src/react/types/index.ts#L29)

___

### ViewTimelineInset

Ƭ **ViewTimelineInset**: ``"auto"`` \| `string` & {}

#### Defined in

[src/react/types/index.ts:31](https://github.com/inokawa/react-animatable/blob/b843664/src/react/types/index.ts#L31)
