import { Auth } from '@/components/screens/auth/Auth'
import { Navigation } from '@/navigation/Navigation'
import { AuthProviders } from '@/providers/AuthProviders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProviders>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProviders>

			<StatusBar style='light' />
		</QueryClientProvider>
	)
}
