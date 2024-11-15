import { Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
    return (
        <Box as="nav" bg="teal.500" p={4}>
            <ChakraLink as={Link} href="/" color="white" mr={4}>
                Home
            </ChakraLink>
            <ChakraLink as={Link} href="/posts" color="white" mr={4}>
                About
            </ChakraLink>
            <ChakraLink as={Link} href="/portfolio" color="white">
                Portfolio
            </ChakraLink>
        </Box>
    );
}
