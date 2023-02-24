import { AmoLeadT, AmoLinkT, AmoContactT, AmoCustomFieldT, AmoStatusT, AmoUserT } from './db_interface'

export const amoLeads: AmoLeadT[] = []
// amoLeads.push(...[
//   {
//     "id": 239529,
//     "name": "Сделка 1",
//     "price": 0,
//     "responsible_user_id": 9219490,
//     "status_id": 54958050,
//     "pipeline_id": 6428286,
//     "created_at": 1675937365
//   },
//   {
//     "id": 239530,
//     "name": "Сделка 2",
//     "price": 1000,
//     "responsible_user_id": 9219490,
//     "status_id": 54958050,
//     "pipeline_id": 6428286,
//     "created_at": 1675937365
//   },
// ])

export const amoLinks: AmoLinkT[] = []
// amoLinks.push(...[
//   {
//     entity_id: 352919,
//     entity_type: 'contacts',
//     to_entity_id: 239529,
//     to_entity_type: 'leads'
//   },
//   {
//     entity_id: 352920,
//     entity_type: 'contacts',
//     to_entity_id: 239530,
//     to_entity_type: 'leads'
//   },
// ])

export const amoContacts: AmoContactT[] = []
// amoContacts.push(...[
//   {
//     "id": 352919,
//     "name": "Петр Петров",
//     "first_name": "Петр",
//     "last_name": "Петров",
//     "responsible_user_id": 9219490,
//     "updated_at": 1675937258,
//   },
//   {
//     "id": 352920,
//     "name": "Иван Иванов",
//     "first_name": "Иван",
//     "last_name": "Иванов",
//     "responsible_user_id": 9219490,
//     "updated_at": 1675937258,
//   },
// ])

export const amoCustomFields: AmoCustomFieldT[] = []
// amoCustomFields.push(...[
//   {
//     "zz_contact_id": 352919,
//     "zz_field_code1": "PHONE",
//     "zz_field_code2": "WORK",
//     "field_name": "Телефон",
//     "zz_values": ["+7 999 999 99 99"]
//   },
//   {
//     "zz_contact_id": 352919,
//     "zz_field_code1": "EMAIL",
//     "zz_field_code2": "WORK",
//     "field_name": "Email",
//     "zz_values": ["mail@mail.ru"]
//   },
//   {
//     "zz_contact_id": 352920,
//     "zz_field_code1": "PHONE",
//     "zz_field_code2": "WORK",
//     "field_name": "Телефон",
//     "zz_values": ["+7 999 999 99 99"]
//   },
//   {
//     "zz_contact_id": 352920,
//     "zz_field_code1": "EMAIL",
//     "zz_field_code2": "WORK",
//     "field_name": "Email",
//     "zz_values": ["mail@mail.ru"]
//   },
// ])

export const amoStatuses: AmoStatusT[] = []
// amoStatuses.push(...[
//   {
//     id: 54958046,
//     name: 'Неразобранное',
//     pipeline_id: 6428286,
//     color: '#c1c1c1',
//   },
//   {
//     id: 54958050,
//     name: 'Первичный контакт',
//     pipeline_id: 6428286,
//     color: '#99ccff',
//   },
//   {
//     id: 54958054,
//     name: 'Переговоры',
//     pipeline_id: 6428286,
//     color: '#ffff99',
//   },
// ])

export const amoUsers: AmoUserT[] = []
// amoUsers.push(...[
//   {
//     id: 9219490,
//     name: 'mmm wwww',
//   }
// ])
