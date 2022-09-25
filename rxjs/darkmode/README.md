# DarkMode example

> ofcourse i use tailwind so you has this in your `tailwind.config.js`

```js
darkMode: 'class',
```

> this is my own store management with hooks and observables  
> thanks to rxjs, I find this implementation  
> and this construction simple and scalable,  
> you don't have to create exactly the same configuration  
> but you can take inspiration from it

1. create a folder `store/` in root your project
2. create a file `store.ts` in `store/`
3. create a folder `darkmode/` in `store/`
4. in `darkmode/` create files `darkmode.store.ts`,  
   `darkmode.service.ts` and `darkmode.hook.ts`

> OK, we have laid the base of the structure now we will work in the files

5. `store.ts`

```ts
import { darkModeHook } from './darkmode/darkmode.hook';
import { darkModeService } from './darkmode/darkmode.service';
import { darkModeStore } from './darkmode/darkmode.store';

export const store = {
  darkmode: {
    ...darkModeStore,
    ...darkModeService,
    ...darkModeHook,
  },
};
```

> here we create an object `store` that we can use everywhere  
> and that will contain all our data

> the `darkmode` property will contain our variables,  
> our hooks and our services concerning our dark mode

6. `darkmode.store.ts`

```ts
import { BehaviorSubject } from 'rxjs';

export const darkModeStore = {
  /**
   * indication on darkmode activate or not activate
   * @type BehaviorSubject boolean
   */
  darkModeActivate$: new BehaviorSubject(
    localStorage.getItem('color-theme') === 'dark',
  ),
};
```

> here we create an object that will contain all  
> our variables regarding the darkmode functionality

> we implement a `darkModeActive` observable which will contain a boolean,  
> we initialize it with the "color-theme" property of the localstorage  
> if it is found its will be `true`, otherwise its will be `false`

> from here understand that `store.darkmode.darkModeActivate$`  
> gives us access to our observable anywhere in our application

7. `darkmode.service.ts`

```ts
import { darkModeStore } from './darkmode.store';

export const darkModeService = {
  /**
   * start, reload project
   * if color-theme in localstorage is equal 'dark'
   * add class dark in balise html
   */
  startCheckDarkMode() {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  /**
   * active or disable dark mode
   */
  switchDarkMode(value: boolean) {
    const newDarkMode = !value;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    darkModeStore.darkModeActivate$.next(newDarkMode);
  },
};
```

> here our `darkmodeService` implements several functions  
> (again accessible everywhere from `store.darkmode`)

> `startCheckDarkmode` will allow us to initialize  
> our html with the class dark or not.  
> This allows us to run it in our `index.tsx`  
> and thus update our interface at the time of a reload or other.

`switchDarkMode` will take a boolean as a parameter and

> modify our html accordingly and at the same time modify our observable with this value.  
> Using this would be on a button.

8. `darkmode.hook.ts`

```ts
import { useEffect, useState } from 'react';
import { darkModeStore } from './darkmode.store';

export const darkModeHook = {
  /**
   * hook for observable darkModeActivate$
   * @return boolean
   */
  useDarkModeActivate() {
    const [darkModeActivate, setDarkModeActivate] = useState(false);

    useEffect(() => {
      darkModeStore.darkModeActivate$.subscribe((value: boolean) => {
        setDarkModeActivate(value);
      });
    }, []);

    return darkModeActivate;
  },
};
```

> last part we create a hook to be able  
> to use the true value of our observable  
> and thus give a state to any part of our application  
> which will need the value of `darkmode`

> OK, now that that's all done, we'll be able to use this everywhere

9. init in `index.tsx`

```ts
import { store } from '@store/store';

store.darkmode.startCheckDarkMode();
```

> so simple that an explanation would be useless ;-)
> here we initialize our html interface according  
> to the value of our localstorage (via the `startCheckDarkMode` function)  
> accessible everywhere I told you ;-)

10. create component btn-darkmode

> Well, I'm not going to do anything particularly beautiful.  
> BUT when I will do something useful ^^.

- Let's start by creating icons,  
  I make components because I will reuse them  
  later elsewhere in my application.  
  (you don't have to do like me)

```ts
// icon.type.ts

/**
 * type for icon
 */
export type Ticon = {
  color?: string;
  size?: string;
};
```

```ts
// sun-icon.tsx

import type { Ticon } from '@types-app/icon.type';
import React from 'react';

/**
 * Sun icon svg
 * @param size? string | undefined;
 * @param color? string | null | undefined;
 * @returns
 */
export function SunIcon({ color, size }: Ticon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`
      ${color ?? ''}
      ${size ?? 'w-6 h-6'}`}>
      <path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
    </svg>
  );
}
```

```ts
// moon-icon.tsx

import React from 'react';
import type { Ticon } from '@types-app/icon.type';

/**
 * Moon
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
export function MoonIcon({ color, size }: Ticon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`${size ?? 'w-6 h-6'} ${color ?? ''}`}>
      <path
        fillRule='evenodd'
        d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
        clipRule='evenodd'
      />
    </svg>
  );
}
```

> I suggest you create 3 different files
> now continue for create btn (button)

- create button `btn-darkmode.tsx`

```ts
// btn-darkmode.tsx

import { BtnIcon } from '@atoms/btns/btn-icon';
import { MoonIcon } from '@atoms/icons/moon-icon';
import { SunIcon } from '@atoms/icons/sun-icon';
import { store } from '@store/store';
import React from 'react';

export function BtnDarkMode() {
  const darkModeActivate = store.darkmode.useDarkModeActivate();

  return (
    <button
      type='button'
      onClick={() => {
        store.darkmode.switchDarkMode(darkModeActivate);
      }}>
      {darkModeActivate ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
```

> here we are finished, yes it was long ...  
> but now everything is clean and we use our observable  
> (finally our hook which listens to our observable) very easily ;-)

> a little explanation to finish:
>
> - we retrieve the value of our observable at the time  
>   of the construction of our btn-darkmode component,  
>   we store the value in `darkModeActivate`,  
>   we use our `switchDarkMode` function on the click  
>   of the button and we pass it the value of our observable .

> don't forget this function takes a boolean and assigns  
> its inverse in our observable. At the time of the click  
> we modify the value of our hook so that our function modifies our observable.

> if `darkModeActivate` is equal to true we display the sun icon otherwise we display the moon.

> simple and effective ;-)
