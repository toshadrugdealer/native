import cn from 'clsx'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import { validEmail } from './email.rgx'
import { IAuthFormData } from '@/types/auth.interfase'

export const AuthFields: FC<{ control: Control<IAuthFormData> }> = ({
	control
}) => {
	return (
		<>
			<Controller
				control={control}
				name='email'
				rules={{
					required: "Email can't be empty",
					pattern: {
						value: validEmail,
						message: 'Invalid email'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded bg-[#272541] border pb-3 pt-1.5 px-4 my-2',
								!!error ? 'border border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Email'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white text-lg'
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
			<Controller
				control={control}
				name='password'
				rules={{
					required: "Password can't be empty",
					minLength: {
						value: 10,
						message: 'Password must be at least 10 characters'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded bg-[#272541] border pb-3 pt-1.5 px-4 my-2',
								!!error ? 'border border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Password'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white text-lg'
								secureTextEntry
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
		</>
	)
}
