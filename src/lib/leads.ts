/**
 * Form helpers.
 *
 * Lead capture is WhatsApp-first: the contact, waiting-list and newsletter
 * forms validate input here, then open a pre-filled WhatsApp chat so every
 * enquiry reaches the breeder directly. Nothing is stored server-side, so
 * there's no database key or endpoint to maintain.
 */

/** Client-side validators shared by the forms. */
export const validators = {
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  /** Kenyan and international numbers: digits, spaces, +, min 9 digits. */
  phone: (v: string) => (v.match(/\d/g) ?? []).length >= 9,
  required: (v: string) => v.trim().length > 1,
};
