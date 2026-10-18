import type { ContactFormData } from '../types'

const SIMULATED_LATENCY_MS = 900

/**
 * Sends a contact request.
 * Currently simulated; replace the body with a real API call
 * (e.g. Supabase insert, n8n webhook or a backend endpoint).
 */
export async function sendContactRequest(data: ContactFormData): Promise<void> {
  if (!data.consent) throw new Error('Consent is required')
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
}
