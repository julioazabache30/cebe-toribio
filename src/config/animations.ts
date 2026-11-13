/**
 * Animation timing and easing configuration for the entire application.
 * You can edit all scroll reveal speeds and delays from this single file.
 */

export const ANIMATION_CONFIG = {
  // Global transition duration in milliseconds (default: 650ms)
  // Higher = slower and smoother | Lower = faster and snappier
  defaultDuration: 2000,

  // Extra wait (ms) added to every element before it starts to appear
  baseDelay: 400,

  // Default threshold: percentage of the element that must be visible to trigger (0.12 = 12%)
  defaultThreshold: 0.12,

  // Cascade delays for sequential elements (stagger effect) in milliseconds
  delays: {
    heroTag: 0,
    heroTitle: 90,
    heroDescription: 180,
    heroButtons: 260,
    heroHighlights: 340,
    heroImage: 150,

    gridItemStagger: 100, // Multiplied by index (0ms, 100ms, 200ms...)
    formStagger: 80,
    asideStagger: 160,
  },
} as const

