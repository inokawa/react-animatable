# Interface: AnimationHandle<Args\>

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

## Callable

### AnimationHandle

▸ **AnimationHandle**(`ref`): `void`

Handle of [useAnimation](../API.md#useanimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ``null`` \| `Element` |

#### Returns

`void`

#### Defined in

[src/react/hooks/useAnimation.ts:37](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L37)

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

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationPlayArgs`](../API.md#animationplayargs)<`Args`\> |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:38](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L38)

___

### reverse

• **reverse**: (...`opts`: [`AnimationReverseArgs`](../API.md#animationreverseargs)<`Args`\>) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationReverseArgs`](../API.md#animationreverseargs)<`Args`\> |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:39](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L39)

___

### cancel

• **cancel**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:40](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L40)

___

### finish

• **finish**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:41](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L41)

___

### pause

• **pause**: () => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:42](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L42)

___

### setTime

• **setTime**: (`time`: `number`) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`time`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:43](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L43)

___

### setPlaybackRate

• **setPlaybackRate**: (`rate`: `number` \| (`prevRate`: `number`) => `number`) => [`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Type declaration

▸ (`rate`): [`AnimationHandle`](AnimationHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

##### Returns

[`AnimationHandle`](AnimationHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimation.ts:44](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L44)

___

### waitFor

• **waitFor**: (`event`: [`WaitingAnimationEventName`](../API.md#waitinganimationeventname)) => `Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

#### Type declaration

▸ (`event`): `Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WaitingAnimationEventName`](../API.md#waitinganimationeventname) |

##### Returns

`Promise`<[`AnimationHandle`](AnimationHandle.md)<`Args`\>\>

#### Defined in

[src/react/hooks/useAnimation.ts:47](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimation.ts#L47)
