import { type NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { api } from "@/utils/api"
import RootLayout from "@/layouts/root-layout"
import { Box, Button, Heading, Text } from "@chakra-ui/react"
import CallToActionWithIllustration from "@/components/hero/call-to-action"

const Home: NextPage = () => {
	const { data: sessionData } = useSession()

	return (
		<>
			<RootLayout>
				<Box py={8}>
					<CallToActionWithIllustration />
				</Box>
			</RootLayout>
		</>
	)
}

export default Home
