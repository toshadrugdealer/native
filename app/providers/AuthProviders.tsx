import * as Splash from 'expo-splash-screen'
import { IUser } from '@/types/user.interface'
import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'

export type TypeUserState = IUser | null

interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}
export const AuthContext = createContext({} as IContext)

let ignore = Splash.preventAutoHideAsync()
export const AuthProviders: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let isMounted = false

		const getUserFromStorage = async () => {
			if (isMounted) {
				//
			}
			await Splash.hideAsync()
		}
		let ignore = getUserFromStorage()
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<>
			<AuthContext.Provider value={{ user, setUser }}>
				{children}
			</AuthContext.Provider>
		</>
	)
}
