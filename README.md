<div align="center">
    <img src="https://img.itsatelo.com/atils" style="height:150px;width:150px;"><br>
    <h2><code><b>@2.0.7</b></code></h2>
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
**[ ! ]**<br>This package's documentation is currently unreleased. Although mentioned below, the documentation is currently awaiting finalization from it's developer. Please use this package with caution.

**[ ! ]**<br>This package currently requires more testing and it is unsure if everything works as intended. If any issues are found, please leave them on the GitHub.

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
Documentation is only kept for the latest release of `atils`, being `atils@2.0.0`.<br>
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
    Type,
    Placebo,

    DefaultClientIntents,
    ConsoleStyles,
    InterfaceTypes,
} = require("atils");
```

Unlike previous versions, `atils@2.0.0` will not have examples to be used here. Please read through our [documentation](https://docs.setrius.com/atils/) and if you need help, ask in the official [Setrius Development Discord](https://setrius.com/socials/discord).

# Notice Board
## **`September 12th, 2022`**
> It is done! `atils@2.0.0` is finally finished! Although the documentation isn't finished yet, as I'm waiting on Setrius' own doc-gen package for it (in the works). But, I decided that it would be good to at least release what I currently have.<br><br>
> Sorry that it took so long, around two weeks after the `@2.0.0` announcement I fell into a depression and had struggled with development, and when I pulled myself out of it, I was starting several projects, and my work load was just too heavy to work on `atils`. However, recently, I've realized that I'd like to utilize `atils` in more projects, and as such, I had finished it.<br><br>
> It isn't perfect by any means, but it **is** an improvement, as far as I'm aware. So, with the release of this, I can continue development on these projects.<br>
> And, no, don't expect for `atils` updates to resume the speed that they were once at. During that time, I was still learning JS, but I am now investing my time into other things such as Java, Python, C, and more. Please don't bother me about updating `atils` -- just leave an issue on the GitHub and go along.

## **`September 15th, 2022`**
> Slowly rolling out Bug Fixes. I'm leaving a collection of issues up on the GitHub so that people can track my changes.

## **`October 10th, 2022`**
> Some more bug fixes going out. I don't have plans for `atils@2.1.0` yet, so this is the most updated atils will need. Still not too sure about 

## **`October 23rd, 2022`**
> 3,000 downloads! Woah! The package's 1 year anniversary in less than a month! Another woah! 31 versions! Even more woah!<br>
> A lot of things have changed since `atils@1.0.0`, and honestly I'm pretty happy with it right now. I still don't have the documentation finished, nor the IntelliSense, but I've gotten started on... one of those things! And I keep making changes to the package making my life harder in the near future! Woot!

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

# Resources
> - [Official Website](https://setrius.com/)
> - [Support Server](https://setrius.com/resources)
> - [Documentation](https://docs.setrius.com/atils) (**Unreleased**)
> - [GitHub](https://github.com/setriusdev/atils)

I'm still working on IntelliSense for atils. It will most likely be finished with the release of the Documentation.<br>
The website for Setrius and the Discord Server are now open!

<hr>
<div align="center">
<h1><b><code>atils@2.0.7</code></b></h1>
<h3>Released by <code>Setrius Development</code></h3>
<h3>Release Date: <b><code>10/24/2022</code></b></h3>
<h3>First Release: <b><code>11/26/2021</code></b></h3>

Thank you for using `atils`.
</div>