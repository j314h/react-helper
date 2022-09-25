# Config axios and create a client axios

> here I will create an axios client in order  
> to use it more easily in my project.  
> I show a minimum use here but you can  
> do much more it will be up to you to continue
> this implementation includes a token management  
> but I let you manage this part.

1. create folder `shared/http`

2. on the inside create `http.instance.ts` and `http.interceptor.ts`

```ts
// http.instance.ts

/* eslint-disable @typescript-eslint/naming-convention */ // this for XO linter
import axios from 'axios';

/**
 * create a new instance axios
 */
export const http = axios.create({
  baseURL: process.env.REACT_APP_URL_API, // .env I describe after how to do it
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // add your config headers here
  },
});
```

```ts
// http.interceptor.ts

// for the example I call my store you must do the same thing
// for the management of a user profile or the management
// of the token received by the API server
import { store } from '@store/store';

import { http } from './http.instance';

export const httpInterceptor = {
  /**
   * interceptor request
   * */
  request() {
    http.interceptors.request.use(
      config => {
        // this block is juste for example
        const storageToken = store.token.checkStorageForConnected();
        if (storageToken) {
          config.headers!.Authorization = `Bearer ${storageToken}`;
        } else {
          config.headers!.Authorization = 'Bearer';
        }

        console.log('request Interceptor', config);
        return config;
      },
      async error => {
        console.log('Error request Interceptor', error);
        return Promise.reject(error);
      },
    );
  },

  /**
   * interceptor response
   * */
  response() {
    http.interceptors.response.use(
      response => {
        // this block is juste for example
        if (response.status === 401) {
          store.token.removeTokenAndStorage();
          store.user.removeUserCurrent();
        }

        console.log('response Interceptor', response);
        return response;
      },
      async error => {
        console.log('Error response Interceptor', error);
        return Promise.reject(error);
      },
    );
  },
};
```

3. in your `index.tsx`

```ts
// index.tsx

import { httpInterceptor } from '@shared-app/http/http.interceptor';

httpInterceptor.request();
httpInterceptor.response();
```

> now every request you make with the axios "http" instance  
> will go through these two functions

4. .env easy access / in your `react-app-env.d.ts` add this

```ts
// react-app-env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    // types of envs
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_URL_API: string;

    // add your variables here
    // ....
  }
}
```
