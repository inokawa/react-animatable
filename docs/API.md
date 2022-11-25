# API

## Table of contents

### Type Aliases

- [TypedKeyframe](API.md#typedkeyframe)
- [TypedEasing](API.md#typedeasing)
- [GetKeyframeFunction](API.md#getkeyframefunction)
- [AnimatableCSSProperties](API.md#animatablecssproperties)
- [PlayOptions](API.md#playoptions)
- [ReverseOptions](API.md#reverseoptions)
- [WaitingAnimationEventName](API.md#waitinganimationeventname)
- [AnimationPlayArgs](API.md#animationplayargs)
- [AnimationReverseArgs](API.md#animationreverseargs)
- [AnimationFunctionPlayArgs](API.md#animationfunctionplayargs)
- [AnimationFunctionReverseArgs](API.md#animationfunctionreverseargs)
- [ComputedTimingContext](API.md#computedtimingcontext)
- [AnimationFunction](API.md#animationfunction)
- [TransitionAnimationDefinition](API.md#transitionanimationdefinition)

### Interfaces

- [AnimationOptions](interfaces/AnimationOptions.md)
- [TransitionGroupProps](interfaces/TransitionGroupProps.md)
- [AnimationHandle](interfaces/AnimationHandle.md)
- [AnimationFunctionHandle](interfaces/AnimationFunctionHandle.md)
- [TransitionAnimationHandle](interfaces/TransitionAnimationHandle.md)

### Functions

- [TransitionGroup](API.md#transitiongroup)
- [useAnimation](API.md#useanimation)
- [useAnimationFunction](API.md#useanimationfunction)
- [useTransitionAnimation](API.md#usetransitionanimation)

## Type Aliases

### TypedKeyframe

Ƭ **TypedKeyframe**: `Pick`<`Keyframe`, ``"composite"`` \| ``"easing"`` \| ``"offset"``\> & [`AnimatableCSSProperties`](API.md#animatablecssproperties)

Strictly typed [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

#### Defined in

[src/core/waapi.ts:17](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L17)

___

### TypedEasing

Ƭ **TypedEasing**: `NonNullable`<`Exclude`<`CSSProperties`[``"animationTimingFunction"``], `CSSProperties`[``"all"``]\>\>

#### Defined in

[src/core/waapi.ts:20](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L20)

___

### GetKeyframeFunction

Ƭ **GetKeyframeFunction**<`Args`\>: `Args` extends `void` ? (`prev`: `CSSStyleDeclaration`) => [`TypedKeyframe`](API.md#typedkeyframe)[] : (`prev`: `CSSStyleDeclaration`, `args`: `Args`) => [`TypedKeyframe`](API.md#typedkeyframe)[]

A function to define keyframe dynamically

**`Param`**

current style

**`Param`**

any argument passed from play

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/core/waapi.ts:29](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L29)

___

### AnimatableCSSProperties

Ƭ **AnimatableCSSProperties**: `Omit`<`CSSProperties`, ``"offset"`` \| ``"float"``\> & { `cssOffset?`: `CSSProperties`[``"offset"``] ; `cssFloat?`: `CSSProperties`[``"float"``] ; `d?`: `string`  }

#### Defined in

[src/core/waapi.ts:4](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L4)

___

### PlayOptions

Ƭ **PlayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reset?` | `boolean` |

#### Defined in

[src/core/waapi.ts:83](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L83)

___

### ReverseOptions

Ƭ **ReverseOptions**: `Object`

#### Defined in

[src/core/waapi.ts:85](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L85)

___

### WaitingAnimationEventName

Ƭ **WaitingAnimationEventName**: ``"finish"`` \| ``"reverseFinish"``

#### Defined in

[src/core/waapi.ts:140](https://github.com/inokawa/react-animatable/blob/385e0bb/src/core/waapi.ts#L140)

___

### AnimationPlayArgs

Ƭ **AnimationPlayArgs**<`Args`\>: `Args` extends `void` ? [PlayOptions?] : [`Expand`<[`PlayOptions`](API.md#playoptions) & `Args` extends `void` ? {} : { `args`: `Args`  }\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimation.ts:24](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L24)

___

### AnimationReverseArgs

Ƭ **AnimationReverseArgs**<`Args`\>: `Args` extends `void` ? [ReverseOptions?] : [`Expand`<[`ReverseOptions`](API.md#reverseoptions) & `Args` extends `void` ? {} : { `args`: `Args`  }\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimation.ts:28](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L28)

___

### AnimationFunctionPlayArgs

Ƭ **AnimationFunctionPlayArgs**<`Args`\>: `Args` extends `void` ? [PlayOptions?] : [`Expand`<[`PlayOptions`](API.md#playoptions) & `Args` extends `void` ? {} : { `args`: `Args`  }\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimationFunction.ts:21](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimationFunction.ts#L21)

___

### AnimationFunctionReverseArgs

Ƭ **AnimationFunctionReverseArgs**<`Args`\>: `Args` extends `void` ? [ReverseOptions?] : [`Expand`<[`ReverseOptions`](API.md#reverseoptions) & `Args` extends `void` ? {} : { `args`: `Args`  }\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimationFunction.ts:25](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimationFunction.ts#L25)

___

### ComputedTimingContext

Ƭ **ComputedTimingContext**: `Required`<{ [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]\> }\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:52](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimationFunction.ts#L52)

___

### AnimationFunction

Ƭ **AnimationFunction**<`Args`\>: `Args` extends `void` ? (`ctx`: [`ComputedTimingContext`](API.md#computedtimingcontext)) => `void` : (`ctx`: [`ComputedTimingContext`](API.md#computedtimingcontext), `args`: `Args`) => `void`

An argument of [useAnimationFunction](API.md#useanimationfunction). See [AnimationFunctionHandle](interfaces/AnimationFunctionHandle.md).
In this callback you can update any state or ref in JS.

**`Param`**

current animation state

**`Param`**

any argument passed from play

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

#### Defined in

[src/react/hooks/useAnimationFunction.ts:64](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimationFunction.ts#L64)

___

### TransitionAnimationDefinition

Ƭ **TransitionAnimationDefinition**: [keyframe: TypedKeyframe \| TypedKeyframe[] \| GetKeyframeFunction, options?: AnimationOptions]

#### Defined in

[src/react/hooks/useTransitionAnimation.ts:23](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useTransitionAnimation.ts#L23)

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

[src/react/components/TransitionGroup.tsx:74](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/components/TransitionGroup.tsx#L74)

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

[src/react/hooks/useAnimation.ts:86](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L86)

___

### useAnimationFunction

▸ **useAnimationFunction**<`Args`\>(`onUpdate`, `options?`): [`AnimationFunctionHandle`](interfaces/AnimationFunctionHandle.md)<`Args`\>

Same as [useAnimationFunction](API.md#useanimationfunction), but it drives function not React element.

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

[src/react/hooks/useAnimationFunction.ts:91](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimationFunction.ts#L91)

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

[src/react/hooks/useTransitionAnimation.ts:33](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useTransitionAnimation.ts#L33)
