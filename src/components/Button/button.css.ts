import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

const { colour, borderRadius } = themeVars;

const base = {
  border: 0,
  borderRadius: borderRadius.button,
  color: colour.white,
  cursor: 'pointer',
  display: 'flex',
  lineHeight: 1,
  ':hover': {
    opacity: 0.65,
  },
};

export const buttonStyles = recipe({
  base,
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
      small: { padding: '.5em 1em' },
      medium: { padding: '1em 2em' },
      large: { padding: '1.5em 3em' },
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

export const buttonVariants = recipe({
  variants: {
    primary: {
      false: buttonStyles(),
      true: buttonStyles({ colour: 'brand', size: 'large' }),
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonVariants>;
