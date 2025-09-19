export type IResponse<T> = Promise<{
	code: number
	data: T
	message: string
	success: boolean
}>
