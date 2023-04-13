import { createClient } from 'newt-client-js'

const client = createClient({
  spaceUid: Deno.env.get('YOUR_SPACE_UID'),
  token: Deno.env.get('YOUR_CDN_API_TOKEN'),
  apiType: 'cdn', // "cdn" or "api"
})

export function getContents(appUid: string, modelUid: string) {
  const response = client.getContents({
    appUid: appUid,
    modelUid: modelUid,
  })
  return response
}
