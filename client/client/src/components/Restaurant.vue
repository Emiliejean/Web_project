<template>
<div>
<h1> Restaurant </h1>
<img src="https://vivre-en-thailande.com/files/2016/08/Capture1111111.png"/>
<h2> Menu </h2>

 <panel title="Menu">
  <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5">
      <template slot ="items" slot-scope="slotProps">
          <td class="text-xs-right">
              {{slotProps.item.name}}
          </td>
          <td class="text-xs-right">
              {{slotProps.item.calories}}
          </td>
          <td class="text-xs-right">
              {{slotProps.item.price}}
          </td>
      </template>
  </v-data-table>
</panel>
<br>
<h2> Informations </h2>
<p>Monday-Saturday : 11 am - 2pm ; 8pm - 10pm
    <br>
    Sunday : 8pm - 10 pm
    <br>
    If you need more informations, please send us an email :breath.room@gmail.com or call us :0778435676 </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Name'
        },
        {text: 'Calories'},
        { text: 'Price (in $)' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          price: 6
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
