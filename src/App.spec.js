import { shallowMount } from "@vue/test-utils";
import { QueryClient } from "@tanstack/vue-query";

import flushPromises from "flush-promises";
import { SomeService } from "./service";

import App from "./App.vue";

// mock debounce in tests so it's just a proxy
jest.mock("lodash.debounce", () => jest.fn((fn) => fn));

describe("vue-query jest problem reproduction", () => {
  it("refetches data on input change", async () => {
    SomeService.get = jest.fn().mockResolvedValue("6");

    const wrapper = shallowMount(App, {
      provide: {
        VUE_QUERY_CLIENT: new QueryClient(),
      },
    });
    await flushPromises();

    expect(SomeService.get).toHaveBeenCalledTimes(1);

    const inputWrapper = wrapper.get("input");

    await inputWrapper.setValue("some other value");
    await flushPromises();

    expect(SomeService.get).toHaveBeenCalledTimes(2);

    await inputWrapper.setValue("yet another value");
    await flushPromises();

    expect(SomeService.get).toHaveBeenCalledTimes(3);
  });
});
