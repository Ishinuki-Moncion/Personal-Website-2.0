import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoMenu, IoMoon, IoSunny, IoLogoGithub } from 'react-icons/io5'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#interactions', label: 'Interactions' },
]

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    px={2}
    py={1}
    fontWeight="medium"
    color="inherit"
    _hover={{ color: useColorModeValue('accent.500', 'accent.300'), opacity: 1 }}
  >
    {children}
  </Link>
)

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={20}
      bg={useColorModeValue('rgba(247,245,242,0.8)', 'rgba(22,22,26,0.8)')}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    >
      <Container maxW="container.lg" py={3}>
        <Flex align="center">
          <Link href="#home" _hover={{ textDecoration: 'none' }}>
            <Heading as="span" size="md" letterSpacing="tight">
              Ishinuki&nbsp;Daikie
            </Heading>
          </Link>
          <Spacer />

          <HStack
            spacing={1}
            display={{ base: 'none', md: 'flex' }}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>

          <HStack spacing={2} ml={4}>
            <IconButton
              as={Link}
              href="https://github.com/Ishinuki-Moncion"
              isExternal
              aria-label="GitHub"
              icon={<IoLogoGithub />}
              variant="ghost"
              fontSize="20px"
            />
            <IconButton
              aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              icon={colorMode === 'dark' ? <IoSunny /> : <IoMoon />}
              onClick={toggleColorMode}
              variant="ghost"
              fontSize="20px"
            />

            <Box display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<IoMenu />}
                  variant="outline"
                  aria-label="Open menu"
                  fontSize="20px"
                />
                <MenuList>
                  {links.map((link) => (
                    <MenuItem key={link.href} as={Link} href={link.href}>
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
