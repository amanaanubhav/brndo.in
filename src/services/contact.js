/**
 * Submit the contact form data to the server-side API route.
 * Keeps all API logic out of components.
 *
 * @param {Object} formData - Validated form data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to submit form');
  }

  return data;
}
