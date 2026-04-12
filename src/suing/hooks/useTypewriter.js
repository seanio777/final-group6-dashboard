import { useEffect, useRef } from 'react'

const DELAY = 18
const animatedSections = new Set()

async function typewriterEffect(element) {
  const originalText = element.textContent
  element.textContent = ''
  for (let i = 0; i < originalText.length; i++) {
    element.textContent += originalText.charAt(i)
    await new Promise(r => setTimeout(r, DELAY))
  }
}

async function typeAllTextInCard(card) {
  const textElements = card.querySelectorAll('h3, p, .subtitle, .level-detail, .program-info')
  for (const el of textElements) {
    if (!el.textContent.trim() || el.dataset.typed) continue
    el.dataset.typed = 'true'
    await typewriterEffect(el)
  }
}

async function autoTypewriterSection(section) {
  if (['contact', 'projects', 'references'].includes(section.id)) return

  const cardSelectors = '.info-card, .seminar-card, .achievement-card, .timeline-card'
  const cards = Array.from(section.querySelectorAll(cardSelectors))

  if (section.id === 'academic') {
    cards.forEach(card => card.classList.add('card-visible'))
    for (const card of cards) await typeAllTextInCard(card)
    return
  }

  for (const card of cards) card.classList.remove('card-visible')
  for (const card of cards) {
    card.classList.add('card-visible')
    await typeAllTextInCard(card)
    await new Promise(r => setTimeout(r, 120))
  }
}

export default function useTypewriter() {
  const observerRef = useRef(null)

  useEffect(() => {
    // Reset animated sections when component mounts
    // (important when navigating back to this page)
    animatedSections.clear()

    const sections = document.querySelectorAll('.suing-root section[id]')

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            document.querySelectorAll('.suing-root nav ul li a').forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
            })
            if (!animatedSections.has(id)) {
              animatedSections.add(id)
              autoTypewriterSection(entry.target)
            }
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(s => observerRef.current.observe(s))

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])
}