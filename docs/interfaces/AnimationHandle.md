# Interface: AnimationHandle<Args\>

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

## Hierarchy

- [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

  ↳ **`AnimationHandle`**

## Callable

### AnimationHandle

▸ **AnimationHandle**(`ref`): `void`

You have to pass this callback to ref of element you want to control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ``null`` \| `Element` |

#### Returns

`void`

#### Defined in

[src/react/hooks/useAnimation.ts:84](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L84)

## Table of contents

### Properties

- [play](AnimationHandle.md#play)
- [reverse](AnimationHandle.md#reverse)
- [cancel](AnimationHandle.md#cancel)
- [finish](AnimationHandle.md#finish)
- [pause](AnimationHandle.md#pause)
- [setTime](AnimationHandle.md#settime)
- [setPlaybackRate](AnimationHandle.md#setplaybackrate)
- [waitFor](AnimationHandle.md#waitfor)

## Properties

### play

• **play**: (...`opts`: [`PlayArgs`](../API.md#playargs)<`Args`\>) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play). It's similar to GSAP's `play()`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`PlayArgs`](../API.md#playargs)<`Args`\> |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[play](BaseAnimationHandle.md#play)

#### Defined in

[src/react/hooks/useAnimation.ts:31](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L31)

___

### reverse

• **reverse**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse). It's similar to GSAP's `reverse()`.

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[reverse](BaseAnimationHandle.md#reverse)

#### Defined in

[src/react/hooks/useAnimation.ts:35](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L35)

___

### cancel

• **cancel**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel). It's similar to GSAP's `kill()`.

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[cancel](BaseAnimationHandle.md#cancel)

#### Defined in

[src/react/hooks/useAnimation.ts:39](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L39)

___

### finish

• **finish**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[finish](BaseAnimationHandle.md#finish)

#### Defined in

[src/react/hooks/useAnimation.ts:43](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L43)

___

### pause

• **pause**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause). It's similar to GSAP's `pause()`.

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[pause](BaseAnimationHandle.md#pause)

#### Defined in

[src/react/hooks/useAnimation.ts:47](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L47)

___

### setTime

• **setTime**: (`time`: `number` \| (`endTime`: `number`) => `number`) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`time`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime). It's similar to GSAP's `seek()`.

If you pass function, you can get [endTime](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming#return_value) from its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| (`endTime`: `number`) => `number` |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setTime](BaseAnimationHandle.md#settime)

#### Defined in

[src/react/hooks/useAnimation.ts:53](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L53)

___

### setPlaybackRate

• **setPlaybackRate**: (`rate`: `number` \| (`prevRate`: `number`) => `number`) => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`rate`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate). It's similar to GSAP's `timeScale()`.

If you pass function, you can get current [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate) from its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setPlaybackRate](BaseAnimationHandle.md#setplaybackrate)

#### Defined in

[src/react/hooks/useAnimation.ts:61](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L61)

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

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[waitFor](BaseAnimationHandle.md#waitfor)

#### Defined in

[src/react/hooks/useAnimation.ts:70](https://github.com/inokawa/react-animatable/blob/920256c/src/react/hooks/useAnimation.ts#L70)
