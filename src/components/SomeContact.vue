<template>
  <AntdvUserIcon />{{ ` ${contact.name} ` }}
  <a :href="phone">
    <AntdvDivider /><phone-two-tone />
  </a>
  <a :href="email">
    <AntdvDivider /><mail-two-tone />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import AntdvUserIcon from './AntdvUserIcon.vue'
import AntdvDivider from './AntdvDivider.vue'
import { PhoneTwoTone, MailTwoTone } from '@ant-design/icons-vue'
import { AmoContactT } from '../db_interface'
import { amoContacts, amoCustomFields } from '../client_data'

const props = defineProps<{
  contactid: number
}>()

const emptyContact: AmoContactT = {
  id: 0,
  name: '',
  first_name: '',
  last_name: '',
  responsible_user_id: 0,
  updated_at: 0,
}

const amoContact = amoContacts.find((contact) => contact.id === props.contactid) || emptyContact

let phone = ''
const phoneVals = amoCustomFields.find((field) =>
  field.zz_contact_id === props.contactid && field.zz_field_code1 === 'PHONE'
)
if (phoneVals) phone = phoneVals.zz_values[0] || ''
phone = `tel:${phone}`

let email = ''
const emailVals = amoCustomFields.find((field) =>
  field.zz_contact_id === props.contactid && field.zz_field_code1 === 'EMAIL'
)
if (emailVals) email = emailVals.zz_values[0] || ''
email = `mailto:${email}`

const contact = amoContact
</script>