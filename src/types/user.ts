import type { IResponse } from '@/types/common.ts'

export interface ILoginForm {
	userCode: string
	password: string
}

/* 接口声明 */
export interface IUserApi {
	login: (params: ILoginForm) => IResponse<{ token: string }>
}
