import { FC, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import cn from 'clsx'
import { AppConstants } from '@/app.constants'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { EnumStatus } from './timer.interfase'

const flowDuration = 5
const sessionCount = 7
const breakDuration = 1 * 60

export const Timer: FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST)
	const [currentSession, setCurrentSession] = useState(1)
	const [key, setKey] = useState(0)

	useEffect(() => {
		if (isPlaying && status === EnumStatus.REST) {
			setKey(prev => prev + 1)
		}
	}, [isPlaying])

	const isAllSessionComplited = currentSession === sessionCount

	return (
		<>
			<View className='justify-center flex-1'>
				<View className='self-center'>
					<CountdownCircleTimer
						key={key}
						isPlaying={isPlaying}
						duration={flowDuration}
						colors={['#3A3570', '#664FF3']}
						colorsTime={[flowDuration, 0]}
						trailColor='#2f2f4c'
						onComplete={() => {
							setIsPlaying(false)
							setCurrentSession(prev => prev + 1)
							setStatus(EnumStatus.REST)

							if (isAllSessionComplited) {
								// конец
								setStatus(EnumStatus.COMPLETED)
							}
						}}
						size={300}
						strokeWidth={15}
						onUpdate={remainingTime => {
							if (!!remainingTime) {
								setStatus(EnumStatus.WORK)
							}
						}}
					>
						{({ remainingTime }) => {
							let minutes: string | number = Math.floor(remainingTime / 60)
							let seconds: string | number = remainingTime % 60
							if (status === EnumStatus.REST) {
								minutes = Math.floor(flowDuration / 60)
								seconds = flowDuration % 60
							}

							minutes = minutes < 10 ? '0' + minutes : minutes
							seconds = seconds < 10 ? '0' + seconds : seconds

							return (
								<View className='mt-7'>
									<Text className='text-white text-6xl font-semibold'>{`${minutes}:${seconds}`}</Text>
									<Text className='text-center text-white text-3xl mt-1'>
										{status}
									</Text>
								</View>
							)
						}}
					</CountdownCircleTimer>
					<View className='mt-14 flex-row items-center justify-center'>
						{Array.from(Array(sessionCount)).map((_, i) => (
							<View key={i} className='flex-row items-center'>
								<View
									className={cn(
										'w-5 h-5 rounded-full border-4 bg-[#2c2b3c] border-[#2c2b3c]',
										{
											'bg-primary opacity-50 border-primary':
												i + 2 <= currentSession
										},
										i + 1 === currentSession &&
											'w-8 h-8 bg-[#2c2b3c] border-[6px] border-primary  opacity-50'
									)}
								/>
								{i + 1 !== sessionCount && (
									<View
										className={cn('w-5 h-1 bg-[#2f2f4c] opacity-50', {
											'bg-primary opacity-50': i + 2 <= currentSession
										})}
									/>
								)}
							</View>
						))}
					</View>
				</View>

				<Pressable
					onPress={() => {
						setIsPlaying(!isPlaying)
					}}
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
					<Foundation
						name={isPlaying ? 'pause' : 'play'}
						color='white'
						size={42}
					/>
				</Pressable>
			</View>
		</>
	)
}
