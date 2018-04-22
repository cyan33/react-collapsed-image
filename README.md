# react-collapsed-image

## usage

```sh
npm install --save react-collapsed-image
```

```js
import React from 'react';
import CollapsedImage from 'react-collapsed-image';

export default function GroupAvatars() {
  return (
    <CollapsedImage
      pattern="aggregated"
    >
      <img src={src1} alt="avatar1" />
      <img src={src2} alt="avatar2" />
      <img src={src3} alt="avatar3" />
    </CollapsedImage>
  )
}
```

## APIs

### `CollapsedImage`

### `React.Children` (img)

## Liscence

MIT @Chang
