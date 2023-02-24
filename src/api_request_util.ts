import { DomainSchemaT, domainUtil } from './domain'
import { amoLeadDomSchema, amoLinkDomSchema, amoContactDomSchema, amoCustomFieldDomSchema, amoStatusDomSchema, amoUserDomSchema } from './db_interface'
import { CONFIG_CLIENT } from './client_config'
import { amoLeads, amoLinks, amoContacts, amoCustomFields, amoStatuses, amoUsers } from './client_data'

export const apiRequestUtil = {
  async getData() {
    const serverApiPath = CONFIG_CLIENT.serverUrl + '/api/lead'
    let result: Awaited<ReturnType<Response['json']>>
    try {
      const response = await fetch(serverApiPath)
      result = await response.json()
    } catch (error) {
      console.error(error)
      return
    }

    let docs: unknown
    docs = result['amo_lead']
    if (domainUtil.isDocumentArray(docs, amoLeadDomSchema))
      amoLeads.push(...docs)

    docs = result['entity_link']
    if (domainUtil.isDocumentArray(docs, amoLinkDomSchema))
      amoLinks.push(...docs)

    docs = result['amo_contact']
    if (domainUtil.isDocumentArray(docs, amoContactDomSchema))
      amoContacts.push(...docs)

    docs = result['contact_custom_field']
    if (domainUtil.isDocumentArray(docs, amoCustomFieldDomSchema))
      amoCustomFields.push(...docs)

    docs = result['pipeline_status']
    if (domainUtil.isDocumentArray(docs, amoStatusDomSchema))
      amoStatuses.push(...docs)

    docs = result['responsible_user']
    if (domainUtil.isDocumentArray(docs, amoUserDomSchema))
      amoUsers.push(...docs)
  },

  async getLeadFilter(filterText: string): Promise<number[]> {
    const leadIds: number[] = []
    if (filterText.length < 3)
      throw new Error('filterText.length < 3')

    const queryParams = { query: filterText }
    const queryString = new URLSearchParams(queryParams).toString() // 'param1=value1&param2=value2'

    const serverApiPath = CONFIG_CLIENT.serverUrl + `/api/lead?${queryString}`
    let result: Awaited<ReturnType<Response['json']>>
    try {
      const response = await fetch(serverApiPath)
      result = await response.json()
    } catch (error) {
      console.error(error)
      return leadIds
    }

    const resultDomSchema: DomainSchemaT<{ leadIds: number[]} > = {
      leadIds: { type: 'number[]' }
    }
    if (domainUtil.isDocument(result, resultDomSchema))
      leadIds.push(...result.leadIds)

    return leadIds
  }
}
