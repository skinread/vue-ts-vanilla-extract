
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
        return ['small', 'medium', 'large'].includes(value);
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      styles: computed(() => {
        if (props.primary) return buttonStyles({ colour: 'brand', size: 'large' });
        return buttonStyles({ size: props.size });
      }),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

<template>
  <button type="button" :class="styles" @click="onClick">
    {{ label }}
  </button>
</template>
