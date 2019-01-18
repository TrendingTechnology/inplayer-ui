Tabs is a component which generates switching tabs. You can use it directly like this:

```jsx static
import { Tabs } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Tabs>{renderTabs()}</Tabs>;
}
```

### Demo

```jsx
const tabs = [{ name: 'Account' }, { name: 'User' }, { name: 'Contact' }];

<Tabs
  tabs={tabs}
  selectedTabIndex={0}
  onTabClick={index => console.log(index)}
/>;
```