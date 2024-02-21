
## Developing
start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build

or if you have docker installed

docker-compose -f docker-compose.dev.yml up -d --build
```

You can preview the production build with `yarn preview`.
or if you used docker go to http://localhost:3000


> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
