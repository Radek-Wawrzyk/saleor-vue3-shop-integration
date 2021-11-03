<template>
  <div class="home"></div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import useProduct from '@/composables/useProduct';

export default {
  name: 'Home',
  setup() {
    // const data = useQuery(gql`
    //   query getProducts {
    //     products(first: 5) {
    //       edges {
    //         node {
    //           id
    //           name
    //           description
    //         }
    //       }
    //     }
    //   }

    // `);

    // console.log(data);
    const { test, result, loading, error } = useProduct();

    console.log(test, result, loading, error);

    return {
      test,
      result,
      loading,
      error,
    };
  },
};
</script>
