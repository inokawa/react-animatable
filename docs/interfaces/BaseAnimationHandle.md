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

### Methods

- [play](BaseAnimationHandle.md#play)
- [reverse](BaseAnimationHandle.md#reverse)
- [cancel](BaseAnimationHandle.md#cancel)
- [finish](BaseAnimationHandle.md#finish)
- [pause](BaseAnimationHandle.md#pause)
- [setTime](BaseAnimationHandle.md#settime)
- [setPlaybackRate](BaseAnimationHandle.md#setplaybackrate)
- [waitFor](BaseAnimationHandle.md#waitfor)

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

#### Defined in

[src/react/hooks/useAnimation.ts:35](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L35)

___

### reverse

▸ **reverse**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse). It's similar to GSAP's `reverse()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:41](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L41)

___

### cancel

▸ **cancel**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel). It's similar to GSAP's `kill()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:45](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L45)

___

### finish

▸ **finish**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:49](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L49)

___

### pause

▸ **pause**(): [`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause). It's similar to GSAP's `pause()`.

#### Returns

[`BaseAnimationHandle`](BaseAnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:53](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L53)

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

#### Defined in

[src/react/hooks/useAnimation.ts:59](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L59)

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

#### Defined in

[src/react/hooks/useAnimation.ts:67](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L67)

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

#### Defined in

[src/react/hooks/useAnimation.ts:76](https://github.com/inokawa/react-animatable/blob/23c2c4a/src/react/hooks/useAnimation.ts#L76)
