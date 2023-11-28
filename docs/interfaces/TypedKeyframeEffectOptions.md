# Interface: TypedKeyframeEffectOptions

Extended [options of KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect)

## Hierarchy

- `Omit`<`KeyframeEffectOptions`, ``"easing"``\>

  ↳ **`TypedKeyframeEffectOptions`**

  ↳↳ [`AnimationFunctionOptions`](AnimationFunctionOptions.md)

  ↳↳ [`TransitionAnimationOptions`](TransitionAnimationOptions.md)

  ↳↳ [`AnimationOptions`](AnimationOptions.md)

## Table of contents

### Properties

- [easing](TypedKeyframeEffectOptions.md#easing)
- [fill](TypedKeyframeEffectOptions.md#fill)
- [direction](TypedKeyframeEffectOptions.md#direction)
- [composite](TypedKeyframeEffectOptions.md#composite)
- [iterationComposite](TypedKeyframeEffectOptions.md#iterationcomposite)
- [pseudoElement](TypedKeyframeEffectOptions.md#pseudoelement)
- [delay](TypedKeyframeEffectOptions.md#delay)
- [duration](TypedKeyframeEffectOptions.md#duration)
- [endDelay](TypedKeyframeEffectOptions.md#enddelay)
- [iterationStart](TypedKeyframeEffectOptions.md#iterationstart)
- [iterations](TypedKeyframeEffectOptions.md#iterations)
- [playbackRate](TypedKeyframeEffectOptions.md#playbackrate)

## Properties

### easing

• `Optional` **easing**: [`TypedEasing`](../API.md#typedeasing)

#### Defined in

[src/core/waapi.ts:41](https://github.com/inokawa/react-animatable/blob/3ce964a/src/core/waapi.ts#L41)

___

### fill

• `Optional` **fill**: `FillMode`

#### Inherited from

Omit.fill

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:449

___

### direction

• `Optional` **direction**: `PlaybackDirection`

#### Inherited from

Omit.direction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:445

___

### composite

• `Optional` **composite**: `CompositeOperation`

#### Inherited from

Omit.composite

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:757

___

### iterationComposite

• `Optional` **iterationComposite**: `IterationCompositeOperation`

#### Inherited from

Omit.iterationComposite

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:758

___

### pseudoElement

• `Optional` **pseudoElement**: ``null`` \| `string`

#### Inherited from

Omit.pseudoElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:759

___

### delay

• `Optional` **delay**: `number`

#### Inherited from

Omit.delay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:444

___

### duration

• `Optional` **duration**: `string` \| `number` \| `CSSNumericValue`

#### Inherited from

Omit.duration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:446

___

### endDelay

• `Optional` **endDelay**: `number`

#### Inherited from

Omit.endDelay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:448

___

### iterationStart

• `Optional` **iterationStart**: `number`

#### Inherited from

Omit.iterationStart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:450

___

### iterations

• `Optional` **iterations**: `number`

#### Inherited from

Omit.iterations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:451

___

### playbackRate

• `Optional` **playbackRate**: `number`

#### Inherited from

Omit.playbackRate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:452
