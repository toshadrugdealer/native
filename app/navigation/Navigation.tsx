import { BottomMenu } from '@/components/ui/layout/BottomMenu/BottomMenu'
import { useAuth } from '@/hooks/useAuth'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { PrivateNavigation } from './PrivateNavigation'

export const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listner = navRef.addListener('state', () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		})
		return () => {
			navRef.removeListener('state', listner)
		}
	}, [])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}
