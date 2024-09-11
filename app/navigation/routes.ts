import { Home } from '@/components/screens/home/Home'
import { IRoute } from './navigation.types'
import { Auth } from '@/components/screens/auth/Auth'
import { Settings } from '@/components/screens/settings/Settings'
import { Profile } from '@/components/screens/profile/Profile'
import { Statistics } from '@/components/screens/statistics/Statistics'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Statistics',
		component: Statistics
	}
]
