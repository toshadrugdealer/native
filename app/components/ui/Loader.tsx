import { AppConstants } from '@/app.constants'
import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

export const Loader: FC = () => {
	return <ActivityIndicator color={AppConstants.primary} size={'large'} />
}
