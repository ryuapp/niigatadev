export async function getNewtJson(appUid: String, modelUid: String) {
  const URL = Deno.env.get('YOUR_CDN_API_URL')
  const token = Deno.env.get('YOUR_CDN_API_TOKEN')
  const response = await fetch(URL + appUid + '/' + modelUid, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json()
  })

  return response
}
