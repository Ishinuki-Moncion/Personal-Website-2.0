import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

// Cycles through words with a type-in / delete-out effect,
// recreating the old site's typewriter plugin.
const Typewriter = ({ words = [], typingSpeed = 90, deletingSpeed = 45, pause = 1600, ...props }) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return undefined

    const current = words[wordIndex % words.length]
    let delay
    let action

    if (!deleting && text === current) {
      // fully typed — pause, then start deleting
      delay = pause
      action = () => setDeleting(true)
    } else if (deleting && text === '') {
      // fully deleted — advance to the next word
      delay = deletingSpeed
      action = () => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    } else {
      // type or delete one character
      delay = deleting ? deletingSpeed : typingSpeed
      action = () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
    }

    const t = setTimeout(action, delay)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return (
    <Box as="span" {...props}>
      {text}
      <Box
        as="span"
        ml="2px"
        borderRight="3px solid"
        borderColor="accent.400"
        sx={{ animation: 'blink 1s step-end infinite', '@keyframes blink': { '50%': { opacity: 0 } } }}
        aria-hidden
      >
        &nbsp;
      </Box>
    </Box>
  )
}

export default Typewriter
