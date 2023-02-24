<!-- https://www.antdv.com/components/table - Data Display - Table - Expandable Row -->

<template>
  <a-table :columns="columns" :data-source="filteredData" :scroll="{ x: 2000 }">
    <template #bodyCell="{ column, record }: { column: any, record: DataI }">
      <template v-if="column.key === 'status_id__name'">
        <span>
          <a-tag style="color: black;" :color="record.status_id__color">
            {{ record.status_id__name }}
          </a-tag>
        </span>
      </template>
      <template v-if="column.key === 'responsible_user_id__name'">
        <span>
          <AntdvUserIcon />{{ record.responsible_user_id__name }}
        </span>
      </template>
    </template>
    <template #expandedRowRender="{ record }: { record: DataI }">
      <ul>
        <li v-for="contactId in record.contactIds" :key="contactId">
          <SomeContact :contactid="contactId" />
        </li>
      </ul>
    </template>
  </a-table>
</template>

<script lang="ts">
import AntdvUserIcon from './AntdvUserIcon.vue'
import { AmoLeadT } from '../db_interface'
import { amoLeads, amoLinks, amoStatuses, amoUsers } from '../client_data'
import { apiRequestUtil } from '../api_request_util'
import { defineComponent, onMounted, ref } from 'vue'
import SomeContact from './SomeContact.vue'

interface DataI extends AmoLeadT {
  key: number
  created_at__loc: string
  price__loc: string
  status_id__name: string
  status_id__color: string
  responsible_user_id__name: string
  contactIds: number[]
}

export const data: DataI[] = []
export const filteredData = ref<DataI[]>([])

const columns = [
  { title: 'Название', dataIndex: 'name', fixed: true },
  { title: 'Статус', dataIndex: 'status_id__name', key: 'status_id__name' },
  { title: 'Ответственный', dataIndex: 'responsible_user_id__name', key: 'responsible_user_id__name' },
  { title: 'Дата создания', dataIndex: 'created_at__loc' },
  { title: 'Бюджет', dataIndex: 'price__loc', className: 'column-money', },
]

export default defineComponent({
  setup() {

    onMounted(() => {
      const formatterCur = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      })

      apiRequestUtil.getData().then(() => {
        data.push(...amoLeads.map((lead) => {
          let status_id__name = ''
          let status_id__color = ''
          const status = amoStatuses.find((status) => status.pipeline_id === lead.pipeline_id && status.id === lead.status_id)
          if (status) {
            status_id__name = status.name
            status_id__color = status.color
          }

          let responsible_user_id__name = ''
          const user = amoUsers.find((user) => user.id === lead.responsible_user_id)
          if (user) responsible_user_id__name = user.name

          const dataItem: DataI = {
            ...lead,
            key: lead.id,
            created_at__loc: (new Date(lead.created_at * 1000)).toLocaleDateString('ru-RU', {
              year: 'numeric', month: 'long', day: 'numeric'
            }).slice(0, -3),
            price__loc: formatterCur.format(lead.price),
            status_id__name,
            status_id__color,
            responsible_user_id__name,
            contactIds: []
          }

          dataItem.contactIds = amoLinks.filter(
            (link) => link.entity_type === 'leads' && link.to_entity_type === 'contacts' && link.entity_id === lead.id
          ).map((link) => link.to_entity_id)
          return dataItem
        }))

        filteredData.value = data
      }).catch(err => console.log(err.message))
    })

    return {
      data,
      filteredData,
      columns,
    }
  },
  components: {
    SomeContact,
    AntdvUserIcon,
  },
})
</script>

<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
