<template>
  <b-container>
    <h1 class="my-3 border-bottom border-danger pb-2 d-inline-block">Price Table</h1>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          service: "Individual Training",
          day: "5$",
          month: "45$",
          year: "400$"
        },
        { service: "Group Training", day: "7$", month: "55$", year: "450$" },
        { service: "Personal Trainer", day: "10$", month: "60$", year: "500$" }
      ],
      fields: [
        {
          key: "service",
          sortable: false,
          variant: "danger"
        },
        {
          key: "day",
          sortable: true
        },
        {
          key: "month",
          sortable: true
        },
        {
          key: "year",
          sortable: true
        }
      ]
    };
  }
};
</script>