import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import { useLocale } from '../../lib/locale'

const items = [
  { href: '#work', key: 'work' },
  { href: '#gallery', key: 'gallery' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' }
]

const Nav = () => {
  const { lang, toggle, t } = useLocale()
  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      px={{ base: 5, md: 10 }}
      py={{ base: 4, md: 5 }}
    >
      <Flex align="center" justify="space-between">
        <Link href="#home" display="flex" alignItems="center" gap={2}>
          <Box
            as="span"
            color="cyan"
            fontSize="13px"
            sx={{ textShadow: '0 0 10px rgba(57,240,255,0.7)' }}
          >
            ◆
          </Box>
          <Box
            as="span"
            fontFamily="mono"
            fontSize="13px"
            letterSpacing="0.04em"
            color="fg"
          >
            ISHINUKI_DAIKIE
          </Box>
        </Link>

        <HStack spacing={{ base: 4, md: 7 }} align="center">
          {items.map(it => (
            <Link
              key={it.href}
              href={it.href}
              fontFamily="mono"
              fontSize="11px"
              textTransform="uppercase"
              letterSpacing="0.18em"
              color="muted"
              _hover={{ color: 'cyan' }}
              display={{
                base: it.key === 'contact' ? 'block' : 'none',
                sm: 'block'
              }}
            >
              {t(it.key)}
            </Link>
          ))}
          <Box
            as="button"
            onClick={toggle}
            fontFamily="mono"
            fontSize="11px"
            letterSpacing="0.1em"
            color="cyan"
            border="1px solid"
            borderColor="line"
            px={2}
            py="2px"
            _hover={{
              borderColor: 'cyan',
              boxShadow: '0 0 12px rgba(57,240,255,0.4)'
            }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'EN/日本' : '日本/EN'}
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Nav
