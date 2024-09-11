import { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import cn from 'clsx'
import { AppConstants } from '@/app.constants'

export const Timer: FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<>
			<View>
				<Text>Timer</Text>

				<Pressable
					onPress={() => setIsPlaying(!isPlaying)}
					className={cn(
						'mt-10 self-center bg-primary w-16 h-16 items-center justify-center rounded-full',
						!isPlaying && 'pl-1.5'
					)}
					style={{
						shadowColor: AppConstants.primary,
						shadowOffset: { width: 0, height: 3 },
						shadowOpacity: 0.5,
						shadowRadius: 10,
						elevation: 20
					}}
				>
					<Foundation name={isPlaying ? 'pause' : 'play'} color='white' size={42} />
				</Pressable>
			</View>
		</>
	)
}
