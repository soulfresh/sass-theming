<a id="general-function-sans-serif"></a>

# @function sans-serif

Generate the fallback fonts for a Sans Serif face.

+ **Group:** General
+ **Access:** public

## Examples

```scss
$title-font: 'Roboto', sans-serif();
```

<a id="general-function-monospace"></a>

# @function monospace

Generate the fallback fonts for a Monospace face.

+ **Group:** General
+ **Access:** public

## Examples

```scss
$code-font: 'Menlo', monospace();
```

<a id="general-function-make-palette"></a>

# @function make-palette

Generate a palette with even color gradiation
using a single color as the 500 value.

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                           | Description                                                            | Default |
| :-------- | :------------------------------------------------------------- | :--------------------------------------------------------------------- | :------ |
| `$color1` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 500 color used as the starting point for other colors.             | -       |
| `$black`  | **[Color](https://sass-lang.com/documentation/values/colors)** | The color used as the base for generating darker shades of the color.  | -       |
| `$white`  | **[Color](https://sass-lang.com/documentation/values/colors)** | The color used as the base for generating lighter shades of the color. | -       |

## Examples

```scss
$palette-primary: make-palette(#ff00ff);
```

<a id="general-function-make-palette-2"></a>

# @function make-palette-2

Generate a palette with even color gradiation
between 2 stops (100, 900).

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                           | Description   | Default |
| :-------- | :------------------------------------------------------------- | :------------ | :------ |
| `$color1` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 100 color | -       |
| `$color9` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 900 color | -       |

<a id="general-function-make-palette-3"></a>

# @function make-palette-3

Generate a palette with even color gradiation
between 3 stops (100, 500, 900).

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                           | Description   | Default |
| :-------- | :------------------------------------------------------------- | :------------ | :------ |
| `$color1` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 100 color | -       |
| `$color5` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 500 color | -       |
| `$color9` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 900 color | -       |

<a id="general-function-make-palette-5"></a>

# @function make-palette-5

Generate a palette with even color gradiation
between 5 stops (100, 500, 900).

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                           | Description   | Default |
| :-------- | :------------------------------------------------------------- | :------------ | :------ |
| `$color1` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 100 color | -       |
| `$color3` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 300 color | -       |
| `$color5` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 500 color | -       |
| `$color7` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 700 color | -       |
| `$color9` | **[Color](https://sass-lang.com/documentation/values/colors)** | The 900 color | -       |

<a id="general-function-theme-value"></a>

# @function theme-value

Get an item out of the theme two SASS maps deep. In other words,
get the value specified from palettes inside of a theme map.

This function can be very useful for creating your own functions
for retrieving values from a custom theme. For example, if you
have a custom theme called `$theme-pink` and you want to provide
a function to retrieve the pink palette, you could use the following.

`@function pink($hue) { @return theme-value($theme-pink, pink, $hue); }`

+ **Group:** General
+ **Access:** public

## Parameters

| Name       | Type                                                       | Description                                                 | Default |
| :--------- | :--------------------------------------------------------- | :---------------------------------------------------------- | :------ |
| `$theme`   | **[Map](https://sass-lang.com/documentation/values/maps)** | The theme that contains the value you want.                 | -       |
| `$palette` | key                                                        | The palette in the theme that (ex. primary or font-family). | -       |
| `$hue`     | key                                                        | The name of the value you want from the palette.            | -       |

## Examples

```scss
.my-primary-thing {
  // Get the 100 color value from the primary palette.
  color: theme-value( $theme, primary, 100 );
  // Get the border from the foreground palette.
  border: 1px solid theme-value( $theme, foreground, border );
}
```

