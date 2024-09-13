import { Layout } from '@/components/ui/layout/Layout'
import { Text, View } from 'react-native'
import { Timer } from './timer/Timer'

export const Home = () => {
	return (
		<Layout title='Timer'>
			<Timer />
		</Layout>
	)
}
