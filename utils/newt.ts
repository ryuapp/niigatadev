import { Client, createClient } from 'newt-client-js'

export const client: Client = createClient({
  spaceUid: Deno.env.get('YOUR_SPACE_UID')!,
  token: Deno.env.get('YOUR_CDN_API_TOKEN')!,
  apiType: 'cdn', // "cdn" or "api"
})