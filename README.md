# sass-theming

This library provides SASS functions you can use to easily create and apply themes to your
SASS based projects. It exposes functions for accessing colors, fonts and sizes from
theme maps that you can customize. It also makes using your theme dead simple by providing
easy access to them variables.

## Usage

    npm install @thesoulfresh/sass-theming


Create a `_theme.scss` (or whatever you want to call it) file in the root of your project
with the following:

```scss
@import '~@thesoulfresh/theme';
```

Now you can simply `@import 'theme'` in any of your SASS files to
get access to the theming funnctions detailed below.

To customize the theme, you can override theme variables and maps in
your theme file.

```scss
// Set the primary color of your theme. This will
// generate a primary palette with values from 100 - 900
// that you can access using "color(primary, 500)".
$primary: #E0CBC6;
```

## API

### Functions
### Customization
#### Variables
#### Maps

