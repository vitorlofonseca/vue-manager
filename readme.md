# Vuema

This package helps you to manage Vue code in an automated way, like an Angular schematic.

## Installation

```sh
npm install -g vuema
```

or

```sh
yarn add -g vuema
```

## Usage

### Creating Component

1. Run `cd folder/you/want` on the terminal
2. Run `vuema createComponent componentName=NameOfYourComponent`
3. Check in the folder if the component was created, inside a folder with the same name

## Next steps

1. Create a flag to pass to `createComponent` to don't wrapp the component inside a folder
2. Create a flag to create the spec file with (or without) the component
