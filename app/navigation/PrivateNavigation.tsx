import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { useAuth } from '@/hooks/useAuth'
import { routes } from './routes'
import { Auth } from '@/components/screens/auth/Auth'

const Stact = createNativeStackNavigator<TypeRootStackParamList>()
export const PrivateNavigation = () => {
	const { user } = useAuth()
	return (
		<>
			<Stact.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: '#1E1C2E'
					}
				}}
			>
				{user ? (
					routes.map(route => <Stact.Screen key={route.name} {...route} />)
				) : (
					<Stact.Screen name='Auth' component={Auth} />
				)}
			</Stact.Navigator>
		</>
	)
}
