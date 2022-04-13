import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../themes/theme.css';

const { colour, borderRadius, space } = vars;

export const buttonStyle = style({
  backgroundColor: colour.brand,
  border: 0,
  borderRadius: borderRadius.button,
  color: colour.white,
  cursor: 'pointer',
  display: 'flex',
  lineHeight: 1,
  padding: space[1],
});

export const buttonStyles = recipe({
  base: {
    border: 0,
    borderRadius: borderRadius.button,
    color: colour.white,
    cursor: 'pointer',
    display: 'flex',
    lineHeight: 1,
    ':hover': {
      opacity: 0.65,
    },
  },

  variants: {
    colour: {
      neutral: { background: colour.gray },
      brand: {
        background: colour.brand,
        ':hover': {
          background: colour.gray,
          color: 'yellow',
          opacity: 'default',
        },
        ':focus': {
          background: colour.gray,
          color: 'yellow',
        },
      },
      accent: { background: colour.blue },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: borderRadius.round },
    },
  },

  // Applied when multiple variants are set at once
  // compoundVariants: [
  //   {
  //     variants: {
  //       color: 'neutral',
  //       size: 'large',
  //     },
  //     style: {
  //       background: 'ghostwhite',
  //     },
  //   },
  // ],

  defaultVariants: {
    colour: 'accent',
    size: 'medium',
  },
});

export const buttonVariants = styleVariants({
  primary: [buttonStyles({ colour: 'brand', size: 'large' })],
});

export type ButtonVariants = RecipeVariants<typeof buttonStyles>;
