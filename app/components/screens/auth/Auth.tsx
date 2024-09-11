import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'
import { useAuth } from '@/hooks/useAuth'
import { IAuthFormData } from '@/types/auth.interfase'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import { AuthFields } from './AuthFields'

export const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: '',
			...data
		})
		reset()
	}
	const isLoading = false
	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View className='items-center  justify-center flex-1'>
					<View className='w-3/4'>
						<Text className='color-white text-5xl font-bold text-center mb-4'>
							{isReg ? 'Sign Up' : 'Sign In'}
						</Text>
						{isLoading ? (
							<Loader />
						) : (
							<>
								<AuthFields control={control} />
								<Button onPress={handleSubmit(onSubmit)}>Go</Button>

								<Pressable
									onPress={() => setIsReg(!isReg)}
									className='w-16 self-end'
								>
									<Text className=' text-white/60  text-base mt-3 text-right'>
										{isReg ? 'Login' : 'Register'}
									</Text>
								</Pressable>
							</>
						)}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</>
	)
}
