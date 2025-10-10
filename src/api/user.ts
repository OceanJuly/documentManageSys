import type { IUserApi } from '@/types'
import { request } from '@/utils/http.ts'

export const UserApi: IUserApi = {
	login: (params) =>
		request.post('http://192.168.124.173:3000/api/user/login', params)
}
