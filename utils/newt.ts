import { Client, createClient } from 'newt-client-js'

export const client: Client = createClient({
  spaceUid: Deno.env.get('NEWT_SPACE_UID') as string,
  token: Deno.env.get('NEWT_API_TOKEN') as string,
  apiType: Deno.env.get('NEWT_API_TYPE') as 'cdn' | 'api',
})
