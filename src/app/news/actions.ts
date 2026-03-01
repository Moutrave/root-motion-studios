'use server'

export async function subscribe(formData: FormData) {
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' }
  }

  const res = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    },
    body: JSON.stringify({ email_address: email }),
  })

  if (res.ok) {
    return { success: true }
  }

  const data = await res.json()

  if (res.status === 409 || JSON.stringify(data).includes('already')) {
    return { error: 'You are already subscribed!' }
  }

  return { error: 'Something went wrong. Please try again.' }
}
