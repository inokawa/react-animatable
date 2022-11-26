# Interface: BaseAnimationHandle<Args\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `void` |

## Hierarchy

- **`BaseAnimationHandle`**

  ↳ [`AnimationHandle`](AnimationHandle.md)

  ↳ [`AnimationFunctionHandle`](AnimationFunctionHandle.md)

## Table of contents

### Properties

- [play](BaseAnimationHandle.md#play)
- [reverse](BaseAnimationHandle.md#reverse)
- [cancel](BaseAnimationHandle.md#cancel)
- [finish](BaseAnimationHandle.md#finish)
- [pause](BaseAnimationHandle.md#pause)
- [setTime](BaseAnimationHandle.md#settime)
- [setPlaybackRate](BaseAnimationHandle.md#setplaybackrate)
- [waitFor](BaseAnimationHandle.md#waitfor)

## Properties

### play

• **play**: (...`opts`: [`PlayArgs`](../API.md#playargs)<`Args`\>) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`PlayArgs`](../API.md#playargs)<`Args`\> |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:36](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L36)

___

### reverse

• **reverse**: (...`opts`: [`ReverseArgs`](../API.md#reverseargs)<`Args`\>) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`ReverseArgs`](../API.md#reverseargs)<`Args`\> |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:40](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L40)

___

### cancel

• **cancel**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:44](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L44)

___

### finish

• **finish**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:48](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L48)

___

### pause

• **pause**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:52](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L52)

___

### setTime

• **setTime**: (`time`: `number`) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`time`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime).

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:56](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L56)

___

### setPlaybackRate

• **setPlaybackRate**: (`rate`: `number` \| (`prevRate`: `number`) => `number`) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`rate`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate).

If you pass function, you can get current playbackRate from its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:62](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L62)

___

### waitFor

• **waitFor**: (`event`: [`WaitingAnimationEventName`](../API.md#waitinganimationeventname)) => `Promise`<[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>\>

#### Type declaration

▸ (`event`): `Promise`<[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>\>

A getter of Promise that will be resolved in specified timing.

- `finished`: resolved when animation is finished and its playback direction is normal.
- `reverseFinished`: resolved when animation is finished and its playback direction is reversed.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WaitingAnimationEventName`](../API.md#waitinganimationeventname) |

##### Returns

`Promise`<[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>\>

#### Defined in

[src/react/hooks/useAnimation.ts:71](https://github.com/inokawa/react-animatable/blob/4002988/src/react/hooks/useAnimation.ts#L71)
