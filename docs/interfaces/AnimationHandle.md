# Interface: AnimationHandle<Args\>

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

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

[src/react/hooks/useAnimation.ts:40](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L40)

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

• **play**: (...`opts`: [`AnimationPlayArgs`](../API.md#animationplayargs)<`Args`\>) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationPlayArgs`](../API.md#animationplayargs)<`Args`\> |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:44](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L44)

___

### reverse

• **reverse**: (...`opts`: [`AnimationReverseArgs`](../API.md#animationreverseargs)<`Args`\>) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationReverseArgs`](../API.md#animationreverseargs)<`Args`\> |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:48](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L48)

___

### cancel

• **cancel**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel).

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:52](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L52)

___

### finish

• **finish**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:56](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L56)

___

### pause

• **pause**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause).

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:60](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L60)

___

### setTime

• **setTime**: (`time`: `number`) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`time`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A setter of Web Animation API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime).

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:64](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L64)

___

### setPlaybackRate

• **setPlaybackRate**: (`rate`: `number` \| (`prevRate`: `number`) => `number`) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`rate`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

A wrapper of Web Animation API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate).

If you pass function, you can get current playbackRate from its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:70](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L70)

___

### waitFor

• **waitFor**: (`event`: [`WaitingAnimationEventName`](../API.md#waitinganimationeventname)) => `Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

#### Type declaration

▸ (`event`): `Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

A getter of Promise that will be resolved in specified timing.

- `finished`: resolved when animation is finished and its playback direction is normal.
- `reverseFinished`: resolved when animation is finished and its playback direction is reversed.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WaitingAnimationEventName`](../API.md#waitinganimationeventname) |

##### Returns

`Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

#### Defined in

[src/react/hooks/useAnimation.ts:79](https://github.com/inokawa/react-animatable/blob/385e0bb/src/react/hooks/useAnimation.ts#L79)
