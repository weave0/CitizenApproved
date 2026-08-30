exports.supports = '^10.0.0'
exports.scripts = []

exports.run = async function run(options, pa11y) {
  const issues = []
  const viewportWidth = window.innerWidth
  const pageWidth = Math.max(
    document.documentElement.scrollWidth,
    document.body ? document.body.scrollWidth : 0,
  )

  if (pageWidth > viewportWidth + 1) {
    issues.push({
      code: 'CitizenApproved.Reflow.HorizontalOverflow',
      element: document.documentElement,
      message: `Page requires horizontal scrolling at ${viewportWidth}px viewport width (scrollWidth ${pageWidth}px). WCAG 2.2 SC 1.4.10 expects ordinary content to reflow at 320 CSS px except for content that inherently requires two-dimensional layout.`,
      type: 'error',
      runnerExtras: {
        viewportWidth,
        pageWidth,
        selector: pa11y.getElementSelector(document.documentElement),
        context: pa11y.getElementContext(document.documentElement),
      },
    })
  }

  const target = document.querySelector('#page-content')
  if (!target || target.getAttribute('tabindex') !== '-1') {
    const fallbackElement = target || document.documentElement
    issues.push({
      code: 'CitizenApproved.Keyboard.SkipTarget',
      element: fallbackElement,
      message: 'The shared post-navigation skip target must exist and remain programmatically focusable with tabindex="-1".',
      type: 'error',
      runnerExtras: {
        selector: pa11y.getElementSelector(fallbackElement),
        context: pa11y.getElementContext(fallbackElement),
      },
    })
  }

  const ecosystemNav = document.querySelector('nav[aria-label="GFD ecosystem"]')
  const primaryNav = document.querySelector('nav[aria-label="Primary navigation"]')
  if (ecosystemNav && primaryNav) {
    const ecosystemRect = ecosystemNav.getBoundingClientRect()
    const primaryRect = primaryNav.getBoundingClientRect()
    const horizontalOverlap = Math.min(ecosystemRect.right, primaryRect.right) - Math.max(ecosystemRect.left, primaryRect.left)
    const verticalOverlap = Math.min(ecosystemRect.bottom, primaryRect.bottom) - Math.max(ecosystemRect.top, primaryRect.top)

    if (horizontalOverlap > 1 && verticalOverlap > 1) {
      issues.push({
        code: 'CitizenApproved.Layout.NavigationOverlap',
        element: primaryNav,
        message: 'The primary CitizenApproved navigation must not geometrically overlap the GFD ecosystem navigation.',
        type: 'error',
        runnerExtras: {
          ecosystemBottom: ecosystemRect.bottom,
          primaryTop: primaryRect.top,
          overlapWidth: horizontalOverlap,
          overlapHeight: verticalOverlap,
          selector: pa11y.getElementSelector(primaryNav),
          context: pa11y.getElementContext(primaryNav),
        },
      })
    }
  }

  const positiveTabindex = Array.from(document.querySelectorAll('[tabindex]')).filter((element) => {
    const value = Number(element.getAttribute('tabindex'))
    return Number.isFinite(value) && value > 0
  })

  for (const element of positiveTabindex) {
    issues.push({
      code: 'CitizenApproved.Keyboard.PositiveTabindex',
      element,
      message: 'Positive tabindex values create fragile, non-document keyboard focus order and are not allowed in the public interface.',
      type: 'error',
      runnerExtras: {
        selector: pa11y.getElementSelector(element),
        context: pa11y.getElementContext(element),
      },
    })
  }

  return issues
}
