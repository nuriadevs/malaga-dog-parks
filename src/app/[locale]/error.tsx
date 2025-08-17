'use client'
import { ErrorContent } from '@/components/ui/error-content'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}
/* Component for handling errors */
export default function Error({ error, reset }: ErrorProps) {
  return <ErrorContent error={error} reset={reset} />
}