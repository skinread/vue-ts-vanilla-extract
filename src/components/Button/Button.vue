
<script lang="ts">
import { buttonStyles, buttonVariants } from './button.css';
import { reactive, computed } from 'vue';
import type { ButtonVariants } from './button.css';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      styles: computed(() => {
        if (props.primary) return buttonVariants.primary;
        return buttonStyles({size: props.size });
      }),
      onClick() {
        emit('click');
      }
    };
  },
};
</script>

<template>
  <button type="button" :class="styles" @click="onClick">
    {{ label }}
  </button>
</template>
