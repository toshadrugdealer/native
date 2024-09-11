import { FC } from 'react'
import { IMenuItem, TypeNav } from './menu.interfase'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AppConstants } from '@/app.constants'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}
export const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
	const isActive = currentRoute === item.path
	return (
		<>
			<Pressable
				className='w-[24%] items-center'
				onPress={() => nav(item.path)}
				style={
					isActive && {
						shadowColor: AppConstants.primary,
						shadowOffset: { width: 0, height: 3 },
						shadowOpacity: 0.8,
						shadowRadius: 10,
						elevation: 20
					}
				}
			>
				<Feather
					name={item.iconName}
					size={26}
					color={isActive ? AppConstants.primary : '#8D8A97'}
				/>
			</Pressable>
		</>
	)
}
