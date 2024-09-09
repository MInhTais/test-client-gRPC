import { Fragment, useRef, useState } from 'react'
import styles from './GrpcPage.module.scss'
import classNames from 'classnames/bind'
import { GreetingReply } from '~/app/services/greeting/protos/greeting_pb'
import { greetingService } from '~/app/services/greeting/greetingService'
import { toast } from 'react-toastify'
import { useAppContext } from '~/app/shared/AppContext'
import ModalContent from '~/app/components/ModalContent'
import CreateGreeting from './components/CreateGreeting'
import UpdateGreeting from './components/UpdateGreeting'
import ListGreeting from './components/ListGreeting/ListGreeting'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const cx = classNames.bind(styles)

export default function GrpcPage() {
    const { setOpenConfirmDelete, onConfirm } = useAppContext()
    const [mode, setMode] = useState<'dark' | 'light'>('dark')
    const [valueEdit, setValueEdit] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const greetingIdRef = useRef<string>('')
    const queryClient = useQueryClient()

    // actions greetings
    const createMutation = useMutation({
        mutationFn: (name: string) => greetingService.create({ name })
    })

    const deleteMutation = useMutation({
        mutationFn: (id: string) => greetingService.delete(id)
    })

    const getByIdMutation = useMutation({
        mutationFn: (id: string) => greetingService.getById(id)
    })

    // Get all greetings

    const { data } = useQuery<GreetingReply[]>({
        queryKey: ['greetings'],
        queryFn: async () => {
            return greetingService.getAll()
        }
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, name }: { id: string; name: string }) => greetingService.update(id, { name })
    })

    // Handle add greeting
    const handleAddGreeting = (name: string) => {
        if (name) {
            createMutation.mutateAsync(name, {
                onSuccess: () => {
                    toast.success('Greeting added successfully!')
                    queryClient.invalidateQueries({
                        queryKey: ['greetings']
                    })
                },
                onError: (error: Error) => {
                    toast.error(error.message || 'Failed to add greeting')
                }
            })
        } else {
            toast.error('Please enter name')
        }
    }

    // Handle delete greeting
    const openDeleteGreeting = (id: string) => {
        setOpenConfirmDelete(true)
        if (onConfirm) {
            onConfirm(() => {
                deleteMutation.mutateAsync(id, {
                    onSuccess: () => {
                        toast.success('Greeting deleted successfully!')
                        queryClient.invalidateQueries({
                            queryKey: ['greetings']
                        })
                    },
                    onError: (error: Error) => {
                        toast.error(error.message || 'Delete failed')
                    }
                })
            })
        }
    }

    // Handle edit greeting
    const openEditGreeting = (id: string) => {
        greetingIdRef.current = id
        getByIdMutation.mutateAsync(id, {
            onSuccess: (data) => {
                setValueEdit(data.getMessage())
                setOpenEdit(true)
            },
            onError: (error: Error) => {
                toast.error(error.message || 'Get message failed')
            }
        })
    }

    const handleUpdateGreeting = (id: string, name: string) => {
        updateMutation.mutateAsync(
            { id, name },
            {
                onSuccess: () => {
                    toast.success('Greeting updated successfully!')
                    queryClient.invalidateQueries({
                        queryKey: ['greetings']
                    })
                },
                onError: (error: Error) => {
                    toast.error(error.message || 'Failed to update greeting')
                }
            }
        )
    }

    return (
        <Fragment>
            <ModalContent title='Edit user' isOpen={openEdit} setIsOpen={setOpenEdit}>
                <UpdateGreeting
                    valueEdit={valueEdit}
                    onUpdateGreeting={handleUpdateGreeting}
                    id={greetingIdRef.current}
                    setOpenEdit={setOpenEdit}
                />
            </ModalContent>
            <div
                className={cx('wrap', {
                    light: mode === 'light',
                    dark: mode === 'dark'
                })}
            >
                <div
                    className={cx('inner', {
                        light: mode === 'light',
                        dark: mode === 'dark'
                    })}
                >
                    <div
                        className={cx('content', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        <div>
                            <h1
                                className={cx('title', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                            >
                                gRPC Greeting 👌
                            </h1>
                            <button
                                className={cx('mode', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                                onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                            >
                                {mode === 'dark' ? <i className='ri-sun-line'></i> : <i className='ri-moon-fill'></i>}
                            </button>
                        </div>
                        <CreateGreeting onCreateGreeting={handleAddGreeting} mode={mode} />
                    </div>
                    <div
                        className={cx('list', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        {/* Render list greetings */}
                        <ListGreeting
                            greetings={data || []}
                            mode={mode}
                            onEdit={openEditGreeting}
                            onDelete={openDeleteGreeting}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
