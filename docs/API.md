# API

## Table of contents

### Functions

- [TransitionGroup](API.md#transitiongroup)
- [useAnimation](API.md#useanimation)
- [useAnimationFunction](API.md#useanimationfunction)
- [useTransitionAnimation](API.md#usetransitionanimation)

### Interfaces

- [AnimationOptions](interfaces/AnimationOptions.md)
- [TransitionGroupProps](interfaces/TransitionGroupProps.md)
- [BaseAnimationHandle](interfaces/BaseAnimationHandle.md)
- [AnimationHandle](interfaces/AnimationHandle.md)
- [AnimationFunctionHandle](interfaces/AnimationFunctionHandle.md)
- [TransitionAnimationHandle](interfaces/TransitionAnimationHandle.md)

### Type Aliases

- [TypedKeyframe](API.md#typedkeyframe)
- [TypedEasing](API.md#typedeasing)
- [GetKeyframeFunction](API.md#getkeyframefunction)
- [AnimatableCSSProperties](API.md#animatablecssproperties)
- [PlayOptions](API.md#playoptions)
- [WaitingAnimationEventName](API.md#waitinganimationeventname)
- [PlayArgs](API.md#playargs)
- [ComputedTimingContext](API.md#computedtimingcontext)
- [AnimationFunction](API.md#animationfunction)
- [TransitionAnimationDefinition](API.md#transitionanimationdefinition)

## Functions

### TransitionGroup

▸ **TransitionGroup**(`__namedParameters`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`TransitionGroupProps`](interfaces/TransitionGroupProps.md) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/react/components/TransitionGroup.tsx:74](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/components/TransitionGroup.tsx#L74)

___

### useAnimation

▸ **useAnimation**<`Args`\>(`keyframe`, `options?`): [`AnimationHandle`](interfaces/AnimationHandle.md)<`Args`\>

A basic hook to use Web Animations API. See [AnimationHandle](interfaces/AnimationHandle.md).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframe` | [`TypedKeyframe`](API.md#typedkeyframe) \| [`TypedKeyframe`](API.md#typedkeyframe)[] \| [`GetKeyframeFunction`](API.md#getkeyframefunction)<`Args`\> |
| `options?` | [`AnimationOptions`](interfaces/AnimationOptions.md) |

#### Returns

[`AnimationHandle`](interfaces/AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:91](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useAnimation.ts#L91)

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
| `options?` | [`AnimationOptions`](interfaces/AnimationOptions.md) |

#### Returns

[`AnimationFunctionHandle`](interfaces/AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:66](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useAnimationFunction.ts#L66)

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

[src/react/hooks/useTransitionAnimation.ts:33](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useTransitionAnimation.ts#L33)

## Type Aliases

### TypedKeyframe

Ƭ **TypedKeyframe**: `Pick`<`Keyframe`, ``"composite"`` \| ``"easing"`` \| ``"offset"``\> & { `[key: `--${string}`]`: `string` \| `number`;  } & [`AnimatableCSSProperties`](API.md#animatablecssproperties)

Strictly typed [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

#### Defined in

[src/core/waapi.ts:17](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L17)

___

### TypedEasing

Ƭ **TypedEasing**: `NonNullable`<`Exclude`<`CSSProperties`[``"animationTimingFunction"``], `CSSProperties`[``"all"``]\>\>

#### Defined in

[src/core/waapi.ts:22](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L22)

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

[src/core/waapi.ts:31](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L31)

___

### AnimatableCSSProperties

Ƭ **AnimatableCSSProperties**: `Omit`<`CSSProperties`, ``"offset"`` \| ``"float"``\> & { `cssOffset?`: `CSSProperties`[``"offset"``] ; `cssFloat?`: `CSSProperties`[``"float"``] ; `d?`: `string`  }

#### Defined in

[src/core/waapi.ts:4](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L4)

___

### PlayOptions

Ƭ **PlayOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `restart?` | `boolean` | If true, plays from the start. It's similar to GSAP's `restart()`. |

#### Defined in

[src/core/waapi.ts:85](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L85)

___

### WaitingAnimationEventName

Ƭ **WaitingAnimationEventName**: ``"finish"`` \| ``"reverseFinish"``

#### Defined in

[src/core/waapi.ts:156](https://github.com/inokawa/react-animatable/blob/3724fbf/src/core/waapi.ts#L156)

___

### PlayArgs

Ƭ **PlayArgs**<`Args`\>: `Args` extends `void` ? [PlayOptions?] : [`Expand`<[`PlayOptions`](API.md#playoptions) & `Args` extends `void` ? {} : { `args`: `Args`  }\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimation.ts:23](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useAnimation.ts#L23)

___

### ComputedTimingContext

Ƭ **ComputedTimingContext**: `Required`<{ [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]\> }\>

Non nullable [ComputedEffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming)

#### Defined in

[src/react/hooks/useAnimationFunction.ts:29](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useAnimationFunction.ts#L29)

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

[src/react/hooks/useAnimationFunction.ts:39](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useAnimationFunction.ts#L39)

___

### TransitionAnimationDefinition

Ƭ **TransitionAnimationDefinition**: [keyframe: TypedKeyframe \| TypedKeyframe[] \| GetKeyframeFunction, options?: AnimationOptions]

#### Defined in

[src/react/hooks/useTransitionAnimation.ts:23](https://github.com/inokawa/react-animatable/blob/3724fbf/src/react/hooks/useTransitionAnimation.ts#L23)