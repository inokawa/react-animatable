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

### Methods

- [play](AnimationFunctionHandle.md#play)
- [reverse](AnimationFunctionHandle.md#reverse)
- [cancel](AnimationFunctionHandle.md#cancel)
- [finish](AnimationFunctionHandle.md#finish)
- [pause](AnimationFunctionHandle.md#pause)
- [setTime](AnimationFunctionHandle.md#settime)
- [setPlaybackRate](AnimationFunctionHandle.md#setplaybackrate)
- [waitFor](AnimationFunctionHandle.md#waitfor)

## Methods

### play

▸ **play**(`...opts`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play). It's similar to GSAP's `play()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | `Args` extends `void` ? [PlayOptions?] : [[`PlayOptionsWithArgs`](../API.md#playoptionswithargs)<`Args`\>] |

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[play](BaseAnimationHandle.md#play)

#### Defined in

[src/react/hooks/useAnimation.ts:34](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L34)

___

### reverse

▸ **reverse**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse). It's similar to GSAP's `reverse()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[reverse](BaseAnimationHandle.md#reverse)

#### Defined in

[src/react/hooks/useAnimation.ts:40](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L40)

___

### cancel

▸ **cancel**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel). It's similar to GSAP's `kill()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[cancel](BaseAnimationHandle.md#cancel)

#### Defined in

[src/react/hooks/useAnimation.ts:44](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L44)

___

### finish

▸ **finish**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[finish](BaseAnimationHandle.md#finish)

#### Defined in

[src/react/hooks/useAnimation.ts:48](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L48)

___

### pause

▸ **pause**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause). It's similar to GSAP's `pause()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[pause](BaseAnimationHandle.md#pause)

#### Defined in

[src/react/hooks/useAnimation.ts:52](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L52)

___

### setTime

▸ **setTime**(`time`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime). It's similar to GSAP's `seek()`.

If you pass function, you can get [endTime](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming#return_value) from its argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| (`endTime`: `number`) => `number` |

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setTime](BaseAnimationHandle.md#settime)

#### Defined in

[src/react/hooks/useAnimation.ts:58](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L58)

___

### setPlaybackRate

▸ **setPlaybackRate**(`rate`): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate). It's similar to GSAP's `timeScale()`.

If you pass function, you can get current [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate) from its argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[setPlaybackRate](BaseAnimationHandle.md#setplaybackrate)

#### Defined in

[src/react/hooks/useAnimation.ts:66](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L66)

___

### waitFor

▸ **waitFor**(`event`): `Promise`<[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>\>

A getter of Promise that will be resolved in specified timing.

- `finished`: resolved when animation is finished and its playback direction is normal.
- `reverseFinished`: resolved when animation is finished and its playback direction is reversed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WaitingAnimationEventName`](../API.md#waitinganimationeventname) |

#### Returns

`Promise`<[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>\>

#### Inherited from

[BaseAnimationHandle](BaseAnimationHandle.md).[waitFor](BaseAnimationHandle.md#waitfor)

#### Defined in

[src/react/hooks/useAnimation.ts:75](https://github.com/inokawa/react-animatable/blob/dd9ec77/src/react/hooks/useAnimation.ts#L75)
