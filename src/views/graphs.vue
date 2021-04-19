<template>
    <v-main>
      <div>
         <GChart
            type="ColumnChart"
            :data="CasesMonth"
            :options="CasesMonthOptions"
            />
      </div>

    </v-main>
</template>
<style>

.barchart {
   width: 100%;
   height: 500px;
}

</style>
<script>
export default {
  data() {
    return {
      CasesMonth: [
        ['Area', 'Complaint', 'Congratulation', 'Question', 'Suggestion'],
        ['Human Resources', 10, 11, 22, 15],
        ['Operations', 15, 2, 24, 37],
        ['Facilities', 6, 11, 13, 42],
        ['Technology', 8, 14, 14, 23],
      ],
      CasesMonthOptions: {
        chart: {
          title: 'Feedback Type',
        },
        isStacked: true,
        height: 300,
        legend: { position: 'top', maxLines: 3 },
        vAxis: { minValue: 0 },
        colors: ['#F8E08E', '#E6BAA8', '#DCB6C9', '#a69bca', '#c8d0e9'],
      },
    };
  },
};
</script>
