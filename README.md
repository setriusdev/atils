<div align="center">
    <img src="./atils Logo.png" style="height:150px;width:150px;"><br>
    <h2><code><b>@2.0.9</b></code></h2>
    <img src="https://img.shields.io/npm/dt/atils?color=5094ef&label=total%20downloads&logoColor=5094ef&style=plastic">
    <img alt="npm" src="https://img.shields.io/npm/dw/atils?color=e0495f&label=weekly%20downloads&style=plastic">
    <img src="https://img.shields.io/npm/v/atils?color=ef5094&label=version&logoColor=5094ef&style=plastic">
    <img alt="npm collaborators" src="https://img.shields.io/npm/collaborators/atils?label=collaborators&style=plastic">
    <img src="https://img.shields.io/discord/944301669489975367?color=094e5f&label=support%20discord&style=plastic">
    <img src="https://img.shields.io/github/last-commit/itsatelo/atils?color=e4f950&label=last%20github%20commit&style=plastic">
    <img src="https://img.shields.io/github/issues-raw/itsatelo/atils?color=4e0f95&style=plastic"><br>
    Released by <code>Setrius Development</code>
</div>
<hr>

## [ ! ] **Warnings**
**[ ! ]**<br>No documentation. It will be released with `atils@3.0.0`.

# Getting Started
### Installing `atils`
**Installing the latest release of `atils`**
```js
npm i atils
const atils = require("atils");
import atils from "atils";
```

**Installing previous releases of `atils`**
```js
npm i atils@x.y.z
const atils = require("atils");
import atils from "atils";
```

### Using Documentation
**There is no documentation for this version. Documentation will be released for @3.0.0 and beyond.**<br>
Supported versions (versions of atils you can ask me to help you with) include:
> - `atils@2.x.x`
> - `atils@1.2.x`

Documentation can be found here:<br>
https://docs.setrius.com/atils/

### Utilities List
> - `Bitfield` Utility
> - `Client` Utility
> - `Collection` Utility
> - `Console` Utility (**implements** `Error` Utility)
> - `Dataset` Utility
> - `Date` Utility
> - `Enum` Utility
>   - `BitEnum` (**extends** `EnumParent`)
>   - `FrozenFlagBasedEnum` (**extends** `EnumParent`, **implements** `ThawedFlagBasedEnum`, **`default`**)
>   - `ThawedFlagBasedEnum` (**extends** `EnumParent`)
> - `Error` Utility
> - `Interface` Utility
>   - `Type` Sub-Utility
>   - `ClassInterface` Sub-Utility
> - `Merge` Utility
> - `Placebo` Utility

# Using Utilities
## Importing Utilities
```js
const { UtilityName } = require("atils");
```
### Import Names
```js
const {
    Bitfield,
    Client,
    Collection,
    Dataset,
    Date,
    Enum,
        BitEnum,
        EnumParent,
        FrozenFlagBasedEnum,
        ThawedFlagBasedEnum,
    BaseError,
    ErrorBuilder,
    ErrorSaver,
    Interface,
    InterfaceTypeAny,
    InterfaceTypeSmallInt,
    Merge,
    MKW,
    Type,
    Placebo,

    DefaultClientIntents,
    ConsoleStyles,
    InterfaceTypes,
} = require("atils");
```

# Notice Board
## **`November 11th, 2022`**
> Five days until `atils` is one year old!<br>
> Also, `atils@3.0.0` is in development. Will receive many heavy changes, as well as a fully functional documentation system and intellisense.<br>
> Documentation will be updated as I work on it, but it will take quite awhile.
> https://docs.setrius.com/<br>
> https://docs-api.setrius.com/ (if you want to see all the raw data).

> **Also**, @3.0.0 will have a new logo since I'm kind of sick of the current one.

<img src="https://cdn.setrius.com/atils" style="height:50px;width:50px;"/><br><br>

# Changelog
## **`atils@2.0.1`**
- Fixed an [issue](https://github.com/setriusdev/atils/issues/1) where `BitEnums` will only store `Functions`.

## **`atils@2.0.2`**
- Fixed an [issue](https://github.com/setriusdev/atils/issues/2) with the `Type` and `Interface` classes not detecting `Array`s and `Object`s properly.

## **`atils@2.0.3`**
- Fixed an [issue](https://github.com/setriusdev/atils/issues/3) with the `Type` class throwing incorrect errors, and not properly detecting statements.

## **`atils@2.0.4`**
- Fixed an [issue](https://github.com/setriusdev/atils/issues/4) with the `Console` class throwing errors when parameters are provided.
- Fixed an issue with the `Console` class not properly logging messages from the `.log()` method.
- Deprecated the `BaseError` class.
- Deprecated the `EnumParent` class (no, the three Enums that we have are not deprecated).

## **`atils@2.0.5`**
- Added the `setName()` method to the `Console` class. Sets the Command Prompt's name.

## **`atils@2.0.6`**
- Added a little bit of the IntelliSense for the first couple utilities (will slowly be rolled out).
- Renamed the `Interface` to `Class Interface`, implying it is primarily used for Classes.
- Added the `Object Interface`, implying it is used for Objects.
> **Usage Example**
> ```js
> const { Interface } = require("atils");
> const interface = new Interface({
>    hello: String, // The required item "hello" will be a String.
>    _world: { // The optional item "world" will have the following items.
>        type: String, // The optional item "hello" will be a String.
>        default: "world!", // The default value for this optional item will be "world!".
>    }
> });
> ```
- Changed the default export for `Interface` to the `Object Interface`, rather than the `Class Interface`.

## **`atils@2.0.7`**
- Fixed a minor naming issue with the `Class Interface`.
- Fixed a minor issue with the README file.

## **`atils@2.0.7-b`**
- Failed to fix a previous issue.

## **`atils@2.0.8`**
- You can now use Arrays as Types in the `Object Interface`.
> **Usage Example**
> ```js
> const { Interface } = require("atils");
> const interface = new Interface({
>   array: [String],
> });
>
> interface.applyTo({
>   array: ["Hello world!"],
> });
>
> interface.applyTo({
>   array: [1], // throws an error. 
> });
- Added [MKW](https://npmjs.com/package/mkw) as an export in atils.
    - The MKW package will be updated if atils' version of it receives an update.
- Deprecated the `Dataset` Class (just use a Bit Enum).

## **`atils@2.0.9`**
- Fixed an issue with the `MKW` import.
- Fixed an issue with the `Console` Class.

# Resources
> - [Official Website](https://setrius.com/)
> - [Support Server](https://setrius.com/resources)
> - [Documentation](https://docs.setrius.com/atils) (**Unreleased**)
> - [GitHub](https://github.com/setriusdev/atils)

I'm still working on IntelliSense for atils. It will most likely be finished with the release of the Documentation.<br>
The website for Setrius and the Discord Server are now open!

<hr>
<div align="center">
<h1><b><code>atils@2.0.9</code></b></h1>
<h3>Released by <code>Setrius Development</code></h3>
<h3>Release Date: <b><code>11/11/2022</code></b></h3>
<h3>First Release: <b><code>11/26/2021</code></b></h3>

Thank you for using `atils`.
</div>