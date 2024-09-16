import { CommonResult } from '../services/result/protos/result_pb'

export async function fetchData<T>(getDataFunction: () => Promise<CommonResult>): Promise<T> {
    const result = await getDataFunction()
    const data = result.getData()
    return JSON.parse(data) as T
}
