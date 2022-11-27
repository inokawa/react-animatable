# Interface: AnimationFunctionHandle<Args\>

Handle of [useAnimationFunction](../API.md#useanimationfunction).

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

## Hierarchy

- [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

  ↳ **`AnimationFunctionHandle`**

## Table of contents

### Properties

- [play](AnimationFunctionHandle.md#play)
- [reverse](AnimationFunctionHandle.md#reverse)
- [cancel](AnimationFunctionHandle.md#cancel)
- [finish](AnimationFunctionHandle.md#finish)
- [pause](AnimationFunctionHandle.md#pause)
- [setTime](AnimationFunctionHandle.md#settime)
- [setPlaybackRate](AnimationFunctionHandle.md#setplaybackrate)
- [waitFor](AnimationFunctionHandle.md#waitfor)

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

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[play](BaseAnimationHandle.md#play)

#### Defined in

[src/react/hooks/useAnimation.ts:31](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L31)

___

### reverse

• **reverse**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[reverse](BaseAnimationHandle.md#reverse)

#### Defined in

[src/react/hooks/useAnimation.ts:35](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L35)

___

### cancel

• **cancel**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[cancel](BaseAnimationHandle.md#cancel)

#### Defined in

[src/react/hooks/useAnimation.ts:39](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L39)

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

[src/react/hooks/useAnimation.ts:43](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L43)

___

### pause

• **pause**: () => [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause).

##### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[pause](BaseAnimationHandle.md#pause)

#### Defined in

[src/react/hooks/useAnimation.ts:47](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L47)

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

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setTime](BaseAnimationHandle.md#settime)

#### Defined in

[src/react/hooks/useAnimation.ts:51](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L51)

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

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setPlaybackRate](BaseAnimationHandle.md#setplaybackrate)

#### Defined in

[src/react/hooks/useAnimation.ts:57](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L57)

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

[src/react/hooks/useAnimation.ts:66](https://github.com/inokawa/react-animatable/blob/d75db13/src/react/hooks/useAnimation.ts#L66)
