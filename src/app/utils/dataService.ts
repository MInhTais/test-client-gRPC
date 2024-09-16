import { CommonResult } from '../services/result/protos/result_pb'

export async function fetchData<T>(getDataFunction: () => Promise<CommonResult>, id?: number): Promise<T> {
    const result = id != null ? await getDataFunction() : await getDataFunction()
    const data = result.getData()
    return JSON.parse(data) as T
}
