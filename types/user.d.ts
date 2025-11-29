/**
 * Represents a user record in the system.
 */
interface User {
  /** User ID or undefined if not yet assigned. */
  id?: string | null

  /** Email or null. */
  email?: string | null

  /** Age or null. */
  age?: number | null

  /** Creation timestamp or null. */
  createdAt?: Date | null

  /** Profile record or null. */
  profile?: {
    /** Short biography text. */
    bio?: string | null

    /** When the profile was created. */
    createdAt?: Date | null
  } | null
}
