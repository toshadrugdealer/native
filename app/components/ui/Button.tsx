import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface IButton extends PressableProps {}

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<Pressable
			className={cn('self-center mt-4 bg-primary rounded-xl px-8 py-3', className)}
			{...rest}
		>
			<Text className='font-semibold text-white text-xl'>{children}</Text>
		</Pressable>
	)
}
