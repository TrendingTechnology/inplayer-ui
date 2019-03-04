Text input is a input component for text. You can use it directly like this:

```jsx static
import { Input } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Input
      type="text"
      placeholder="text"
      onChange={console.log}
    />
  );
}
```

### Demo

```jsx
<Input
  type="text"
  placeholder="text"
  onChange={console.log}
  style={{ margin: '6px 0' }}
/>
<Input
  type="search"
  placeholder="Search"
  onChange={console.log}
  style={{ margin: '6px 0' }}
/>
```