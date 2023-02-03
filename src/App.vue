<template>
  <div>
    <input v-if="data" :value="param" @input="handleInput" />
    <a v-if="isLoading">isLoading</a>
    <a v-else>{{ data }}</a>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSomeQuery } from "./service";
import debounce from "lodash.debounce";

export default {
  name: "App",
  setup() {
    const param = ref("yes");
    const showInput = ref(true);

    const { data, isSuccess, isLoading, isFetching } = useSomeQuery(param);

    const handleInputDebounced = debounce(function (input) {
      param.value = input;
    }, 1000);

    return {
      data,
      isSuccess,
      isLoading,
      param,
      showInput,
      isFetching,
      handleInput: (input) => {
        handleInputDebounced(input.target.value);
      },
      handleInputDebounced,
    };
  },
};
</script>
