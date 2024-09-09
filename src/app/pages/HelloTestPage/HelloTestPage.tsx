import { useParams } from 'react-router-dom'
import ComponentTest from '~/app/components/ComponentTest'

export default function HelloTestPage() {
    const { id } = useParams<{ id: string }>()
    return <ComponentTest title={`Hello ${id}`} />
}
