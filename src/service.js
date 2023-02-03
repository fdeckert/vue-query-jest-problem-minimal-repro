import { useQuery } from "@tanstack/vue-query";

export const SomeService = {
  get(searchQuery) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("RESULT_DATA - " + searchQuery);
      }, 3000);
    });
  },
};

export const useSomeQuery = (refSearchQuery) => {
  return useQuery({
    queryKey: ["someKey", refSearchQuery],
    queryFn: () => SomeService.get(refSearchQuery.value),
    keepPreviousData: false,
  });
};
