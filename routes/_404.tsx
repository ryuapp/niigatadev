import { UnknownPageProps } from '$fresh/server.ts'
import UnknownPage from '../components/UnknownPage.tsx'

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <UnknownPage />
}
