<a id="general-function-encodecolor"></a>

# @function encodecolor

URL encode a color value.

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                             | Description          | Default |
| :-------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$string` | **[String](https://sass-lang.com/documentation/values/strings)** | The string to encode | -       |

## Dependents

+ **@function dropdown-arrow-icon** Generate a dropdown arrow image. By default it will draw a
  downward triangle but you can change this with the `$style`
  parameter.
  Style options are:


+ 'triangle'
+ 'chevron'

<a id="general-function-dropdown-arrow-icon"></a>

# @function dropdown-arrow-icon

Generate a dropdown arrow image. By default it will draw a
downward triangle but you can change this with the `$style`
parameter.
Style options are:

+ 'triangle'
+ 'chevron'


+ **Group:** General
+ **Access:** public

## Parameters

| Name            | Type                                                               | Description                                                                         | Default        |
| :-------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------- | :------------- |
| `$color`        | **[Color](https://sass-lang.com/documentation/values/colors)**     | The color of the arrow.                                                             | `currentColor` |
| `$style`        | **[Boolean](https://sass-lang.com/documentation/values/booleans)** | The style of arrow image to draw. One of 'triangle', 'chevron'.                     | `triangle`     |
| `$line-join`    | **[String](https://sass-lang.com/documentation/values/strings)**   | The stroke-line join to use. One of 'miter', 'round', 'bevel', 'miter-clip', 'arcs' | `miter`        |
| `$line-cap`     | **[String](https://sass-lang.com/documentation/values/strings)**   | The linke-cap to use. One of 'butt', 'square', 'round'.                             | `square`       |
| `$stroke-width` | **[Number](https://sass-lang.com/documentation/values/numbers)**   | The width of the stroke if using the 'chevron' style.                               | `2px`          |

## Dependencies

+ **[@function encodecolor](#general-function-encodecolor)**

## Dependents

+ **@mixin down-arrow** Adds a background down arrow icon that can be
  used for dropdown elements. The arrow is right aligned
  to the bounding box.
+ **@mixin select-background** The select-background mixin allows you to customize the
  background of a `<select>` element, including the drop down
  arrow. It sets the `background` property of the element with
  an arrow icon and background coloring because this is the most
  cross browser consitent way to style Select elements. Additionally,
  this mixin will set the padding of the input in order to fit
  the custom down arrow image. Lastly, it will also set the
  `text-overflow`, `white-space` and `overflow` to support
  ellipsis.

<a id="general-function-hsls"></a>

# @function hsls

Generates an HSL color string. Useful
if you don't want SCSS to convert HSL
values to HEX.

+ **Group:** General
+ **Access:** public

## Parameters

| Name          | Type                                                             | Description | Default |
| :------------ | :--------------------------------------------------------------- | :---------- | :------ |
| `$hue`        | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |
| `$saturation` | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |
| `$lightness`  | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |

<a id="general-mixin-down-arrow"></a>

# @mixin down-arrow

Adds a background down arrow icon that can be
used for dropdown elements. The arrow is right aligned
to the bounding box.

+ **Group:** General
+ **Access:** public

## Parameters

| Name            | Type                                                               | Description                                                                         | Default        |
| :-------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------- | :------------- |
| `$color`        | **[Color](https://sass-lang.com/documentation/values/colors)**     | The color of the arrow.                                                             | `currentColor` |
| `$style`        | **[Boolean](https://sass-lang.com/documentation/values/booleans)** | The style of arrow image to draw. One of 'triangle', 'chevron'.                     | `triangle`     |
| `$line-join`    | **[String](https://sass-lang.com/documentation/values/strings)**   | The stroke-line join to use. One of 'miter', 'round', 'bevel', 'miter-clip', 'arcs' | `miter`        |
| `$line-cap`     | **[String](https://sass-lang.com/documentation/values/strings)**   | The linke-cap to use. One of 'butt', 'square', 'round'.                             | `square`       |
| `$stroke-width` | **[Number](https://sass-lang.com/documentation/values/numbers)**   | The width of the stroke if using the 'chevron' style.                               | `2px`          |
| `$arrow-width`  | **[Number](https://sass-lang.com/documentation/values/numbers)**   | The width of the arrow svg.                                                         | `10px`         |

## Dependencies

+ **[@function dropdown-arrow-icon](#general-function-dropdown-arrow-icon)**

<a id="general-mixin-select-background"></a>

# @mixin select-background

The select-background mixin allows you to customize the
background of a `<select>` element, including the drop down
arrow. It sets the `background` property of the element with
an arrow icon and background coloring because this is the most
cross browser consitent way to style Select elements. Additionally,
this mixin will set the padding of the input in order to fit
the custom down arrow image. Lastly, it will also set the
`text-overflow`, `white-space` and `overflow` to support
ellipsis.

+ **Group:** General
+ **Access:** public

## Parameters

| Name                | Type                                                             | Description                                                                                                   | Default        |
| :------------------ | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :------------- |
| `$padding-sides`    | **[Number](https://sass-lang.com/documentation/values/numbers)** | The left and right padding around the input. This will be used on the left edge and either side of the arrow. | `5px`          |
| `$padding-vertical` | **[Number](https://sass-lang.com/documentation/values/numbers)** | The top and bottom padding. If not set, the save value as the sides will be used.                             | -              |
| `$arrow-style`      | **[String](https://sass-lang.com/documentation/values/strings)** | The arrow shape to use. One of `triangle`, `chevron`.                                                         | `triangle`     |
| `$arrow-width`      | **[Number](https://sass-lang.com/documentation/values/numbers)** | The width of the arrow shape.                                                                                 | `10px`         |
| `$arrow-color`      | **[Color](https://sass-lang.com/documentation/values/colors)**   | The color of the arrow shape.                                                                                 | `currentColor` |
| `$line-join`        | **[String](https://sass-lang.com/documentation/values/strings)** | The `stroke-linejoin` to use for the arrow.                                                                   | `miter`        |
| `$line-cap`         | **[String](https://sass-lang.com/documentation/values/strings)** | The `stroke-linecap` to use for the arrow.                                                                    | `square`       |
| `$stroke-width`     | **[Number](https://sass-lang.com/documentation/values/numbers)** | The `stroke-width` to use from the arrow.                                                                     | `2px`          |
| `$bg-color`         | **[Color](https://sass-lang.com/documentation/values/colors)**   | The background color of the select element.                                                                   | `white`        |
| `$bg-color-hover`   | **[Color](https://sass-lang.com/documentation/values/colors)**   | The background color of the select element when hovered.                                                      | `white`        |
| `$bg-color-focus`   | **[Color](https://sass-lang.com/documentation/values/colors)**   | The background color of the select element when focused.                                                      | `white`        |

## Dependencies

+ **[@function dropdown-arrow-icon](#general-function-dropdown-arrow-icon)**

<a id="general-mixin-active"></a>

# @mixin active

Short cut to defining hover + focus + active styling.
An additional class selector is also added so you
can programatically emulate this styling.

+ **Group:** General
+ **Access:** public

## Parameters

| Name      | Type                                                               | Description                                                       | Default |
| :-------- | :----------------------------------------------------------------- | :---------------------------------------------------------------- | :------ |
| `$class`  | **[String](https://sass-lang.com/documentation/values/strings)**   | The class name that can be used to simulate the active state.     | -       |
| `$global` | **[Boolean](https://sass-lang.com/documentation/values/booleans)** | Whether to the class name is global if you are using css modules. | -       |

<a id="general-mixin-ellipsis"></a>

# @mixin ellipsis

Add ellipsis to an element. This
will force the element to be a single
line of text (it is not possible
to add ellipses to multiline text with CSS).

+ **Group:** General
+ **Access:** public

<a id="general-mixin-disabled"></a>

# @mixin disabled

Fade out an element and make it unclickable.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-flex-centered"></a>

# @mixin flex-centered

Center the elements inside a
container by making it a flex
element.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-fixed-fill"></a>

# @mixin fixed-fill

Make an element fill its parent
using fixed positioning. This is
good for covering an element.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-absolute-fill"></a>

# @mixin absolute-fill

Make an element fill its parent
using absolute positioning.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-absolute-centered"></a>

# @mixin absolute-centered

Center the element inside a container
using absolute positioning.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-row"></a>

# @mixin row

Represents a horizontal row of elements
where the contents are justified with
space-between so they align to the edges
of the browser.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-flex-column"></a>

# @mixin flex-column

Represents flex items arranged in a column.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-unbulleted-list"></a>

# @mixin unbulleted-list

Make a "ul" or "ol" element look like a regular "div".

+ **Group:** General
+ **Access:** public

<a id="general-mixin-unstyled-button"></a>

# @mixin unstyled-button

Make button look like a regular "div"

+ **Group:** General
+ **Access:** public

<a id="general-mixin-cover-image"></a>

# @mixin cover-image

Make an image fill it's parent container
and make sure the parent container background
is not visible (image fills the container).

+ **Group:** General
+ **Access:** public

<a id="general-mixin-contain-image"></a>

# @mixin contain-image

Make an image fill it's parent container
and make sure the image is fully visible
in the parent container (it should show
the parent container background if necessary).

+ **Group:** General
+ **Access:** public

<a id="general-mixin-print-wrapper"></a>

# @mixin print-wrapper

When printing, Firefox needs top level DOM
elements to be block level elements in order
for page breaks to work as expected. Therefore,
this mixin should be included in the top level
elements leading up to nodes where the
`printer-page` mixin is used.

+ **Group:** General
+ **Access:** public

<a id="general-mixin-printer-page-margins"></a>

# @mixin printer-page-margins

Consistent margins for printer pages.

+ **Group:** General
+ **Access:** public

## Dependents

+ **@mixin printer-page** Forces a page break when printing and sets
  consistent margins for the page. This assumes
  that the element that includes this mixin
  contains all contents for the page. You can
  also include any additional styles you want
  by invoking this mixin with a content block.

<a id="general-mixin-printer-page"></a>

# @mixin printer-page

Forces a page break when printing and sets
consistent margins for the page. This assumes
that the element that includes this mixin
contains all contents for the page. You can
also include any additional styles you want
by invoking this mixin with a content block.

+ **Group:** General
+ **Access:** public

## Dependencies

+ **[@mixin printer-page-margins](#general-mixin-printer-page-margins)**

<a id="general-mixin-printer-hidden"></a>

# @mixin printer-hidden

Hides the current element when printing.

+ **Group:** General
+ **Access:** public

