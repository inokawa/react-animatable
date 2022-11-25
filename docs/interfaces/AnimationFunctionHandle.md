# Interface: AnimationFunctionHandle<Args\>

Handle of [useAnimationFunction](../API.md#useanimationfunction)

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Args` | `void` | argument type |

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

• **play**: (...`opts`: [`AnimationFunctionPlayArgs`](../API.md#animationfunctionplayargs)<`Args`\>) => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationFunctionPlayArgs`](../API.md#animationfunctionplayargs)<`Args`\> |

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:34](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L34)

___

### reverse

• **reverse**: (...`opts`: [`AnimationFunctionReverseArgs`](../API.md#animationfunctionreverseargs)<`Args`\>) => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (...`opts`): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...opts` | [`AnimationFunctionReverseArgs`](../API.md#animationfunctionreverseargs)<`Args`\> |

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:37](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L37)

___

### cancel

• **cancel**: () => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:40](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L40)

___

### finish

• **finish**: () => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:41](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L41)

___

### pause

• **pause**: () => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:42](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L42)

___

### setTime

• **setTime**: (`time`: `number`) => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (`time`): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:43](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L43)

___

### setPlaybackRate

• **setPlaybackRate**: (`rate`: `number` \| (`prevRate`: `number`) => `number`) => [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Type declaration

▸ (`rate`): [`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` \| (`prevRate`: `number`) => `number` |

##### Returns

[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:44](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L44)

___

### waitFor

• **waitFor**: (`event`: [`WaitingAnimationEventName`](../API.md#waitinganimationeventname)) => `Promise`<[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>\>

#### Type declaration

▸ (`event`): `Promise`<[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WaitingAnimationEventName`](../API.md#waitinganimationeventname) |

##### Returns

`Promise`<[`AnimationFunctionHandle`](AnimationFunctionHandle.md)<`Args`\>\>

#### Defined in

[src/react/hooks/useAnimationFunction.ts:47](https://github.com/inokawa/react-animatable/blob/3f63af1/src/react/hooks/useAnimationFunction.ts#L47)
