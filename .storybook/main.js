module.exports = {
  "stories": [
    "../src/docs/Intro.stories.mdx",
    // Colors
    "../src/docs/colors/Intro.stories.mdx",
    "../src/docs/colors/Global.stories.mdx",
    "../src/docs/colors/Foreground.stories.mdx",
    "../src/docs/colors/Background.stories.mdx",
    "../src/docs/colors/Palette.stories.mdx",
    "../src/docs/colors/Shadow.stories.mdx",
    "../src/docs/colors/Gradient.stories.mdx",
    "../src/docs/colors/*.stories.mdx",
    // Sizes
    "../src/docs/measurements/Intro.stories.mdx",
    "../src/docs/measurements/Size.stories.mdx",
    "../src/docs/measurements/Breakpoint.stories.mdx",
    "../src/docs/measurements/Radius.stories.mdx",
    "../src/docs/measurements/Layer.stories.mdx",
    "../src/docs/measurements/*.stories.mdx",
    // Fonts
    "../src/docs/fonts/Family.stories.mdx",
    "../src/docs/fonts/Size.stories.mdx",
    "../src/docs/fonts/Weight.stories.mdx",
    "../src/docs/fonts/*.stories.mdx",
    // Animation
    "../src/docs/animation/Easing.stories.mdx",
    "../src/docs/animation/Speed.stories.mdx",
    "../src/docs/animation/*.stories.mdx",
    // Helpers
    "../src/docs/helpers/ThemeHelpers.stories.mdx",
    "../src/docs/helpers/Mixins.stories.mdx",
    "../src/docs/helpers/*.stories.mdx",
    // Cheat Sheet
    "../src/docs/cheat-sheet/Cheat.stories.mdx",
    "../src/docs/cheat-sheet/Boilerplate.stories.mdx",
    "../src/docs/cheat-sheet/Storybook.stories.mdx",
    "../src/docs/cheat-sheet/*.stories.mdx",
    // Anything else
    "../src/docs/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
