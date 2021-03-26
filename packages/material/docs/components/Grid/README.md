# Grid

The `Grid` component takes inspiration from the Material UI grid component, but refines it for our Customer UI use case. The breakpoints for the grid component are aligned with the core breakpoints of Customer UI (`mobile`, `tablet` and `desktop`). There is also more flexibility to define how to render the grid at these different breakpoints.

The interface for the grid is a simplified version of it's Material UI counterpart. This is mainly due to the design constraints removing the requirement for the extra flexibility that Material UI's grid offers.

## Usage

```TypeScript
import React from "react";
import { Grid, GridSpacer } from "@utilitywarehouse/customer-ui-material";

const MyPage: React.FunctionalComponent = () => (
  <>
    <Grid container>
      // Full width grid item at desktop, tablet and mobile
      <Grid item desktop={12} tablet={8} mobile={4}>
        ...
      </Grid>
      <Grid item desktop={8} tablet={4} mobile={4}>
        // Render a secondary grid, switching the layout to column and column-reverse
        // respectively for tablet and mobile breakpoints
        <Grid container direction={{ tablet: "column", mobile: "column-reverse" }}>
          // Defaults to auto layout which consumes an entire row
          <Grid item>
          </Grid>
          <Grid item desktop={6} tablet={2} mobile={2}>
            ...
          </Grid>
          <Grid item desktop={6} tablet={2} mobile={2}>
            ...
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <GridSpacer />
    <Grid container>
      <Grid item>
        ...
      </Grid>
    </Grid>
  </>
);

```

## Concepts

The grid component is a relatively simple yet powerful component for layouts. The interface is intuitive once you have grasped the fundamental aspects of the component. The layout is powered by [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) similar to Material UI's grid component. The main things to keep in mind are:

* The desktop breakpoints grid is broken down into `12` columns.
* The tablet breakpoints grid is broken down into `8` columns.
* The mobile breakpoints grid is broken down into `4` columns.
* You can render grids within grids.
* The spacing between grid items is predetermined by the Grid component itself, adhering to the design system.
* Grid containers scale to fit their parent component.
* Breakpoint settings do not cascade

## API reference

Although you can pass container props to a grid item, they will be ignored and vice versa.

| Prop name | Type | Required | Container or item | Description |
| --------- | ---- |:--------:| ----------------- | ----------- |
| `container` | Boolean | no | container | Sets the grid component to act as a container |
| `item` | Boolean | no | item | Sets the grid component to act as an item |
| `direction` | Object | no | container | Sets the flex direction to apply to the grid containers items at particular breakpoints |
| `direction.mobile` | Enum{`row`, `row-reverse`, `column`, `column-reverse`} | no | container | Flex direction at mobile device size, defaults to `row` |
| `direction.tablet` | Enum{`row`, `row-reverse`, `column`, `column-reverse`} | no | container | Flex direction at tablet device size, defaults to `row` |
| `direction.desktop` | Enum{`row`, `row-reverse`, `column`, `column-reverse`} | no | container | Flex direction at desktop device size, defaults to `row` |
| `wrap` | Object | no | container | Sets the flex wrap CSS property to apply to the grid container at particular breakpoints |
| `wrap.mobile` | Enum{`nowrap`, `wrap`, `wrap-reverse`} | no | container | Flex wrap at mobile device size, defaults to `wrap` |
| `wrap.tablet` | Enum{`nowrap`, `wrap`, `wrap-reverse`} | no | container | Flex wrap at tablet device size, defaults to `wrap` |
| `wrap.desktop` | Enum{`nowrap`, `wrap`, `wrap-reverse`} | no | container | Flex wrap at desktop device size, defaults to `wrap` |
| `mobile` | Enum{`auto`, `1`, `2`, `3`, `4`} | no | item | How many columns should this item consume at the mobile breakpoint. Defaults to `auto` which will take up the entire row |
| `tablet` | Enum{`auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`} | no | item | How many columns should this item consume at the tablet breakpoint. Defaults to `auto` which will take up the entire row |
| `desktop` | Enum{`auto`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`} | no | item | How many columns should this item consume at the desktop breakpoint. Defaults to `auto` which will take up the entire row |
| `children` | React.ReactNode | yes | both | For containers an error is thrown children contains non Grid items. Grid item components can contain any child components |
