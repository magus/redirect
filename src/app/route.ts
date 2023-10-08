import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  console.info('GET', request.url)

  const match = request.url.match(RE.subdomain)

  if (!match?.groups) {
    return Response.json({ redirect: false })
  }

  const subdomain = match.groups.subdomain

  switch (subdomain) {
    case 'codesandbox':
      redirect('https://codesandbox.io/u/magus')

    default:
      return Response.json({ redirect: false, subdomain })
  }
}

const RE = {
  subdomain: /(?<subdomain>[^\/^\.]+)\.iamnoah\.com/,
}
