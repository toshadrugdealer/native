import { Button } from '@/components/ui/Button'
import { Layout } from '@/components/ui/layout/Layout'
import { useAuth } from '@/hooks/useAuth'
import { Text, View } from 'react-native'

export const Profile = () => {
	const { setUser } = useAuth()
	return (
		<Layout title='Profile'>
			<Button onPress={() => setUser(null)}>Logout</Button>
		</Layout>
	)
}
